"use client";
import dynamic from "next/dynamic";
import { useAnimations } from "../hooks/useAnimations";
import CTAButton from "./CTAButton";
// Dynamically import the 3D model to avoid SSR issues
const AetherModel = dynamic(() => import("./AetherModel"), {
  ssr: false,
  loading: () => null, // No loading animation - model will appear instantly when ready
});

export default function HeroSection() {
  useAnimations("home");
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-[#121212] rounded-b-3xl overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl grid lg:grid-cols-12 gap-8 lg:gap-16 xl:gap-20 items-center relative z-10 py-16 lg:py-12">
        {/* Text Content */}
        <div className="text-white h-[50vh] sm:h-[60vh] lg:h-screen flex flex-col justify-center items-start pl-8 text-left space-y-6 lg:space-y-8 order-2 lg:order-1 lg:col-span-6">
          <div className="space-y-4">
            <h1
              className="font-light tracking-tight leading-[0.9]"
              data-animate="title"
            >
              <span className="block text-5xl sm:text-6xl lg:text-7xl xl:text-8xl bg-gradient-to-r from-[#d7ccc8] via-white to-[#bcaaa4] bg-clip-text text-transparent font-extralight">
                AE.1
              </span>
              <span className="block text-3xl sm:text-4xl lg:text-5xl xl:text-6xl text-white font-thin tracking-wide mt-2">
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

          {/* Subtle stats/features */}
          <div className="flex flex-wrap gap-6 sm:gap-8 mt-2 text-xs sm:text-sm text-[#8d6e63] font-light">
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

          <div className="flex flex-col sm:flex-row pt-6 lg:pt-8">
            <CTAButton>Explore Features</CTAButton>
          </div>
        </div>

        {/* 3D Model Container */}
        <div className="relative h-[50vh] sm:h-[60vh] lg:h-screen flex items-center justify-center order-1 lg:order-2 lg:col-span-6">
          <div className="relative w-full h-full">
            <AetherModel className="w-full h-full" />
          </div>
        </div>
      </div>
    </section>
  );
}
