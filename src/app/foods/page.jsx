import FoodCard from "@/components/cards/FoodCard";
import React from "react";
import { resolve } from "styled-jsx/css";
import CartItems from "./CartItems";
import InputSearch from "@/components/InputSearch";
import style from "./foods.module.css"
const getFoods = async (search) => {
  const res = await fetch(
    `https://taxi-kitchen-api.vercel.app/api/v1/foods/random?search=${search}`,
    {next:{revalidate:10}}
  );
  const data = await res.json();
  // card gula 3 sec por dhekakabe
  await new Promise((resolve)=>setTimeout(resolve,3000))
  return data.foods || [];
};


// logo er name paltabe jokhon onno route a jabo
export const metadata = {
  title: "All Foods",
  description: "Best FastFood in Bangladesh",
};

//search food

const FoodsPage = async ({searchParams}) => {
  const {search=""}=await searchParams;

  const foods = await getFoods(search);
  return (
    <div>
      <h2 className={`text-4xl font-bold ${style.bgred}`}>
        {" "}
        Total <span className="text-yellow-500">{foods.length}</span> Found
      </h2>
      <div className="my-4">
        <InputSearch></InputSearch>
      </div>
      <div className="flex gap-4">
            <div className="flex-1 grid my-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
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
