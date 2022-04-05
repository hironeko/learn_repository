## ただただめんどい

- 下記では、足りないものあるから足す、エラーが出たら都度追加する
```shell
$ brew install zlib curl bzip libiconv libedit tidy-html5
```

- 以下のように修正する

~/.anyenv/envs/phpenv/plugins/php-build/share/php-build/default_configure_options
```
--enable-sockets
--enable-exif
--with-zlib
--enable-intl
--with-kerberos
--with-openssl
--enable-soap
--enable-xmlreader
--with-xsl
--enable-ftp
--enable-cgi
--with-curl=/usr
--with-tidy
--with-xmlrpc
--enable-sysvsem
--enable-sysvshm
--enable-shmop
--with-mysqli=mysqlnd
--with-pdo-mysql=mysqlnd
--with-pdo-sqlite
--enable-pcntl
--with-readline
--enable-mbstring
--disable-debug
--enable-fpm
--enable-bcmath
--enable-phpdbg

--with-zlib-dir=/usr/local/opt/zlib
--with-bz2=/usr/local/opt/bzip2
--with-iconv=/usr/local/opt/libiconv
--with-libedit=/usr/local/opt/libedit
--with-curl=/usr/local/opt/curl
--with-tidy=/usr/local/opt/tidy-html5
```

> M1になるとbrewのpathが変更されて、/opt/homebrew/binになる

- 以下コマンド実行
```shell
$ PHP_BUILD_CONFIGURE_OPTS="--with-libedit=$(brew --prefix libedit)" phpenv install 7.2.13
```

- phpenv で7.4.*系入れるときに必要
```shell
# phpenv version 7.4系を入れるため
export PKG_CONFIG_PATH="$(brew --prefix krb5)/lib/pkgconfig:$PKG_CONFIG_PATH"
export PKG_CONFIG_PATH="$(brew --prefix openssl@1.1)/lib/pkgconfig:$PKG_CONFIG_PATH"
export PKG_CONFIG_PATH="$(brew --prefix icu4c)/lib/pkgconfig:$PKG_CONFIG_PATH"
```

```shell
$ phpenv install 7.4.8
```
