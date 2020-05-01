## use cobra

- 初期設定
  - 以下を実行すると初期設定が行われる
```shell
go get -u github.com/spf13/cobra/cobra
cobra init
  --pkg-name xxxx \
  --config .cobra.yml
```

コマンドの追加
```shell
cobra add xxx \
  --config .cobra.yml\
  --parent rootCmd
```