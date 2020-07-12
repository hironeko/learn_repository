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