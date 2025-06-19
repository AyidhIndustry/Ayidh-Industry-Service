"use client";
import React from "react";
import { motion } from "framer-motion";


interface ProductCardProps {
  image: string;
  title: string;
  description: string;
}

const ProductCard = ({ image, title, description }: ProductCardProps) => {
  return (
      <motion.div
      whileHover={{ y: -6 }} // move up 10px on hover
      transition={{ type: "spring", stiffness: 300 }}
      className="max-w-full bg-white shadow-md overflow-hidden"
    >
        <div className="h-full w-full flex flex-col items-center justify-center space-y-4 border-l-6 rounded-l-md border-[var(--secondary)] hover:border-[var(--complementary)] p-4 text-center hover:cursor-pointer transition-all duration-300 hover:shadow-lg shadow-md">
          <img src={image} className="w-36" />
          <h3 className="text-xl md:text-2xl font-bold mb-1 transition-all duration-700">
            {title}
          </h3>
          <p className="text-sm text-gray-600 transition-all duration-700">
            {description}
          </p>
        </div>
      </motion.div>
  );        
};

export default ProductCard;
