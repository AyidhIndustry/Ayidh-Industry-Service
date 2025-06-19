"use client";
import AboutUs from "@/components/about-us";
import CompanyCarousel from "@/components/company-carousel";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import MarginedComponent from "@/components/margined-component";
import Navbar from "@/components/navbar";
import Products from "@/components/products";
import Services from "@/components/services";
import { ChevronUp } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="relative">
      <Navbar />
      <Hero />
      <MarginedComponent style="space-y-6 md:space-y-10 lg:space-y-20 xl:space-y-28 pt-6 md:pt-10 lg:pt-20 xl:pt-28">
        <AboutUs />
        <Products/>
      </MarginedComponent>
      <Services />
      <MarginedComponent>
        <CompanyCarousel />
      </MarginedComponent>
      <Footer />
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="cursor-pointer fixed bottom-6 right-6 w-12 h-12 bg-orange-500 text-white rounded-lg flex items-center justify-center hover:bg-orange-600 transition-colors shadow-lg"
        aria-label="Back to top"
      >
        <ChevronUp className="w-6 h-6" />
      </button>
    </div>
  );
}
