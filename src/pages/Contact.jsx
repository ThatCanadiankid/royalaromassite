import React from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white text-black flex flex-col justify-between">
      <Navigation />

      <section className="max-w-2xl mx-auto px-4 pt-10">
        <h1 className="text-4xl font-bold text-center mb-6">Contact Us</h1>
        <p className="text-center text-gray-700 mb-8">
          We'd love to hear from you! Fill out the form below or reach out to us
          through our social channels.
        </p>
        <form className="space-y-6">
          <div>
            <label className="block text-gray-800 font-medium mb-2">Name</label>
            <input
              type="text"
              className="w-full border border-gray-300 p-3 rounded-md"
              placeholder="Your Name"
            />
          </div>
          <div>
            <label className="block text-gray-800 font-medium mb-2">Email</label>
            <input
              type="email"
              className="w-full border border-gray-300 p-3 rounded-md"
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label className="block text-gray-800 font-medium mb-2">Message</label>
            <textarea
              className="w-full border border-gray-300 p-3 rounded-md"
              rows="5"
              placeholder="Your Message"
            />
          </div>
          <button
            type="submit"
            className="bg-black text-white px-6 py-3 rounded-md hover:bg-gray-800"
          >
            Send Message
          </button>
        </form>
        <p className="text-center text-sm text-gray-500 mt-6">
          This contact form doesn't actually work — it's just for show :p
        </p>
      </section>

      <Footer />
    </main>
  );
}
