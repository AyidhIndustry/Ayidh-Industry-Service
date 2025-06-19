"use client"
import React from 'react'
import { Autoplay } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

const CompanyCarousel = () => {
  return (
     <div className="">
        <h1 className='heading text-center my-6 md:my-12'>Our Clients</h1>
      <Swiper
        modules={[Autoplay]}
        spaceBetween={30}
        slidesPerView={5}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        loop={true}
        breakpoints={{
          320: { slidesPerView: 2 },
          640: { slidesPerView: 3 },
          1024: { slidesPerView: 5 },
        }}
      >
        {Array.from({ length: 13 }, (_, i) => (
          <SwiperSlide key={i}>
            <img
              src={`/company-icon/file${i + 1}.png`}
              alt={`Logo ${i + 1}`}
              className="mx-auto h-28 object-contain"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default CompanyCarousel