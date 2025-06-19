"use client";
import Footer from "@/components/footer";
import MarginedComponent from "@/components/margined-component";
import Navbar from "@/components/navbar";
import { contactDetails } from "@/data/contact";
import { MapPin, Phone } from "lucide-react";
import React, { useState } from "react";

const ContactUsPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    phone: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const { name, email, subject, phone, message } = formData;

    const mailtoLink = `mailto:${
      contactDetails.emailId
    }?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\n\nMessage:\n${message}`
    )}`;

    window.location.href = mailtoLink;
  };

  return (
    <div>
      <Navbar />
      <img
        src={"/contact.png"}
        className="md:h-[45vh] h-[30vh] w-full object-cover relative"
      />
      <div className="absolute md:top-2/5 top-1/5 left-1/2 -translate-x-1/2 -translate-y-1/2 space-y-3 flex flex-col justify-center items-center group">
        <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white cursor-default">
          Contact Us
        </h2>
        <div className="w-20 bg-[var(--complementary)] h-1 group-hover:w-48 transition-all duration-500" />
      </div>
      <MarginedComponent>
        <div className="my-6 md:my-12 lg:my-20 grid grid-cols-1 md:grid-cols-2 justify-center align-middle gap-6 md:gap-16">
          <div className="space-y-4">
            <img src={"/logo/logo-dark.png"} className="lg:h-36 md:h-28 h-20" />
            <p className="text-justify text-gray-600">
              We&apos;re here to help and answer any questions you might have.
              Whether you're curious about our services, need assistance, or
              just want to say hello — we&apos;d love to hear from you!
            </p>
            <div className="flex justify-start gap-6 items-center">
              <div className="flex items-center gap-3">
                <Phone className="w-10 h-10 text-orange-500 flex-shrink-0" />
                <a href={`tel:${contactDetails.phoneNumber}`}>
                  {contactDetails.phoneNumber}
                </a>
              </div>

              <div className="flex items-center gap-3">
                <MapPin className="w-10 h-10 text-orange-500 flex-shrink-0 mt-0.5" />
                <div className="text-gray-600">
                  <p>{contactDetails.address}</p>
                </div>
              </div>
            </div>
          </div>
          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 md:grid-cols-2 gap-4"
          >
            <input
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="input-primary text-sm"
              placeholder="Enter Your Name"
            />
            <input
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="input-primary text-sm"
              placeholder="Enter Your Email"
            />
            <input
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              className="input-primary text-sm"
              placeholder="Enter Subject"
            />
            <input
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="input-primary text-sm"
              placeholder="Enter Phone"
            />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="input-primary text-sm col-span-2"
              rows={6}
              placeholder="Enter Message..."
            />
            <div className="flex justify-end col-span-2">
              <button type="submit" className="btn-primary">
                Submit
              </button>
            </div>
          </form>
        </div>
        <div className="h-[40vh] mx-auto overflow-hidden">
          <iframe
            src={contactDetails.googleLocation}
            loading="lazy"
            className="h-full w-full shadow-md"
          />
        </div>
      </MarginedComponent>
      <Footer />
    </div>
  );
};

export default ContactUsPage;
