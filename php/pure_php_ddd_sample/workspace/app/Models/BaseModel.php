<?php
declare(strict_types=1);

namespace App\Models;

use PDO;
use PDOException;

/**
 * BaseModel class
 */
class BaseModel
{
    private $pdo;

    /**
     * constructor function
     */
    public function __construct()
    {
        $this->connectDatabase();
    }

    /**
     * PDO接続
     */
    private function connectDatabase()
    {
        try {
            // PDOの処理
        } catch (PDOException $pdoException) {
            // exceptionをcatch
        }
    }
}
