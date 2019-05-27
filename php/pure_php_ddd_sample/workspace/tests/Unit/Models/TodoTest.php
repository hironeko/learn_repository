<?php

namespace Tests\Unit\Models;

use Tests\ConnectionDatabase;
use App\Models\Sample;

/**
 * TodoTest class.
 */
class TodoTest extends ConnectionDatabase
{
    /**
     * setUp.
     */
    public function setUp()
    {
        parent::setUp();
    }

    /**
     * sample.
     */
    public function testSample()
    {
        $sample = new Sample();

        $expectedCount = $sample->get();

        $this->assertSame($expectedCount, 1);
    }
}
