"use client";
import dynamic from "next/dynamic";

// Dynamically import the 3D model to avoid SSR issues
const AetherModel = dynamic(() => import("./AetherModel"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full flex items-center justify-center">
      <div className="relative">
        <div className="animate-spin rounded-full h-24 w-24 border-2 border-transparent border-t-[#d7ccc8] border-r-[#bcaaa4]"></div>
        <div className="absolute inset-0 animate-ping rounded-full h-24 w-24 border border-[#8d6e63]/30"></div>
      </div>
    </div>
  ),
});

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-[#121212] rounded-b-3xl overflow-hidden">
      <div className="container mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-16 items-center relative z-10 py-12">
        {/* Text Content */}
        <div className="text-white space-y-8 max-w-2xl">
          <div className="space-y-4">
            <h1 className="font-light tracking-tight leading-[0.9]">
              <span className="block text-6xl lg:text-8xl xl:text-9xl bg-gradient-to-r from-[#d7ccc8] via-white to-[#bcaaa4] bg-clip-text text-transparent font-extralight">
                Aether
              </span>
              <span className="block text-4xl lg:text-6xl xl:text-7xl text-white font-thin tracking-wide mt-2">
                Watch
              </span>
            </h1>

            <div className="w-20 h-px bg-gradient-to-r from-[#8d6e63] to-transparent mt-8"></div>
          </div>

          <p className="text-lg lg:text-xl xl:text-2xl text-[#bcaaa4] leading-relaxed font-light max-w-lg">
            Experience the future of timekeeping with our revolutionary
            smartwatch that transcends ordinary boundaries and redefines luxury.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 pt-8">
            <button className="group px-10 py-5 bg-gradient-to-r from-[#5d4037] via-[#4e342e] to-[#3e2723] hover:from-[#6d4c41] hover:via-[#5d4037] hover:to-[#4e342e] rounded-full text-base font-medium text-white transition-all duration-500 transform hover:scale-[1.02] hover:shadow-2xl hover:shadow-[#8d6e63]/20 border border-[#8d6e63]/20">
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

            <button className="group px-10 py-5 border border-[#8d6e63]/40 hover:border-[#bcaaa4] rounded-full text-base font-medium text-[#d7ccc8] transition-all duration-500 hover:bg-gradient-to-r hover:from-[#8d6e63]/5 hover:to-[#bcaaa4]/5 backdrop-blur-sm">
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
          <div className="flex gap-8 pt-12 text-sm text-[#8d6e63] font-light">
            <div className="flex flex-col gap-1">
              <span className="text-white font-medium">7 Days</span>
              <span>Battery Life</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-white font-medium">5ATM</span>
              <span>Water Resistant</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-white font-medium">Ultra-Light</span>
              <span>Titanium Build</span>
            </div>
          </div>
        </div>

        {/* 3D Model Container */}
        <div className="relative h-[80vh] lg:h-screen flex items-center justify-center">
          <div className="relative w-full max-w-2xl h-full">
            <AetherModel className="w-full h-full" />
          </div>
        </div>
      </div>
    </section>
  );
}
