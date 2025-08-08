"use client";
import dynamic from "next/dynamic";
import { useAnimations } from "../hooks/useAnimations";

// Dynamically import the 3D model to avoid SSR issues
const AetherModel = dynamic(() => import("./AetherModel"), {
  ssr: false,
  loading: () => null, // No loading animation - model will appear instantly when ready
});

export default function HeroSection() {
  useAnimations("home");
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-[#121212] rounded-b-3xl overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-8 lg:gap-16 items-center relative z-10 py-16 lg:py-12">
        {/* Text Content */}
        <div className="text-white space-y-6 lg:space-y-8 max-w-2xl order-2 lg:order-1">
          <div className="space-y-4">
            <h1
              className="font-light tracking-tight leading-[0.9]"
              data-animate="title"
            >
              <span className="block text-5xl sm:text-6xl lg:text-8xl xl:text-9xl bg-gradient-to-r from-[#d7ccc8] via-white to-[#bcaaa4] bg-clip-text text-transparent font-extralight">
                AE.1
              </span>
              <span className="block text-3xl sm:text-4xl lg:text-6xl xl:text-7xl text-white font-thin tracking-wide mt-2">
                Smart Watch
              </span>
            </h1>

            <div className="w-20 h-px bg-gradient-to-r from-[#8d6e63] to-transparent mt-8"></div>
          </div>

          <p
            className="text-base sm:text-lg lg:text-xl xl:text-2xl text-[#bcaaa4] leading-relaxed font-light max-w-lg"
            data-animate="content"
          >
            Experience the future of timekeeping with our revolutionary
            smartwatch that transcends ordinary boundaries and redefines luxury.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 pt-6 lg:pt-8">
            <button
              data-animate="button"
              className="cursor-pointer group px-8 sm:px-10 py-4 sm:py-5 bg-gradient-to-r from-[#5d4037] via-[#4e342e] to-[#3e2723] hover:from-[#6d4c41] hover:via-[#5d4037] hover:to-[#4e342e] rounded-full text-sm sm:text-base font-medium text-white transition-all duration-500 transform hover:scale-[1.02] hover:shadow-2xl hover:shadow-[#8d6e63]/20 border border-[#8d6e63]/20"
            >
              <span className="flex items-center gap-3">
                Explore Features
                <svg
                  className="w-4 h-4 transition-transform group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </span>
            </button>

            <button
              data-animate="button"
              className="group px-8 sm:px-10 py-4 sm:py-5 border border-[#8d6e63]/40 hover:border-[#bcaaa4] rounded-full text-sm sm:text-base font-medium text-[#d7ccc8] transition-all duration-500 hover:bg-gradient-to-r hover:from-[#8d6e63]/5 hover:to-[#bcaaa4]/5 backdrop-blur-sm"
            >
              <span className="flex items-center gap-3">
                <svg
                  className="w-4 h-4 transition-transform group-hover:scale-110"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                Watch Demo
              </span>
            </button>
          </div>

          {/* Subtle stats/features */}
          <div className="flex flex-wrap gap-6 sm:gap-8 pt-8 lg:pt-12 text-xs sm:text-sm text-[#8d6e63] font-light">
            <div className="flex flex-col gap-1" data-animate="item">
              <span className="text-white font-medium">7 Days</span>
              <span>Battery Life</span>
            </div>
            <div className="flex flex-col gap-1" data-animate="item">
              <span className="text-white font-medium">5ATM</span>
              <span>Water Resistant</span>
            </div>
            <div className="flex flex-col gap-1" data-animate="item">
              <span className="text-white font-medium">Ultra-Light</span>
              <span>Titanium Build</span>
            </div>
          </div>
        </div>

        {/* 3D Model Container */}
        <div className="relative h-[50vh] sm:h-[60vh] lg:h-screen flex items-center justify-center order-1 lg:order-2">
          <div className="relative w-full max-w-2xl h-full">
            <AetherModel className="w-full h-full" />
          </div>
        </div>
      </div>
    </section>
  );
}
