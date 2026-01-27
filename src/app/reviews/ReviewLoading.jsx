// import ReviewCardSkeleton from "@/components/skeletons/ReviewCardSkeleton";
// import React from "react";

// const ReviewLoading = () => {
//   return (
//     <div className="grid my-5 grid-cols-3 gap-5">
//       {[
//         ...Array(12).map((_, index) => (
//           <ReviewCardSkeleton key={index}></ReviewCardSkeleton>
//         )),
//       ]}
//       <ReviewCardSkeleton></ReviewCardSkeleton>
//     </div>
//   );
// };

// export default ReviewLoading;


import ReviewCardSkeleton from "@/components/skeletons/ReviewCardSkeleton";
import React from "react";

const ReviewLoading = () => {
  return (
    <div className="grid my-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
      {Array.from({ length: 12 }).map((_, index) => (
        <ReviewCardSkeleton key={index} />
      ))}
    </div>
  );
};

export default ReviewLoading;
