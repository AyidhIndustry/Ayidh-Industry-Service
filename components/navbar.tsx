// components/Navbar.js
"use client";

import { AlignJustify, MapPin, PhoneIncoming } from "lucide-react";
import MarginedComponent from "./margined-component";
import { contactDetails } from "@/data/contact";
import { Drawer } from "rsuite";
import { useState } from "react";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/#about-us" },
  { name: "Products", href: "/#products" },
  { name: "Services", href: "/#services" },
  { name: "Contact Us", href: "/contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <MarginedComponent style="hidden md:block">
        <div className="py-6 h-28 justify-between items-center flex">
          <img
            src={"/logo/logo-dark.png"}
            className="h-14 cursor-pointer hover:scale-105 duration-500"
            onClick={() => (window.location.href = "/")}
          />
          <div className="flex items-center gap-8 justify-end">
            <div className="flex gap-2">
              <PhoneIncoming color="var(--complementary)" size={35} />
              <section>
                <span className="text-gray-700">Call us Today</span>
                <h2>
                  <a
                    href={`tel:${contactDetails.phoneNumber}`}
                    className="font-bold text-2xl"
                  >
                    {contactDetails.phoneNumber}
                  </a>
                </h2>
              </section>
            </div>
            <div className="h-10 w-[1px] bg-gray-300" />
            <div className="flex gap-2">
              <MapPin color="var(--complementary)" size={40} />
              <section>
                <span className="text-gray-700">Al-Orayfiq Area 5001</span>
                <h2 className="font-bold text-2xl">Jubail, KSA</h2>
              </section>
            </div>
          </div>
        </div>
      </MarginedComponent>
      <div className="h-18 bg-[var(--secondary)]" id="navbar-lower">
        <MarginedComponent style="h-full hidden md:block">
          <div className="flex items-center justify-center gap-12 h-full">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-white font-semibold hover:text-[var(--complementary)] transition-colors duration-300"
              >
                {link.name}
              </a>
            ))}
          </div>
        </MarginedComponent>
        <MarginedComponent style="md:hidden h-full">
          <div className="flex justify-between gap-6 h-full items-center">
            <img
              src={"/logo/logo-white.png"}
              className="h-8 cursor-pointer hover:scale-105 duration-500"
              onClick={() => (window.location.href = "/")}
            />
            <AlignJustify color="white" size={35} cursor={'pointer'} onClick={()=> setOpen(true)}/>

            <Drawer open={open} onClose={() => setOpen(false)} placement="left">
              <Drawer.Header>
                <Drawer.Title>
                  <img
                    src={"/logo/logo-dark.png"}
                    className="h-14 cursor-pointer hover:scale-105 duration-500"
                    onClick={() => (window.location.href = "/")}
                  />
                </Drawer.Title>
              </Drawer.Header>
              <Drawer.Body>
                <ul className="space-y-4">
                  {navLinks.map((item) => (
                    <li>
                      <a href={item.href}>{item.name}</a>
                    </li>
                  ))}
                </ul>
              </Drawer.Body>
            </Drawer>
          </div>
        </MarginedComponent>
      </div>
    </div>
  );
}
