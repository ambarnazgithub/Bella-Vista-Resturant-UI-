import React from "react";
import { Star, Clock } from "lucide-react";

const DishCard = ({ dish, showCategory = false, showDescription = false }) => {
  return (
    <div className="bg-white rounded-[18px] shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="relative">
        {/* Dish Image */}
        <img
          src={dish.image}
          alt={dish.name}
          className="w-full h-48 object-cover"
        />

        {/* Category or Custom Badges */}
        <div className="absolute top-3 left-3 flex  flex-col  gap-2">
          {dish.badges && dish.badges.length > 0
            ? dish.badges.map((badge, idx) => (
                <span
                  key={idx}
                  className={`px-2 py-1 rounded-full text-xs font-medium 
                  ${badge === "Popular" ? "bg-[#6e2f5c] text-white" : ""}
                  ${badge === "Vegetarian" ? "bg-gray-50 text-black" : ""}
                  ${badge === "Gluten Free" ? "bg-gray-50 text-black" : ""}
                `}
                >
                  {badge}
                </span>
              ))
            : showCategory && (
                <span className="px-2 py-1 rounded-full text-xs font-medium text-white bg-[#6e2f5c]">
                  {dish.category}
                </span>
              )}
        </div>

        {/* Rating */}
        <div className="absolute flex top-3 right-3 bg-white rounded-full px-2 py-1">
          <Star className="w-4 h-4 text-yellow-500 fill-current" />
          <span className="ml-1 text-xs font-medium text-black">
            {dish.rating}
          </span>
        </div>
      </div>

      {/* Dish Info */}
      <div className="p-4 mt-5">
        <h3 className="text-lg font-[400] text-gray-800 mb-2">{dish.name}</h3>

        {/* Dish Description (optional for menu page) */}
        {showDescription && (
          <p className="text-sm text-gray-600 mb-2 line-clamp-2">
            {dish.description}
          </p>
        )}

        {/* Category Badge (under description) */}
        {showCategory && (
          <span className="inline-block mb-3 px-3  rounded-full border text-[11px] font-medium  text-gray-500">
            {dish.category}
          </span>
        )}

        <div className="flex justify-between items-center text-sm text-gray-600 mb-3">
          {/* Price */}
          <span className="text-2xl font-md text-[#334f3b]">${dish.price}</span>

          {/* Timing */}
          <div className="flex items-center">
            <Clock className="w-4 h-4 mr-1" />
            <span>{dish.cookTime}</span>
          </div>
        </div>

        {/* Add to Cart */}
        <div className="flex justify-center">
          <button
            type="button"
            className="flex items-center justify-center gap-2 text-white bg-gradient-to-br from-[#334f3b] to-[#21c24f]  font-medium rounded-lg text-sm md:px-30 lg:px-25 xl:px-32 px-29 py-3 text-center"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default DishCard;
