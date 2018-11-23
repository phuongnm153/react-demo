<?php

use Illuminate\Support\Facades\Route;
Route::get('/', 'ProductController@index')->name('products.index');
Route::post('/', 'ProductController@store')->name('products.store');
Route::get('/{id}', 'ProductController@show')->name('products.show');
Route::match(['put', 'patch'], '/{id}', 'ProductController@update')->name('products.update');
Route::delete('/{id}', 'ProductController@destroy')->name('products.destroy');

//Route::group(['middleware' => 'auth:api'], function() {
//    Route::resource('','ProductController');
//});