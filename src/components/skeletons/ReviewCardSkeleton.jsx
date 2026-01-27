import React from 'react'

const ReviewCardSkeleton = () => {
  return (
    <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm animate-pulse max-w-2xl">
      <div className="flex justify-between items-start mb-4">
        <div className="flex items-center gap-4">
          <div className="h-12 w-12 bg-gray-200 rounded-full"></div>
          <div className="space-y-2">
            <div className="h-4 w-32 bg-gray-200 rounded"></div>
            <div className="h-3 w-20 bg-gray-100 rounded"></div>
          </div>
        </div>
        <div className="h-3 w-16 bg-gray-100 rounded"></div>
      </div>

      <div className="space-y-3 mb-6">
        <div className="h-4 w-full bg-gray-100 rounded"></div>
        <div className="h-4 w-full bg-gray-100 rounded"></div>
        <div className="h-4 w-3/4 bg-gray-100 rounded"></div>
      </div>

      <div className="flex items-center justify-between border-t pt-4">
        <div className="h-8 w-20 bg-gray-100 rounded-xl"></div>
        <div className="h-3 w-24 bg-gray-50 rounded"></div>
      </div>
    </div>
  )
}

export default ReviewCardSkeleton