<?php
namespace App\Http\Controllers;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Carbon\Carbon;
use App\Order;
use App\Pizza;

class OrderController extends Controller
{

    public function __construct()
    {
        $this->middleware('auth:api', ['except' => []]);
    }

    public function create(Request $request)
    {

        $user = $request->user();
        $input = $request->all();
        $order = new Order();
        $order->total = $input["total"];
        $order->user_id = $user->id;
        $order->save();

        foreach ($input["pizza"] as $pizza) {
            if ($pizza != null) {
                $cproduct = Pizza::find($pizza["id"]);
                $total = $pizza["quantity"] * $pizza["price"];
                $order->pizzas()->save($cproduct, ["quantity" => $pizza["quantity"], "price" => $pizza["price"], "total" => $total]);
            }
        }
        return response()->json([
            'message' => 'Done, your order is on the way!'
        ]);
    }
}

?>