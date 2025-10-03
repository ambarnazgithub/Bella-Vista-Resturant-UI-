"use client";

import React, { useState } from "react";
import { Search, Filter } from "lucide-react";
import DishCard from "../components/DishCard";
import PageHeader from "../components/PageHeader";

const Page = () => {
  // Categories
  const categories = [
    "All",
    "Appetizers",
    "Main Courses",
    "Seafood",
    "Pasta",
    "Steaks",
    "Desserts",
    "Beverages",
  ];

  const [activeCategory, setActiveCategory] = useState("All");
  const [search, setSearch] = useState("");

  // Dummy Dish Data
  // Dummy Dish Data
  const dishes = [
    {
      id: 1,
      name: "Grilled Atlantic Salmon",
      price: 28,
      label: "Popular",
      image:
        "https://images.unsplash.com/photo-1684568519320-8c6b14f7e65f?auto=format&fit=crop&w=1080&q=80",
      category: "Seafood",
      cookTime: "25 min",
      rating: 4.8,
      badges: ["Popular", "Gluten Free"],
      description:
        "Fresh Atlantic salmon with lemon herb butter, served with roasted vegetables",
    },
    {
      id: 2,
      name: "Truffle Pasta Primavera",
      price: 24,
      image:
        "https://images.unsplash.com/photo-1682377651820-0234f2abec85?auto=format&fit=crop&w=1080&q=80",
      category: "Pasta",
      cookTime: "20 min",
      rating: 4.9,
      badges: ["Vegetarian"],
      description:
        "Handmade pasta with seasonal vegetables and black truffle oil",
    },
    {
      id: 3,
      name: "Wagyu Beef Tenderloin",
      price: 45,
      label: "Popular",
      image:
        "https://images.unsplash.com/photo-1705755402973-009b7877a0f9?auto=format&fit=crop&w=1080&q=80",
      category: "Steaks",
      cookTime: "30 min",
      rating: 5,
      badges: ["Popular"],
      description:
        "Premium Wagyu beef with red wine reduction and garlic mashed potatoes",
    },
    {
      id: 4,
      name: "Mediterranean Mezze Platter",
      price: 18,
      image:
        "https://images.unsplash.com/photo-1684568519320-8c6b14f7e65f?auto=format&fit=crop&w=1080&q=80",
      category: "Appetizers",
      cookTime: "10 min",
      rating: 4.6,
      badges: ["Vegetarian", "Gluten Free"],
      description: "Hummus, olives, feta, dolmades, and fresh pita bread",
    },
    {
      id: 5,
      name: "Chocolate Lava Cake",
      price: 12,
      label: "Popular",
      image:
        "https://images.unsplash.com/photo-1682377651820-0234f2abec85?auto=format&fit=crop&w=1080&q=80",
      category: "Desserts",
      cookTime: "15 min",
      rating: 4.9,
      badges: ["Popular"],
      description:
        "Warm chocolate cake with a gooey center, served with vanilla ice cream",
    },
    {
      id: 6,
      name: "Pan-Seared Duck Breast",
      price: 32,
      image:
        "https://images.unsplash.com/photo-1705755402973-009b7877a0f9?auto=format&fit=crop&w=1080&q=80",
      category: "Main Courses",
      cookTime: "25 min",
      rating: 4.7,
      badges: [],
      description:
        "Crispy duck breast with cherry reduction and wild rice pilaf",
    },
  ];

  // Map category to specific dish
  const categoryDishMap = {
    Appetizers: "Mediterranean Mezze Platter",
    "Main Courses": "Pan-Seared Duck Breast",
    Seafood: "Grilled Atlantic Salmon",
    Pasta: "Truffle Pasta Primavera",
    Steaks: "Wagyu Beef Tenderloin",
    Desserts: "Chocolate Lava Cake",
  };

  // Filtering logic
  let filteredDishes;
  if (activeCategory === "All") {
    filteredDishes = dishes.filter((dish) =>
      dish.name.toLowerCase().includes(search.toLowerCase())
    );
  } else if (activeCategory === "Beverages") {
    filteredDishes = []; 
  } else {
    filteredDishes = dishes.filter(
      (dish) =>
        dish.category === activeCategory &&
        dish.name === categoryDishMap[activeCategory] &&
        dish.name.toLowerCase().includes(search.toLowerCase())
    );
  }

  return (
    <>
      <PageHeader title="Menu" />
      <div className="min-h-screen px-4 sm:px-6 lg:px-7 xl:px-20 py-6">
        <div className="max-w-7xl mx-auto">
          {/* Search & Filter */}
          <div className="flex sm:flex-row  flex-col items-center mb-6 gap-4">
            {/* Search Bar */}
            <div className="relative w-full sm:w-4/5">
              <input
                type="text"
                placeholder="Search dishes..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full text-sm pl-10 pr-4 py-2 border border-gray-300 bg-gray-50 rounded-lg focus:ring-2 focus:ring-green-500 outline-none"
              />
              <Search className="absolute left-3 top-2.5 text-gray-400 w-5 h-5" />
            </div>

            {/* Filter Button */}
            <button className="w-full sm:w-1/5 flex items-center justify-center gap-2 px-4 py-2 border rounded-lg hover:bg-[#6e2f5c] hover:text-white">
              <Filter className="w-5 h-5" />
              Filter
            </button>
          </div>

          {/* Categories */}
          <div className="grid grid-cols-4 grid-rows-2 gap-0 md:grid-cols-8 md:grid-rows-1 md:gap-0 lg:gap-1 rounded-[15px] bg-gray-100 py-1 px-1 mb-8">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2 rounded-[15px] sm:text-[14px]  whitespace-nowrap text-[12px] font-medium transition ${
                  activeCategory === cat ? "bg-green-600 text-white" : ""
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Dishes Grid or Empty Message */}
          {filteredDishes.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredDishes.map((dish) => (
                <DishCard
                  key={dish.id}
                  dish={dish}
                  showCategory={true}
                  showDescription={true}
                />
              ))}
            </div>
          ) : (
            <p className="text-center text-gray-500 text-lg mt-10">
              {activeCategory === "Beverages"
                ? "No Beverages available."
                : "No dishes found matching your search."}
            </p>
          )}
        </div>
      </div>
    </>
  );
};

export default Page;
