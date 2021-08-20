## tailwindの設定

```shell
$ yarn add tailwind or npm i tailwind
$ npx tailwind init
```

#### laravelで使う場合

```js
const mix = require('laravel-mix');
const tailwind = require('tailwindcss');

mix.js('resources/js/app.js', 'public/js')
    .sass('resources/sass/app.scss', 'public/css')
    options({
        processCssUrls: false,
        postCss: [ tailwind('./tailwind.config.js')]
    });
```

resource/sass/app.sassに次を追加

```scss

@tailwind base;

@tailwind components;

@tailwind utilities;

```