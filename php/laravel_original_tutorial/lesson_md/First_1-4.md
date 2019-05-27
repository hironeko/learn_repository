## Laravel の構成

- Laravel の構成は、あくまで使用者に委ねる前提で構成されています。

  - なので以下に書いてある MVC がすべてではないということを覚えておきましょう。

- MVC という言葉を聞いたことはありますか？

  - あくまでアーキテクチャです。デザインパターンはありません。
  - オブジェクト指向の上で成り立っています。
  - またアーキテクチャは、ケースバイケースでその形を変えるので`MVC`が絶対ということはありません。
  - プロジェクトにより採用すべきアーキテクチャやデザインパターンは異なります。なので幅広く知ることで多くのアプリケーション作成に対応が可能になります。

- 基本的な MVCS の場合のディレクトリ構成

```
app
├── Console
│   └── Kernel.php
├── Exceptions
│   └── Handler.php
├── Http
│   ├── Controllers
│   ├── Kernel.php
│   ├── Requests
│   └── Middleware
├── Models
│   ├── Hoge.php
│   ├── BaseModel.php
│   └── Fuga.php
├── Providers
│   ├── AppServiceProvider.php
│   ├── AuthServiceProvider.php
│   ├── BroadcastServiceProvider.php
│   ├── EventServiceProvider.php
│   └── RouteServiceProvider.php
└── Services
```

- 小規模・中規模レベルならば上記のような構成で十分問題ないかと思います。
  - C・コントローラー:あくまで画面からのリクエストを S に相当する service 層に要求します
  - S・サービス:コントローラーから受け取ったものを元に計算処理を行います。(算数等の計算を意味しません)
  - M・モデル:一般的に呼ばれる名称ではありますがあまり的を射てないのであくまで DB に対して何かしらを要求(問い合わせ、接続)をする箇所と考えましょう。
  - V・ビュー:これは皆さんご存知の画面ですね。Laravel では Blade を使用します。
