// components/FoodCard.jsx
import Image from "next/image";
import Link from "next/link";
import { ShoppingCart, Eye, Heart, Star } from "lucide-react";

const FoodCard = ({ food }) => {
  return (
    <div className="group relative bg-white rounded-[2.5rem] p-4 shadow-sm hover:shadow-[0_20px_50px_rgba(0,0,0,0.1)] transition-all duration-500 ease-[underline] border border-gray-50 hover:-translate-y-2">
      {/* 1. Image Section with Overlay Buttons */}
      <div className="relative w-full h-64 overflow-hidden rounded-[2rem] bg-gray-50">
        <Image
          src={food.foodImg}
          alt={food.title}
          fill
          className="object-cover transition-transform duration-1000 group-hover:scale-110"
        />

        {/* Wishlist Button */}
        <button className="absolute top-4 right-4 p-2.5 bg-white/80 backdrop-blur-md rounded-full text-gray-400 hover:text-red-500 hover:bg-white transition-all shadow-sm active:scale-90">
          <Heart size={20} />
        </button>

        {/* Rating Badge */}
        <div className="absolute bottom-4 left-4 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-xl flex items-center gap-1 text-white border border-white/20">
          <Star size={14} className="fill-yellow-400 text-yellow-400" />
          <span className="text-xs font-bold">{food.rating || "4.5"}</span>
        </div>
      </div>

      {/* 2. Content Section */}
      <div className="px-2 pt-5 pb-2">
        {/* Category & Availability */}
        <div className="flex justify-between items-center mb-2">
          <span className="text-[11px] font-bold uppercase tracking-widest text-orange-500 bg-orange-50 px-2 py-0.5 rounded-md">
            {food.category}
          </span>
          <div className="flex gap-1">
            <div
              className="w-2 h-2 rounded-full bg-green-500"
              title="Available"
            ></div>
          </div>
        </div>

        {/* Title */}
        <h2 className="text-xl font-extrabold text-gray-900 line-clamp-1 mb-1 group-hover:text-orange-600 transition-colors">
          {food.title}
        </h2>

        {/* Short Description */}
        <p className="text-gray-500 text-xs line-clamp-2 mb-4 leading-relaxed">
          {food.description ||
            "Freshly prepared with premium ingredients and authentic spices."}
        </p>

        {/* Price & Action */}
        <div className="flex items-center justify-between mt-4">
          <div className="flex flex-col">
            <span className="text-gray-400 text-[10px] font-medium uppercase tracking-tighter">
              Price
            </span>
            <p className="text-2xl font-black text-gray-900">
              <span className="text-orange-500 text-sm font-bold mr-0.5">
                ৳
              </span>
              {food.price}
            </p>
          </div>

          <div className="flex gap-2">
            <Link
              href={`/foods/${food.id}`}
              className="p-3 bg-gray-100 text-gray-600 rounded-2xl hover:bg-gray-200 transition-colors"
            >
              <Eye size={22} />
            </Link>

            <button className="flex items-center gap-2 bg-orange-500 hover:bg-black text-white px-5 py-3 rounded-2xl font-bold text-sm transition-all duration-300 shadow-md shadow-orange-100 active:scale-95">
              <ShoppingCart size={18} />
              Add
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
