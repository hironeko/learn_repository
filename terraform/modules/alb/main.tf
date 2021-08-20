variable "subnet_public0_id" {}
variable "subnet_public1_id" {}
variable "s3_alb_log_id" {}
variable "http_sg_security_group_id" {}
variable "https_sg_security_group_id" {}
variable "http_redirect_sg_security_group_id" {}

resource "aws_lb" "example" {
  name                       = "example"
  load_balancer_type         = "application"
  internal                   = false
  idle_timeout               = 60
  enable_deletion_protection = false

  subnets = [
    var.subnet_public0_id,
    var.subnet_public1_id
  ]

  access_logs {
    bucket  = var.s3_alb_log_id
    enabled = true
  }

  security_groups = [
    var.http_sg_security_group_id,
    var.https_sg_security_group_id,
    var.http_redirect_sg_security_group_id
  ]
}

resource "aws_lb_listener" "http" {
  load_balancer_arn = aws_lb.example.arn
  port              = "80"
  protocol          = "HTTP"

  default_action {
    type = "fixed-response"

    fixed_response {
      content_type = "text/plain"
      message_body = "これは[HTTP]"
      status_code  = "200"
    }
  }
}
