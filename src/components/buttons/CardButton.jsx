"use client";
import { CartContext } from "@/context/CartProvider";
import { ShoppingCart } from "lucide-react";
import React, { use, useState } from "react";

const CardButton = ({ food }) => {
  const [inCart, setInCart] = useState(false);
  const { addToCart } = use(CartContext);
  const handleadd2cart = () => {
    addToCart(food);
    setInCart(true);
  };
  return (
    <div>
      <button
        onClick={handleadd2cart}
        disabled={inCart}
        className="flex items-center gap-2 bg-orange-500 hover:bg-black text-white px-5 py-3 rounded-2xl font-bold text-sm transition-all duration-300 shadow-md shadow-orange-100 active:scale-95 disabled:bg-gray-400"
      >
        <ShoppingCart size={18} />
        {inCart ? "Added" : "Add to Card"}
      </button>
    </div>
  );
};

export default CardButton;
// 70.6
