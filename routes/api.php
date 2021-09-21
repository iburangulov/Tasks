<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

//Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//    return $request->user();
//});

Route::group(['prefix' => 'v1'], function () {

    Route::group(['middleware' => 'auth:sanctum'], function () {

        Route::apiResource('tasks', \App\Http\Controllers\api\v1\TasksController::class);

    });

    Route::group(['prefix' => 'user'], function () {

        Route::post('/signup', [\App\Http\Controllers\api\v1\AuthController::class, 'signUp']);
        Route::post('/signin', [\App\Http\Controllers\api\v1\AuthController::class, 'signIn']);
        Route::post('/check', [\App\Http\Controllers\api\v1\AuthController::class, 'check']);

    });

});
