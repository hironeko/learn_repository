<?php

namespace Tests;

use PHPUnit\DbUnit\DataSet\YamlDataSet;
use PHPUnit\DbUnit\Operation\Factory;
use PHPUnit\DbUnit\TestCaseTrait;
use PHPUnit\Framework\TestCase;
use PDO;

class ConnectionDatabase extends TestCase
{
    use TestCaseTrait;

    /**
     * @var PDO
     */
    private static $pdo = null;

    private $connection = null;
    private $dataSet;

    public function getConnection()
    {
        if ($this->connection === null) {
            if (self::$pdo === null) {
                self::$pdo = new PDO(
                    $_ENV['DB_DSN'],
                    $_ENV['DB_USER'],
                    $_ENV['DB_PASSWORD']
                );
            }
            $this->connection = $this->createDefaultDBConnection(self::$pdo, $_ENV['DB_NAME']);
        }

        return $this->connection;
    }

    protected function setUp()
    {
        $namespaceSeparate = explode('\\', get_class($this));
        $className = array_pop($namespaceSeparate);
        $fixturePath = 'tests/Fixture/'.$className.'.yml';
        $this->dataSet = new YamlDataSet($fixturePath);
        parent::setUp();
    }

    protected function getDataSet()
    {
        return $this->dataSet;
    }

    public function getTearDownOperation()
    {
        return Factory::TRUNCATE();
    }

    public function tearDown()
    {
        parent::tearDown();
    }
}
