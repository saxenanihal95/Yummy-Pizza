<?php
namespace App\Http\Controllers;
use App\Pizza;

class PizzaController extends Controller
{
    public function index()
    {
        return Pizza::all()->toJson();
    }
}

?>