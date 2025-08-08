"use client";

import { useAnimations } from "../hooks/useAnimations";

export default function AboutSection() {
  useAnimations("about");
  return (
    <section
      id="about"
      className="min-h-screen bg-gradient-to-b from-white to-gray-50 flex items-center justify-center py-16"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center space-y-8 sm:space-y-12">
          <div className="space-y-4 sm:space-y-6">
            <h2
              className="text-4xl sm:text-5xl lg:text-6xl font-light text-gray-900 tracking-tight"
              data-animate="title"
            >
              <span className="block bg-gradient-to-r from-[#8d6e63] to-[#5d4037] bg-clip-text text-transparent">
                About
              </span>
              <span className="block text-2xl sm:text-3xl lg:text-4xl text-gray-700 font-extralight mt-2">
                Aether Watch
              </span>
            </h2>
            <div className="w-20 h-px bg-gradient-to-r from-[#8d6e63] to-transparent mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="space-y-4 sm:space-y-6 text-left md:order-1 order-2">
              <p
                className="text-base sm:text-lg text-gray-600 leading-relaxed"
                data-animate="content"
              >
                Born from the fusion of cutting-edge technology and timeless
                craftsmanship, Aether Watch represents the pinnacle of modern
                timepiece engineering.
              </p>

              <p
                className="text-base sm:text-lg text-gray-600 leading-relaxed"
                data-animate="content"
              >
                Our revolutionary approach combines premium materials with
                advanced smart features, creating a watch that not only tracks
                time but elevates your entire lifestyle experience.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 sm:gap-6 md:order-2 order-1">
              <div
                className="text-center p-4 sm:p-6 bg-white rounded-2xl shadow-sm border border-gray-100"
                data-animate="item"
              >
                <div className="text-2xl sm:text-3xl font-light text-[#8d6e63] mb-2">
                  2024
                </div>
                <div className="text-xs sm:text-sm text-gray-600">Founded</div>
              </div>
              <div
                className="text-center p-4 sm:p-6 bg-white rounded-2xl shadow-sm border border-gray-100"
                data-animate="item"
              >
                <div className="text-2xl sm:text-3xl font-light text-[#8d6e63] mb-2">
                  50+
                </div>
                <div className="text-xs sm:text-sm text-gray-600">Features</div>
              </div>
              <div
                className="text-center p-4 sm:p-6 bg-white rounded-2xl shadow-sm border border-gray-100"
                data-animate="item"
              >
                <div className="text-2xl sm:text-3xl font-light text-[#8d6e63] mb-2">
                  7 Days
                </div>
                <div className="text-xs sm:text-sm text-gray-600">Battery</div>
              </div>
              <div
                className="text-center p-4 sm:p-6 bg-white rounded-2xl shadow-sm border border-gray-100"
                data-animate="item"
              >
                <div className="text-2xl sm:text-3xl font-light text-[#8d6e63] mb-2">
                  5ATM
                </div>
                <div className="text-xs sm:text-sm text-gray-600">
                  Water Resistant
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
