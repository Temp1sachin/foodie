"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useTheme } from "next-themes";

export default function HomeComponent() {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${
        theme === "dark"
          ? "bg-gradient-to-br from-gray-900 via-orange-900/30 to-gray-900"
          : "bg-gradient-to-br from-orange-50 via-amber-50 to-orange-50"
      }`}
    >
      {/* Dark Mode Toggle */}
      <div className="absolute top-4 right-4">
        <Button
          variant="outline"
          className="rounded-full px-4 py-2"
          onClick={toggleTheme}
        >
          {theme === "dark" ? "☀️ Light Mode" : "🌙 Dark Mode"}
        </Button>
      </div>

      {/* Hero Section */}
      <section className="container mx-auto text-center py-20 px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            className="text-5xl font-bold mb-4 bg-gradient-to-r from-orange-500 to-amber-600 bg-clip-text text-transparent"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
          >
            FoodieHub
          </motion.h1>

          <motion.p
            className={`text-lg mb-6 max-w-2xl mx-auto ${
              theme === "dark" ? "text-orange-100" : "text-orange-800/90"
            }`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Discover and share amazing recipes from around the world. Cook with
            confidence using our community-powered platform.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <Button
              asChild
              className={`rounded-full px-8 py-6 text-lg shadow-lg transition-all ${
                theme === "dark"
                  ? "bg-orange-600 hover:bg-orange-700 text-white"
                  : "bg-orange-500 hover:bg-orange-600 text-white"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link href="/home">Get Started - It's Free</Link>
            </Button>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
}
