<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Order extends Model
{
    public function pizzas()
    {
        return $this->belongsToMany('App\Pizza', 'order_pizza', 'order_id', 'pizza_id')
            ->withPivot('quantity', 'price', 'total');
    }
}
