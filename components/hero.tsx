"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation, EffectFade } from "swiper/modules";
import "swiper/css";
// import "swiper/css/pagination";
import "swiper/css/navigation";

const slides = [
  { id: 1, image: "/hero-carousel/image3.png" },
  { id: 2, image: "/hero-carousel/image2.png" },
  { id: 3, image: "/hero-carousel/image1.png" },
  { id: 4, image: "/hero-carousel/image4.png" },
];

export default function Hero() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="relative w-full h-[calc(100vh-11.5rem)]">
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        loop
        autoplay={{ delay: 3000 }}
        pagination={{ clickable: true }}
        navigation
        effect={"fade"}
        modules={[Autoplay, Navigation, EffectFade]}
        className="w-full h-full"
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={slide.id}>
            <div className="relative w-full h-full">
              <img
                src={slide.image}
                alt="slide image"
                className="w-full h-full object-cover"
              />

              {/* Overlay and motion content */}
              <div className="absolute inset-0 bg-black/50 flex items-center justify-center text-white">
                <AnimatePresence mode="wait">
                  {activeIndex === index && (
                    <motion.div
                      key={slide.id}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 1 }}
                      className="text-center px-4"
                    >
                      <motion.p
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="uppercase font-semibold"
                      >
                        Welcome to <strong className="text-[var(--complementary)]">AYIDH MOHAMMED AYIDH AL-DOSSARY INDUSTRIAL
                        WORKSHOP</strong>
                      </motion.p>

                      <motion.h1
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className="text-3xl md:text-5xl lg:text-7xl font-bold mb-4 leading-snug"
                      >
                        Delivering Quality Products
                        <br />
                        For All
                      </motion.h1>

                      <motion.button
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 1 }}
                        className="btn-primary"
                        onClick={()=> window.location.href = '/#about-us'}
                      >
                        Explore
                      </motion.button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
