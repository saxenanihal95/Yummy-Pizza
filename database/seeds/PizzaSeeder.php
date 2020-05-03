<?php

use Illuminate\Database\Seeder;
use App\Pizza;


class PizzaSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        $faker = Faker\Factory::create();
        $json = File::get("database/data/pizza.json");
        $data = json_decode($json);
        foreach($data as $obj) {
            Pizza::create(array(
                'name' => $obj->name,
                'image' => $obj->image,
                'price' => $faker->randomFloat($nbMaxDecimals = NULL, $min = 50, $max = 200)
            ));
        }
    }
}
