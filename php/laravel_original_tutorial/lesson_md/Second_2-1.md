# データの投入

## DB の設定を行います。

まずは、今回の Laravel 用の*database*を作成します。

```shell
mysql -u root -p # 適宜変更してください
passwaord:
mysql > create database todos;
```

コマンドを実行したあとに Query OK と表示されたら問題ありません。
作成されたかどうか確認するには、以下のコマンドを実行したら確認できます。

```shell
mysql > show databases;
```

上記コマンドを実行すると database の一覧が表示され、そこに todos が表示されていれば問題ありません

## Laravel 側で DB を使用するための記述を行う

- Laravel に今回使用する DB は、XXX だよと DB の接続情報を教えてあげる必要があります
- Laravel のプロジェクト直下に*.env*という file がありますがこれに情報を書いていきます

```shell
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=todos            # 編集
DB_USERNAME=your_name        # 編集 DBを作成した際のUser名
DB_PASSWORD=your_password    # 編集 DBを作成した際のUserのPassword
# 省略
```

上記のように変更することによって Laravel で先ほど作成した databaese が使用可能になります。

## 次に table の内容をコードとして書くことをしていきます

今回はマイグレーションというバージョン管理のような機能を使ってテーブルを作成します。

- マイグレーションファイル自体が管理機能を有しているわけでなく機能がバージョン管理のような機能として働いていると考えてください。
- migration file というものに書き込んでいきます。

file の作成を行うコマンド

```shell
php artisan make:migration create_todos_table
```

上記コマンドを実行したら*database/migrations/20yy_mm_dd_xxxxxx_create_todos_table.php*という file が作成されていると思います。
この作成された file の編集を行い table の構成を書いていきます。

```php
<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateTodosTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('todos', function (Blueprint $table) {
            $table->increments('id');
            $table->string('title');  /* 追加 */
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('todos');
    }
}
```

上記のように編集が終わったら実際に DB に反映をします。

```shell
php artisan migrate
```

このコマンドを実行し下記のような表示がされたら問題なく databases の反映が終わったことになります。

```shell
Migration table created successfully.
Migrating: 2014_10_12_000000_create_users_table
Migrated:  2014_10_12_000000_create_users_table
Migrating: 2014_10_12_100000_create_password_resets_table
Migrated:  2014_10_12_100000_create_password_resets_table
Migrating: 20yy_mm_dd_xxxxxx_create_todos_table
Migrated:  20yy_mm_dd_xxxxxx_create_todos_table
```

## DB に初期データの投入を行います

- seeder という機能を使用して database に初期データを投入するための file の作成と記述を行います。

```shell
php artisan make:seeder TodosTableSeeder
```

上記コマンド実行することによって*database/seeds/*以下に作成されます。
作成された file に対して編集を行います。以下に記載あるように追加と記載ある範囲を写経しましょう。

```php
<?php
declare(strict_types=1);

use Illuminate\Database\Seeder;
use Illuminate\Support\Carbon;

/**
* TodoTableSeeder class
*/
class TodosTableSeeder extends Seeder
{
    /**
    * @const string table name
    */
    const TABLE_NAME = 'todos';

    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $currentDatetime = Carbon::create('2018-01-01 23:59:59');

        DB::table(self::TABLE_NAME)->truncate();

        DB::table('todos')->insert([
            [
                'title'      => 'フレームワークカリキュラムを終わらせる',
                'created_at' => $currentDatetime,
                'updated_at' => $currentDatetime,
            ],
            [
                'title'      => 'Unixオペレーションに慣れる',
                'created_at' => $currentDatetime,
                'updated_at' => $currentDatetime,
            ],
        ]);
    }
}
```

上記のように変更が終わったらこの新たに追加した Class を使用するために同じ階層に存在する。*DatabaseSeeder.php*という file に追記を行います。
*run*というメソッドの中に先ほど手を加えた*Class*の Class 名を書いてあげます。
そうすることによって作成した Seeder を実行しデータの投入が可能になります。

```php
<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // $this->call(UsersTableSeeder::class);
        $this->call(TodosTableSeeder::class); // 追加
    }
}
```

## DB に反映させる

変更が完了したら作成した file を DB に反映させるためのコマンドを実行します。

```shell
php artisan db:seed
Seeding: TodosTableSeeder
```

コマンド実行後に上記のような表記がされたら問題なく DB に反映が行われています。

## おまけ

```shell
php artisan migrate
php artisan db:seed


# 以下と同義です
php artisan migrate --seed
```

実行することにより結果 migration file の実行と seed file の実行を同時に行うことが可能になります。
