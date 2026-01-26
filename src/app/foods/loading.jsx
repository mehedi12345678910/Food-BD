import FoodCardSkeleton from "@/components/skeletons/FoodCardSkeleton";
import React from "react";

const loading = () => {
  return (
    <div>
      {/* {loading && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[...Array(6)].map((_, i) => (
            <FoodCardSkeleton key={i} />
          ))}
        </div>
      )} */}
      <FoodCardSkeleton></FoodCardSkeleton>
    </div>
  );
};

export default loading;
