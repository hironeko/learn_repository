<?php
declare(strict_types=1);

namespace App\Models;

/**
 * Sample class
 */
class Sample extends BaseModel
{
    /**
     * constructor function
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * レコード数を取得
     *
     * @return int
     */
    public function fetchCount()
    {
        $stmt = $this->pdo->query('select * from todos');

        return $stmt->rowCount();
    }
}
