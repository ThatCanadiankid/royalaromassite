import React from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white text-black flex flex-col justify-between">
      <Navigation />

      <section className="max-w-4xl mx-auto px-4 pt-10">
        <h1 className="text-4xl font-bold text-center mb-6">About Royal Aromas</h1>
        <div className="flex flex-col md:flex-row items-center md:items-start md:space-x-6">
          <img
            src="https://i.ibb.co/wV72Sjx/RALogo.png"
            alt="RA Logo Large"
            className="w-60 h-60 object-contain mb-6 md:mb-0"
          />
          <div className="text-lg text-gray-700 leading-7">
            <p className="mb-6">
              Royal Aromas was founded with a singular vision — to craft candles that embody luxury, calm, and timeless beauty. Every product we make is hand-poured with care and designed to bring warmth and sophistication into your space.
            </p>
            <p className="mb-6">
              Our scents are carefully curated from the finest ingredients, blending tradition with creativity to create experiences that go beyond aroma. Whether you're seeking peace, focus, or inspiration, our candles are here to elevate the ambiance around you.
            </p>
            <p>
              Thank you for choosing Royal Aromas — where elegance meets tranquility.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
