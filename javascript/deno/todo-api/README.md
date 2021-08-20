## サーバー起動

### 参考
https://www.youtube.com/watch?v=5sPiwOllJoQ

```shell
deno run --allow-net  --allow-env --allow-read  ./server.ts 
```


### install denon 
```shell
deno install --allow-read --allow-run --allow-write --allow-net -f --unstable https://deno.land/x/denon@v2.2.0/denon.ts

echo 'export PATH="$HOME/.deno/bin:$PATH"' >> ~/.zshrc
```