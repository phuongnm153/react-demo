<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateProductsTable extends Migration
{
    /**
     * Run the migrations.
     */
    public function up()
    {
        Schema::create('products', function (Blueprint $table) {
            $table->increments('id');
            $table->string('name')->unique()->comment('Tên sản phẩm là duy nhất');
            $table->integer('price')->default(0)->comment('Giá sản phẩm');
            $table->integer('quantity')->default(0)->comment('Số lượng sản phẩm');
            $table->tinyInteger('status')->default(0)->comment('Trạng thái');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down()
    {
        Schema::dropIfExists('products');
    }
}
