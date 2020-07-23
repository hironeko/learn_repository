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
    ami = "ami-06ad9296e6cf1e3cf"
    instance_type = "t2.micro"
    vpc_security_group_ids = [aws_security_group.example_ec2.id]

    user_data = <<EOF
      #!/bin/bash
      yum install -y httpd
      systemctl start httpd.service
EOF
}

# URLの出力
output "exapmle_public_dns" {
    value = aws_instance.example.public_dns
}