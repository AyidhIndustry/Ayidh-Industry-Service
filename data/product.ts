export interface Product {
  image: string;
  title: string;
  description: string;
}

export const products: Product[] = [
  {
    image: "/icons/motor.webp",
    title: "MOTORS",
    description: "Reliable industrial motors designed for consistent torque, efficiency, and long operational life in diverse industrial environments.",
  },
  {
    image: "/icons/pump.webp",
    title: "PUMPS",
    description: "Durable pumps for fluid transfer and pressure systems, ideal for construction, wastewater management, and industrial operations.",
  },
  {
    image: "/icons/generator.webp",
    title: "GENERATORS",
    description: "Efficient power generators for backup and continuous supply, suitable for residential, commercial, and industrial uses.",
  },
  {
    image: "/icons/compressor.webp",
    title: "COMPRESSORS",
    description: "Heavy-duty air compressors for powering tools, machinery, and manufacturing processes with consistent air flow.",
  },
  {
    image: "/icons/welding-machine.webp",
    title: "WELDING MACHINES",
    description: "High-performance welding machines suitable for arc, MIG, and TIG welding applications across all fabrication needs.",
  },
  {
    image: "/icons/misc.webp",
    title: "MISCELLANEOUS",
    description: "A wide variety of supporting tools and accessories like generator tower light, VFD Control Panel etc",
  },
];
