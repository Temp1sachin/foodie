"use client";

import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import recipes from "./data";

const FoodCard = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredRecipes =
    selectedCategory === "All"
      ? recipes
      : recipes.filter((r) => r.category === selectedCategory);

  const categories = ["All", "Vegan", "Dessert", "Quick Meals", "Indian", "Italian"];

  return (
    <div className="px-4 md:px-10 py-8 max-w-7xl mx-auto animate-in fade-in duration-700">
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
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {filteredRecipes.map((recipe) => (
          <motion.div
            key={recipe.id}
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Card className="rounded-2xl shadow-md overflow-hidden border border-gray-200">
              <img
                src={recipe.image}
                alt={recipe.title}
                className="h-48 w-full object-cover"
              />
              <CardContent className="p-4 space-y-2">
                <h3 className="text-lg font-bold">{recipe.title}</h3>
                <div className="flex justify-between items-center text-sm text-gray-500">
                  <span>⏱ {recipe.prepTime}</span>
                  <span>👨‍🍳 {recipe.difficulty}</span>
                </div>
                <Badge variant="outline" className="text-xs mt-2">
                  {recipe.category}
                </Badge>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default FoodCard;