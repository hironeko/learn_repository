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


### testでつかうやつ

```php
// 爺間固定
Carbon::setTestNow('YYYY-mm-dd 00:00:00');

// everyでcollection内のporpertyに対して同じ判定結果かテストができる
$this->assertTrue($collection->ever(function ($item) => {
    return $item.is_true;
}));
```
