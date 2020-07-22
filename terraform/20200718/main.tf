resource "aws_instance" "example" {
  ami           = "ami-06ad9296e6cf1e3cf"
  instance_type = "t2.micro"

  tags = {
    Name = "example"
  }

  user_data = <<EOF
    #!/bin/bash
    yum install -y httpd
    systemctl start httpd.service
EOF
}
