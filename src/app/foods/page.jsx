import FoodCard from "@/components/cards/FoodCard";
import React from "react";
import { resolve } from "styled-jsx/css";
import CartItems from "./CartItems";
const getFoods = async () => {
  const res = await fetch(
    "https://taxi-kitchen-api.vercel.app/api/v1/foods/random",
  );
  const data = await res.json();
  // card gula 3 sec por dhekakabe
  await new Promise((resolve)=>setTimeout(resolve,3000))
  return data.foods || [];
};
const FoodsPage = async () => {
  const foods = await getFoods();
  return (
    <div>
      <h2 className="text-4xl font-bold">
        {" "}
        Total <span className="text-yellow-500">{foods.length}</span> Found
      </h2>
      <div className="flex gap-2">
            <div className="flex-1 grid my-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {foods.map((food) => (
          <FoodCard key={food.id} food={food}></FoodCard>
        ))}
      </div>
      <div className="w-[250px] border-2 rounded-xl p-4">
        <h2 className="text-2xl font-bold"> Cart Items</h2><hr />
        <CartItems ></CartItems>
      </div>
      </div>
  
    </div>
  );
};

export default FoodsPage;
