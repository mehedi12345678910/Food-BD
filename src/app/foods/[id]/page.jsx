import Image from "next/image";
import Link from "next/link";
import { PlayCircle, ShoppingCart, MapPin, Tag, ArrowLeft } from "lucide-react"; // npm i lucide-react

export function generateStaticParams(){
  return[{id:"52898"},{id:"52955"},{id:"52926"}]
}



// Data fetching function
const getSingleFood = async (id) => {
  try {
    const res = await fetch(
      `https://taxi-kitchen-api.vercel.app/api/v1/foods/${id}`,
      { next: { revalidate: 10} }
    );
    if (!res.ok) return null;
    const data = await res.json();
    return data.details;
  } catch (error) {
    console.error("Fetch error:", error);
    return null;
  }
};


// logo er name paltabe
export async function generateMetadata({ params }) {
  const { id } = await params;
  const food = await getSingleFood(id);
  return {
    title: food ? `${food.title} | Taxi Kitchen` : "Food Not Found",
  };
}

const Page = async ({ params }) => {
  const { id } = await params;
  const food = await getSingleFood(id);

  if (!food) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center space-y-4">
        <h2 className="text-6xl font-black text-gray-200">404</h2>
        <p className="text-xl text-gray-500 font-medium">এই খাবারটি খুঁজে পাওয়া যায়নি!</p>
        <Link href="/foods" className="px-6 py-2 bg-green-600 text-white rounded-full hover:bg-green-700 transition-all">
          Back to Menu
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-6xl mx-auto px-4 py-10">
        
        {/* Back Button */}
        <Link href="/" className="inline-flex items-center gap-2 text-gray-500 hover:text-green-600 transition-colors mb-8 group">
          <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
          <span className="font-medium">Back to Home</span>
        </Link>

        <div className="bg-white rounded-[2.5rem] p-6 md:p-10 shadow-sm border border-gray-100">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            
            {/* Left Side: Image Section */}
            <div className="relative group">
              <div className="relative h-[350px] md:h-[500px] w-full rounded-[2rem] overflow-hidden shadow-xl">
                <Image
                  src={food.foodImg}
                  alt={food.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  priority
                />
              </div>
              {/* Floating Badge */}
              <div className="absolute top-5 left-5 bg-white/90 backdrop-blur-md px-4 py-2 rounded-2xl shadow-lg border border-white/20">
                <p className="text-xs font-bold text-gray-500 uppercase tracking-widest">ID: #{food.id}</p>
              </div>
            </div>

            {/* Right Side: Details Section */}
            <div className="flex flex-col justify-center space-y-8">
              <div className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-green-50 text-green-700 font-semibold rounded-lg text-xs uppercase">
                    <Tag size={14} /> {food.category}
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-blue-50 text-blue-700 font-semibold rounded-lg text-xs uppercase">
                    <MapPin size={14} /> {food.area}
                  </span>
                </div>
                
                <h1 className="text-4xl md:text-5xl font-black text-gray-900 tracking-tight leading-[1.1]">
                  {food.title}
                </h1>
                
                <p className="text-gray-500 leading-relaxed text-lg">
                   Experience the authentic taste of {food.area} style {food.category} cuisine. Freshly prepared and delivered right to your kitchen door.
                </p>
              </div>

              <div className="flex items-end gap-3 border-y border-gray-100 py-6">
                <div className="space-y-1">
                  <p className="text-sm font-bold text-gray-400 uppercase tracking-wider">Total Price</p>
                  <div className="flex items-center gap-1">
                    <span className="text-3xl font-bold text-green-600">৳</span>
                    <span className="text-5xl font-black text-green-600">{food.price}</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <button className="flex items-center justify-center gap-3 px-8 py-5 bg-gray-900 text-white font-bold rounded-2xl hover:bg-green-600 hover:shadow-xl hover:shadow-green-200 transition-all active:scale-95">
                  <ShoppingCart size={22} />
                  Add to Cart
                </button>

                {food.video && (
                  <Link
                    href={food.video}
                    target="_blank"
                    className="flex items-center justify-center gap-3 px-8 py-5 border-2 border-red-500 text-red-500 font-bold rounded-2xl hover:bg-red-50 transition-all"
                  >
                    <PlayCircle size={22} />
                    Watch Recipe
                  </Link>
                )}
              </div>

              {/* Delivery Info Mini */}
              <div className="flex items-center gap-6 pt-4 text-sm text-gray-400 font-medium">
                 <div className="flex items-center gap-2">🚀 Express Delivery</div>
                 <div className="flex items-center gap-2">✨ Fresh Quality</div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;