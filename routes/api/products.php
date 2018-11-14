<?php

use Illuminate\Support\Facades\Route;
Route::resource('','ProductController');

//Route::group(['middleware' => 'auth:api'], function() {
//    Route::resource('','ProductController');
//});