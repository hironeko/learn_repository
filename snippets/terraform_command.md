## terraform commandのチートシート

```shell
$ terraform plan
$ terraform apply
$ terraform workspace select space_name
$ terraform workpsace list
```


## amiの取得コマンド

```shell
$ aws ssm get-parameters \
        --name /aws/service/ami-amazon-linux-latest/amzn2-ami-hvm-arm64-gp2 \
        --query "Parameters.Value" \
        --region ap-northeast-1
```