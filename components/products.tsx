"use client";
import React from "react";
import ProductCard from "./product-card";
import { Download } from "lucide-react";
import { products } from "@/data/product";

const Products = () => {
  return (
    <div id="products">
      <div className="space-y-4 flex justify-center items-center flex-col text-center my-6 md:my-10">
        <p className="text-orange-500 font-medium text-sm uppercase tracking-wide">
          — Products
        </p>
        <h1 className="heading ">What We Have</h1>
        <p className="w-full md:w-2/3 text-gray-600">
          We offer a wide range of high-quality industrial equipment including
          motors, pumps, generators, welding machines, and control systems —
          built to perform, built to last.
        </p>
        <div className="w-full mt-6 md:mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-12 lg:gap-16">
          {products.map((prod, i) => (
            <ProductCard
              key={i}
              image={prod.image}
              title={prod.title}
              description={prod.description}
            />
          ))}
        </div>
        <div className="flex justify-center">
          <a
            href="/brochure.pdf"
            download
            className="btn-primary mt-6 md:mt-10 inline-flex items-center gap-2"
          >
            <Download className="w-5 h-5" />
            Brochure
          </a>
        </div>
      </div>
    </div>
  );
};

export default Products;
