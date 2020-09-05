output "vpc_id" {
  value = aws_vpc.example.id
}

output "subnet_public0_id" {
  value = aws_subnet.public_0.id
}

output "subnet_public1_id" {
  value = aws_subnet.public_1.id
}
