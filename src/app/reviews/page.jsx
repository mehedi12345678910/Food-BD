import React from "react";
import ReviewsPage from "./ReviewsPage";
// logo er name paltabe jokhon onno route a jabo || ata page a sob code chilo  metadata add korar jonno alada korar lagche age code
export const metadata = {
  title: "All Reviews",
  description: "Best FastFood in Bangladesh",
};
const AllReviews = () => {
  return (
    <div>
      <ReviewsPage></ReviewsPage>
    </div>
  );
};

export default AllReviews;
