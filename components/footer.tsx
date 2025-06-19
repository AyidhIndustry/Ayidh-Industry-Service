"use client";

import {
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Phone,
  MapPin,
  Mail,
} from "lucide-react";
import MarginedComponent from "./margined-component";
import { contactDetails } from "@/data/contact";

export default function Footer() {
  return (
    <footer className="md:pt-10 lg:pt-20 xl:pt-28 text-sm">
      <div className="bg-[#e9ebf4] py-16 px-4 md:px-6 lg:px-8 border-t-[1px] border-gray-200">
        <MarginedComponent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {/* Company Info */}
            <div className="lg:col-span-1 space-y-6">
              <img src={"/logo/logo-dark.png"} className="h-18" />

              <p className="text-gray-600 text-sm leading-relaxed text-justify">
                Located in Jubail, KSA, we deliver expert industrial solutions
                including motor rewinding, generator and pump repair, and
                electrical testing. Known for fast turnaround and trusted
                service, we power industries with lasting reliability and
                performance.
              </p>

              <div>
                <h4 className="text-gray-900 font-semibold mb-3">
                  Connect With Us
                </h4>
                <div className="flex gap-3">
                  <a
                    href="#"
                    className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-gray-400 hover:text-blue-600 hover:bg-blue-50 transition-colors"
                  >
                    <Facebook className="w-4 h-4" />
                  </a>
                  <a
                    href="#"
                    className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-gray-400 hover:text-blue-400 hover:bg-blue-50 transition-colors"
                  >
                    <Twitter className="w-4 h-4" />
                  </a>
                  <a
                    href="#"
                    className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-gray-400 hover:text-blue-600 hover:bg-blue-50 transition-colors"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                  <a
                    href="#"
                    className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-gray-400 hover:text-pink-600 hover:bg-pink-50 transition-colors"
                  >
                    <Instagram className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 col-span-2 gap-6">
              <div className="space-y-4">
                <h4 className="text-gray-900 font-semibold text-lg">
                  <span className="text-orange-500">—</span> Our Specialization
                </h4>
                <ul className="space-y-3">
                  <li>
                    <a
                      href="#"
                      className="text-gray-600 hover:text-orange-500 transition-colors"
                    >
                      Pumps
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-600 hover:text-orange-500 transition-colors"
                    >
                      Generator
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-600 hover:text-orange-500 transition-colors"
                    >
                      Motor
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-600 hover:text-orange-500 transition-colors"
                    >
                      Welding Machines
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-600 hover:text-orange-500 transition-colors"
                    >
                      Compressors
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-600 hover:text-orange-500 transition-colors"
                    >
                      Miscellaneous
                    </a>
                  </li>
                </ul>
              </div>
              <div className="space-y-4">
                <h4 className="text-gray-900 font-semibold text-lg">
                  <span className="text-orange-500">—</span> Contact
                </h4>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-orange-500 flex-shrink-0" />
                    <a
                      href={`tel:${contactDetails.phoneNumber}`}
                      className="text-gray-900 font-semibold"
                    >
                      {contactDetails.phoneNumber}
                    </a>
                  </div>

                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
                    <div className="text-gray-600">
                      <p>{contactDetails.address}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-orange-500 flex-shrink-0" />
                    <div className="flex flex-col items-center gap-2">
                      <a
                        href={`mailto:${contactDetails.emailId}`}
                        className="text-gray-600"
                      >
                        {contactDetails.emailId}
                      </a>
                      <a
                        href={`mailto:${contactDetails.emailId2}`}
                        className="text-gray-600"
                      >
                        {contactDetails.emailId2}
                      </a>
                      <a
                        href={`mailto:${contactDetails.emailId3}`}
                        className="text-gray-600"
                      >
                        {contactDetails.emailId3}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <iframe
                src={contactDetails.googleLocation}
                loading="lazy"
                className="h-full w-fit shadow-md"
              />
            </div>
          </div>
        </MarginedComponent>
      </div>
      <div className="bg-[var(--complementary-dark)]">
        <MarginedComponent style="text-center py-3">
          <p className="text-white text-sm">
            {" "}
            © 2025{" "}
            <strong className="text-white">
              AYIDH MOHAMMED AYIDH AL-DOSSARY INDUSTRIAL WORKSHOP
            </strong>
            . All rights reserved.
          </p>
        </MarginedComponent>
      </div>
    </footer>
  );
}
