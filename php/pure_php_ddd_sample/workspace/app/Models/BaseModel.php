<?php

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
     * 
     * @return void
     */
    private function connectDatabase()
    {
        try {
            $this->pdo = new PDO(
                $_ENV['DB_DSN'],
                $_ENV['DB_USER'],
                $_ENV['DB_PASSWORD']
            );
        } catch (PDOException $pdoException) {
            throw $pdoException;
        }
    }
}
