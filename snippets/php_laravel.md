## よく使うやつ

```php
// Collectionの作成
$collection = collect(['hoge', 'fuga', 'piyo']);

// defaultで存在しているpaginateの中に存在しているdataの一括操作を行う
$pagination = Model::where('del_flag', false)->paginate(10);
$pagination->getCollection()->each(function (Model $item) {
    // 何かの処理を行う
});
```

- collectionの中のobjectからtrue の物だけでcollectionを作りたい

```php
$collection = collect([
    new ObjectOne([
        'name' => 'one',
        'is_active' => true
    ]),
    new ObjectTwo([
        'name' => 'two',
        'is_active' => true
    ]),
    new ObjectThree([
        'name' => 'three',
        'is_active' => false
    ]),
]);
// かもしくは
$collection = Model::all();

$newCollection = $collection->every(function ($item) {
    return $item->is_active
});
```

### migration

```php
// 外部キー制約：サンプル
Schema::create('comments', function (Blueprint $table) {
    $table->increments('id');
    $table->unsignedInteger('post_id');

    $table->foreign('post_id')->references('id')->on('posts');
});

$table->foreign('self_column_name')->references('制約先のcolumn_name')->on('制約のtable_name');
// もし外部キー設定時に index 名がなげーよって時は以下でaliasをつける
$table->foreign('self_column_name', 'another_index_name')->references('制約先のcolumn_name')->on('制約のtable_name');
```

##＃Validation

- formreequestとか

```php

public function rule()
{
    return [
        'hoge_field' => [
            'required',
            Rule::in(
                // 配列
            ),
            Rule::exists('table_name', 'column')->where(function($q) {
                $q->where('is_archived', false);
            })
        ]
    ]
}

```

### testでつかうやつ

```php
// 爺間固定
Carbon::setTestNow('YYYY-mm-dd 00:00:00');

// everyでcollection内のporpertyに対して同じ判定結果かテストができる
$this->assertTrue($collection->ever(function ($item) => {
    return $item.is_true;
}));
```


```shell
## CLIでテストを実行する際は以下のコマンドで @group でテストを実行可能
$ ./vendor/bin/phpunit --group=group-name
```


### vueであれこれ始める

```
$ composer require laravel/ui
$ php artisan ui vue --auth
$ yarn
```