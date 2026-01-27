"use client";
import ReviewCard from "@/components/cards/ReviewCard";
import React, { useEffect, useState } from "react";
import ReviewLoading from "./ReviewLoading";

const ReviewsPage = () => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("https://taxi-kitchen-api.vercel.app/api/v1/reviews")
      .then((res) => res.json())
      .then((data) => {
        setReviews(data.reviews || []);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <ReviewLoading></ReviewLoading>;
  }

  return (
    <div>
      <h2 className="text-4xl font-bold">
        Total <span className="text-yellow-500">{reviews.length}</span> Reviews
      </h2>
      <div className="grid my-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {reviews.map((rev) => (
          <ReviewCard key={rev.id} review={rev}></ReviewCard>
        ))}
      </div>
    </div>
  );
};

export default ReviewsPage;
