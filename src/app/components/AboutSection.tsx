"use client";
import { useAnimations } from "../hooks/useAnimations";

export default function AboutSection() {
  useAnimations("about");

  return (
    <section
      id="about"
      className="min-h-screen flex flex-col bg-gradient-to-b from-white to-gray-50 items-center pt-24 pb-16"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center space-y-12 sm:space-y-16">
          {/* Header */}
          <div className="space-y-6">
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
            <div className="w-24 h-px bg-gradient-to-r from-[#8d6e63] to-transparent mx-auto"></div>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Where innovation meets tradition. Every Aether Watch embodies our
              commitment to precision, sustainability, and timeless design.
            </p>
          </div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Story & Details */}
            <div className="space-y-6 text-left lg:order-1 order-2">
              <div className="space-y-4">
                <h3 className="text-2xl font-light text-gray-800 mb-4">
                  Our Story
                </h3>
                <p
                  className="text-base sm:text-lg text-gray-600 leading-relaxed"
                  data-animate="content"
                >
                  Born from the fusion of cutting-edge technology and timeless
                  craftsmanship, Aether Watch represents the pinnacle of modern
                  timepiece engineering. Our vision began with a simple
                  question: What if a smartwatch could be as elegant as it is
                  intelligent?
                </p>
                <p
                  className="text-base sm:text-lg text-gray-600 leading-relaxed"
                  data-animate="content"
                >
                  Each Aether Watch is meticulously crafted using
                  aerospace-grade materials and powered by our proprietary
                  AetherOS, delivering an unparalleled user experience that
                  seamlessly integrates with your lifestyle.
                </p>
              </div>

              {/* Key Features */}
              <div className="pt-6 border-t border-gray-200">
                <h4 className="text-lg font-medium text-gray-800 mb-4">
                  What Sets Us Apart
                </h4>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-[#8d6e63] rounded-full"></div>
                    <span className="text-gray-600">
                      Titanium Grade 5 construction for ultimate durability
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-[#8d6e63] rounded-full"></div>
                    <span className="text-gray-600">
                      Sapphire crystal display with anti-reflective coating
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-[#8d6e63] rounded-full"></div>
                    <span className="text-gray-600">
                      Advanced health monitoring with medical-grade sensors
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-[#8d6e63] rounded-full"></div>
                    <span className="text-gray-600">
                      Carbon-neutral manufacturing process
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="lg:order-2 order-1">
              <div className="grid grid-cols-2 gap-4 sm:gap-6">
                <div
                  className="text-center p-6 sm:p-8 bg-white rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300"
                  data-animate="item"
                >
                  <div className="text-3xl sm:text-4xl font-light text-[#8d6e63] mb-2">
                    2024
                  </div>
                  <div className="text-sm text-gray-600">Founded</div>
                  <div className="text-xs text-gray-500 mt-1">
                    Innovation Begins
                  </div>
                </div>

                <div
                  className="text-center p-6 sm:p-8 bg-white rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300"
                  data-animate="item"
                >
                  <div className="text-3xl sm:text-4xl font-light text-[#8d6e63] mb-2">
                    50+
                  </div>
                  <div className="text-sm text-gray-600">Smart Features</div>
                  <div className="text-xs text-gray-500 mt-1">AI-Powered</div>
                </div>

                <div
                  className="text-center p-6 sm:p-8 bg-white rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300"
                  data-animate="item"
                >
                  <div className="text-3xl sm:text-4xl font-light text-[#8d6e63] mb-2">
                    7 Days
                  </div>
                  <div className="text-sm text-gray-600">Battery Life</div>
                  <div className="text-xs text-gray-500 mt-1">
                    Fast Charging
                  </div>
                </div>

                <div
                  className="text-center p-6 sm:p-8 bg-white rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300"
                  data-animate="item"
                >
                  <div className="text-3xl sm:text-4xl font-light text-[#8d6e63] mb-2">
                    5ATM
                  </div>
                  <div className="text-sm text-gray-600">Water Resistant</div>
                  <div className="text-xs text-gray-500 mt-1">Swim Ready</div>
                </div>
              </div>

              {/* Additional Stats */}
              <div className="mt-4 mb-4 grid grid-cols-3 gap-4">
                <div className="text-center" data-animate="item">
                  <div className="text-2xl font-light text-[#8d6e63]">
                    99.9%
                  </div>
                  <div className="text-xs text-gray-500">Accuracy</div>
                </div>
                <div className="text-center" data-animate="item">
                  <div className="text-2xl font-light text-[#8d6e63]">24/7</div>
                  <div className="text-xs text-gray-500">Monitoring</div>
                </div>
                <div className="text-center" data-animate="item">
                  <div className="text-2xl font-light text-[#8d6e63]">∞</div>
                  <div className="text-xs text-gray-500">Possibilities</div>
                </div>
              </div>
              {/* Attribution */}
              <div className="pt-2 border-t border-gray-200">
                <p className="text-sm text-gray-500 leading-relaxed">
                  3D Model: &quot;Apple Watch Ultra 2&quot; by{" "}
                  <a
                    href="https://skfb.ly/oLpRF"
                    className="text-[#8d6e63] hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    polyman Studio
                  </a>{" "}
                  is licensed under{" "}
                  <a
                    href="http://creativecommons.org/licenses/by/4.0/"
                    className="text-[#8d6e63] hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Creative Commons Attribution
                  </a>
                </p>
              </div>
            </div>
          </div>
          {/* Attribution */}
          <div className="pt-2 border-t border-gray-200">
            <p className="text-sm text-gray-500 leading-relaxed">
              3D Model: &quot;Apple Watch Ultra 2&quot; by{" "}
              <a
                href="https://skfb.ly/oLpRF"
                className="text-[#8d6e63] hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                polyman Studio
              </a>{" "}
              is licensed under{" "}
              <a
                href="http://creativecommons.org/licenses/by/4.0/"
                className="text-[#8d6e63] hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Creative Commons Attribution
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
