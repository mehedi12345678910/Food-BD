"use client";
import { useRouter, useSearchParams } from "next/navigation";
import React from "react";

const InputSearch = () => {
  const router = useRouter();
  const params = useSearchParams();

  const handleSubmit = (e) => {
    e.preventDefault();
    const value = e.target.search.value;
    if (!value) return;

    const newParams = new URLSearchParams(params.toString());
    newParams.set("search", value);
    router.push(`?${newParams.toString()}`);
  };

  return (
    <div className="flex justify-start items-center py-10">
      <div className="relative w-full max-w-xl group">
        {/* Decorative Background Glow */}
        <div className="absolute -inset-1 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
        
        <form 
          onSubmit={handleSubmit} 
          className="relative flex items-center bg-white rounded-xl overflow-hidden shadow-2xl border border-gray-100"
        >
          {/* Left Icon Section */}
          <div className="pl-5 text-gray-400">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
            </svg>
          </div>

          <input
            type="text"
            name="search"
            defaultValue={params.get("search") || ""}
            placeholder="Search delicious food..."
            className="w-full px-4 py-5 outline-none text-gray-700 font-medium placeholder:text-gray-400"
          />

          {/* Premium Animated Button */}
          <div className="pr-2">
            <button 
              type="submit"
              className="bg-gray-900 hover:bg-black text-white px-8 py-3 rounded-lg font-bold tracking-wide transition-all duration-300 transform active:scale-95 shadow-lg"
            >
              SEARCH
            </button>
          </div>
        </form>

        {/* Floating Suggestion Chips */}
        <div className="flex gap-3 mt-4 px-2">
          {['🍕 Pizza', '🍔 Burger', '🍣 Sushi'].map((item) => (
            <span 
              key={item}
              className="px-3 py-1 bg-white/80 backdrop-blur-md border border-gray-200 rounded-full text-xs font-semibold text-gray-600 cursor-pointer hover:bg-yellow-100 transition-colors shadow-sm"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InputSearch;