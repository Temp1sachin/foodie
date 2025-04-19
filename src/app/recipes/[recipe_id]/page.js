"use client"
import React from "react";
import { notFound } from "next/navigation";
import recipesData from "@/recipe_data.json";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { Clock, Star } from "lucide-react";
import { motion } from "framer-motion";

// Convert the component to an async function to handle params properly
export default function RecipePage({ params }) {
  // Using await to resolve params properly as per Next.js error message
  const id = parseInt(params.recipe_id, 10);
  const recipe = recipesData.recipes.find((r) => r.id === id);

  if (!recipe) {
    notFound();
  }

  return (
    <motion.div
      className="max-w-4xl mx-auto p-6 space-y-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <Card className="shadow-lg rounded-2xl overflow-hidden">
          <div className="relative">
            <img
              src={recipe.large_image}
              alt={recipe.title}
              className="w-full h-64 object-cover"
            />
            <div className="absolute bottom-4 left-4 bg-black bg-opacity-50 p-4 rounded-xl">
              <h1 className="text-3xl font-bold text-white">{recipe.title}</h1>
              <div className="flex items-center space-x-4 mt-2">
                <div className="flex items-center text-sm text-white">
                  <Clock className="w-4 h-4 mr-1" /> {recipe.prep_time}
                </div>
                <div className="flex items-center text-sm text-white">
                  <Star className="w-4 h-4 mr-1" /> {recipe.rating} / 5
                </div>
                <Badge variant="outline" className="text-white">
                  {recipe.difficulty}
                </Badge>
              </div>
            </div>
          </div>
        </Card>
      </motion.div>

      {/* Tags */}
      <motion.div 
        className="flex flex-wrap gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3, delay: 0.4 }}
      >
        {recipe.tags.map((tag, index) => (
          <motion.div
            key={tag}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
          >
            <Badge className="capitalize">
              {tag}
            </Badge>
          </motion.div>
        ))}
      </motion.div>

      <Separator />

      {/* Ingredients & Instructions */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <Tabs defaultValue="ingredients">
          <TabsList>
            <TabsTrigger value="ingredients">Ingredients</TabsTrigger>
            <TabsTrigger value="instructions">Instructions</TabsTrigger>
          </TabsList>

          <TabsContent value="ingredients">
            <Card className="shadow-md rounded-2xl">
              <CardHeader>
                <CardTitle>Ingredients</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-2">
                  {recipe.ingredients.map((item, idx) => (
                    <motion.li 
                      key={idx}
                      initial={{ opacity: 0, x: -5 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.2, delay: 0.7 + idx * 0.05 }}
                    >
                      {item}
                    </motion.li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="instructions">
            <Card className="shadow-md rounded-2xl">
              <CardHeader>
                <CardTitle>Preparation Instructions</CardTitle>
                <CardDescription>
                  Follow each step carefully for best results.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ol className="list-decimal list-inside space-y-4">
                  {recipe.instructions.map((step, idx) => (
                    <motion.li 
                      key={idx} 
                      className="text-sm"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: 0.7 + idx * 0.1 }}
                    >
                      {step}
                    </motion.li>
                  ))}
                </ol>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </motion.div>
    </motion.div>
  );
}