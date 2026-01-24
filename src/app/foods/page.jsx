import React from "react";
const getFoods = async () => {
  const res = await fetch(
    "https://taxi-kitchen-api.vercel.app/api/v1/foods/random",
  );
  const data = await res.json();
  return data.foods || [];
};
const FoodsPage = async () => {
  const foods = await getFoods();
  return <div>Total {foods.length} Found</div>;
};

export default FoodsPage;
