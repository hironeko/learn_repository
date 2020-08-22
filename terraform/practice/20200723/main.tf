variable "sample" {
    default = "t3.micro"
}

# 変数定義
# 呼び出し方
resource "example_aws" "example" {
    ami = "ami_id"
    instance_type = var.sample 
    # t3.micro が使用される
}

# コマンドラインで上書きできる
# terraform plan --var 'sample=t3.nano'

# local 変数

local {
    sample = "t3.micro"
}

resource "aws_instance" "example" {
    ami = "ami_id"
    instance_type = local.sample
}

# apply時に出力させる

resource "aws_instance" "example" {
    ami =  "ami_id"
    instance_type = "t3.micro"
}

output "example_instance_id" {
    value = aws_instance.example.id
}

# 外部データの参照
data "aws_ami" "recent_amazon_linux_2" {
    most_recent = true
    owners = ["amazon"]
}

filter {
    name = "name"
    values = ["amazon-ami-hvm-2.0.????????-x86_64-gp2"]
}

resource "aws_instance" "example" {
    ami = data.aws_instance.recent_amazon_linux_2.id
    instance_type = "t3.micro"
}

# AWSの他にGCP, Azureなどにも対応している。そのためそのAPIの違いを吸収するのがプロバイダの役割なので明示的にプロバイダを指定します

provider "aws" {
    region = "ap-northeast-1" # 東京リージョン
}

# セキュリティグループの設定もterraformで行う

# EC2向けのセキュリティグループの定義
resource "aws_security_group" "example_ec2" {
    name = "example-ec2"

    ingress {
        from_port = 80
        to_port = 80
        protocol = "tcp"
        cidr_blocks = ["0.0.0.0/0"]
    }

    egress {
        from_port = 0
        to_port = 0
        protocol = "-1"
        cidr_blocks = ["0.0.0.0/0"]
    }
}

# EC2にセキュリティグループを追加

resource "aws_instance" "example" {
    ami = "ami_id"
    instance_type = "t3.micro"
    vpc_security_group_ids = [aws_security_group.example_ec2]

    user_data = <<EOF
      #!/bin/bash
      yum install -y httpd
      systemctl start httpd.service
EOF
}

output "exapmle_public_dns" {
    value = aws_instance.example.public_dns
}

# terraform apply後にURLが出力される