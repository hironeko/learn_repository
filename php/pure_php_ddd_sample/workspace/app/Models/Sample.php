<?php

namespace App\Models;

use PDO;

class Sample extends BaseModel
{
    private $pdo;

    public function __construct()
    {
        parent::__construct();
    }

    public function get()
    {
        $stmt = $this->pdo->query('select * from todos');
        // die(var_dump($stmt));

        return $stmt->rowCount();
    }
}
