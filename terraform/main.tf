provider "aws" {
  access_key = var.access_key
  secret_key = var.secret_key
  region     = "ap-northeast-1"
}

module "http_server" {
  source        = "./modules/http_server"
  instance_type = "t2.micro"
}

module "iam_role" {
  source     = "./modules/iam_role"
  name       = "describe-regions-for-ec2"
  identifier = "ec2.amazonaws.com"
}

module "network" {
  source = "./modules/network"
}

module "s3" {
  source = "./modules/s3"
}

module "alb" {
  source                             = "./modules/alb"
  subnet_public0_id                  = module.network.subnet_public0_id
  subnet_public1_id                  = module.network.subnet_public0_id
  s3_alb_log_id                      = module.s3.s3_alb_log_id
  http_sg_security_group_id          = module.http_sg.security_group_id
  https_sg_security_group_id         = module.https_sg.security_group_id
  http_redirect_sg_security_group_id = module.http_redirect_sg.security_group_id
}

module "http_sg" {
  source = "./modules/security_group"
  name   = "http-sg"
  # vpc_id = aws_vpc.example.id
  vpc_id      = module.network.vpc_id
  port        = 80
  cidr_blocks = ["0.0.0.0/0"]
}

module "https_sg" {
  source = "./modules/security_group"
  name   = "https-sg"
  # vpc_id      = aws_vpc.example.id
  vpc_id      = module.network.vpc_id
  port        = 443
  cidr_blocks = ["0.0.0.0/0"]
}

module "http_redirect_sg" {
  source = "./modules/security_group"
  name   = "http-redirect-sg"
  # vpc_id      = aws_vpc.example.id
  vpc_id      = module.network.vpc_id
  port        = 8080
  cidr_blocks = ["0.0.0.0/0"]
}
