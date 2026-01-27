"use client";
import Image from "next/image";
import { Star, ThumbsUp, Calendar } from "lucide-react";

const ReviewCard = ({ review }) => {
  if (!review) return null; // 🛡️ safety guard

  const {
    user,
    photo,
    rating = 0,
    review: text,
    likes = [],
    date,
  } = review;

  const formattedDate = date
    ? new Date(date).toLocaleDateString("bn-BD", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    : "";

  return (
    <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow max-w-2xl">
      <div className="flex justify-between items-start mb-4">
        <div className="flex items-center gap-4">
          <div className="relative h-12 w-12 rounded-full overflow-hidden border-2 border-green-100">
            <Image
              src={photo || "/avatar.png"}
              alt={user || "User"}
              fill
              className="object-cover"
            />
          </div>

          <div>
            <h4 className="font-bold text-gray-900">{user}</h4>
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={14}
                  fill={i < rating ? "currentColor" : "none"}
                  className={i < rating ? "text-orange-400" : "text-gray-200"}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="flex items-center gap-1 text-gray-400 text-xs">
          <Calendar size={14} />
          <span>{formattedDate}</span>
        </div>
      </div>

      <p className="text-gray-600 leading-relaxed mb-6">{text}</p>

      <div className="flex items-center justify-between border-t pt-4">
        <button className="flex items-center gap-2 px-4 py-2 rounded-xl hover:bg-gray-50 text-gray-500 hover:text-blue-600 transition-colors">
          <ThumbsUp size={18} />
          <span className="font-semibold text-sm">
            {likes.length} Likes
          </span>
        </button>

        <span className="text-xs font-medium text-gray-400 italic">
          Verified Purchase
        </span>
      </div>
    </div>
  );
};

export default ReviewCard;
