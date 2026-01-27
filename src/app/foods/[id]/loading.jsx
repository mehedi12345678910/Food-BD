const Loading = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-10 animate-pulse">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        
        {/* Image Skeleton */}
        <div className="h-[350px] bg-gray-300 rounded-2xl"></div>

        {/* Content Skeleton */}
        <div className="space-y-4">
          <div className="h-8 bg-gray-300 rounded w-3/4"></div>

          <div className="flex gap-3">
            <div className="h-6 w-20 bg-gray-200 rounded-full"></div>
            <div className="h-6 w-24 bg-gray-200 rounded-full"></div>
          </div>

          <div className="h-7 bg-gray-300 rounded w-1/3"></div>

          <div className="flex gap-4 pt-4">
            <div className="h-12 w-32 bg-gray-300 rounded-xl"></div>
            <div className="h-12 w-32 bg-gray-200 rounded-xl"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loading;
// 4