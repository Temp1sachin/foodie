"use client";

import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import recipes from "./data";

const FoodCard = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredRecipes =
    selectedCategory === "All"
      ? recipes
      : recipes.filter((r) => r.category === selectedCategory);

  const categories = ["All", "Vegan", "Dessert", "Quick Meals", "Indian", "Italian"];

  return (
    <div className="px-4 md:px-10 py-8 max-w-7xl mx-auto">
      {/* Search Bar */}
      <div className="mb-6">
        <Input
          type="text"
          placeholder="Search for recipes..."
          className="w-full md:w-1/2 mx-auto"
        />
      </div>

      {/* Category Filter */}
      <div className="flex flex-wrap justify-center gap-3 mb-8">
        {categories.map((cat) => (
          <Button
            key={cat}
            variant={selectedCategory === cat ? "default" : "outline"}
            onClick={() => setSelectedCategory(cat)}
          >
            {cat}
          </Button>
        ))}
      </div>

      {/* Recipe Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredRecipes.map((recipe) => (
          <Card key={recipe.id} className="hover:scale-[1.02] transition-all duration-300">
            <img
              src={recipe.image}
              alt={recipe.title}
              className="h-40 w-full object-cover rounded-t-lg"
            />
            <CardContent className="p-4 space-y-2">
              <h3 className="text-lg font-semibold">{recipe.title}</h3>
              <p className="text-sm text-gray-500">Prep Time: {recipe.prepTime}</p>
              <span className="inline-block px-3 py-1 text-xs font-medium bg-orange-100 text-orange-700 rounded-full">
                {recipe.category}
              </span>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default FoodCard;
