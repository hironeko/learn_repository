<?php
declare(strict_types=1);

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Response;

/**
 * SampleController class
 */
class SampleController extends Controller
{
    /**
     * Sample データを返却
     *
     * @return Response
     */
    public function __invoke()
    {
        return response()->json(['test' => 'welcome laravue world!!!']);
    }
}
