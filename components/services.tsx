import React from "react";
import MarginedComponent from "./margined-component";
import { services } from "@/data/services";
import Card from "./card";

const Services = () => {
  return (
    <div className='bg-[url("/background.png")]  w-full bg-cover bg-no-repeat mt-6 md:mt-10 lg:mt-20 xl:mt-28' id="services">
      <MarginedComponent style="py-6 md:py-12 lg:py-20">
        <div className="space-y-3 text-center my-6 md:my-10">
          <p className="text-orange-500 font-medium text-sm uppercase tracking-wide">
            — Our Services
          </p>
          <h1 className="heading  text-white">Market Solutions We Provide</h1>
          <p className="text-white">
            We offer expert solutions in motor rewinding, pump and generator
            repair, welding machines, and more — all under one roof.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {services.map((service, i) => (
            <Card
              key={i}
              image={service.image}
              title={service.title}
              description={service.description}
              textColor="white"
            />
          ))}
        </div>
       
      </MarginedComponent>
    </div>
  );
};

export default Services;
