<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class OrderPizzaTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('order_pizza', function (Blueprint $table) {
            $table->primary(['order_id', 'pizza_id']);
            $table->bigInteger('order_id')->unsigned();
            $table->bigInteger('pizza_id')->unsigned();
            $table->smallInteger('quantity');
            $table->decimal('price', 11, 2);
            $table->decimal('total', 11, 2);
            $table->foreign('order_id')->references('id')->on('orders');
            $table->foreign('pizza_id')->references('id')->on('pizzas');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        //
    }
}
