"use client";

import { useAnimations } from "../hooks/useAnimations";

export default function ContactSection() {
  useAnimations("contact");
  return (
    <section
      id="contact"
      style={{ visibility: "hidden" }} // Initially hidden, will be shown by GSAP
      className="min-h-screen bg-[#121212] flex items-center justify-center py-16 sm:py-20 rounded-t-3xl"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center space-y-8 sm:space-y-12">
          <div className="space-y-4 sm:space-y-6">
            <h2
              className="text-4xl sm:text-5xl lg:text-6xl font-light text-white tracking-tight"
              data-animate="title"
            >
              <span className="block bg-gradient-to-r from-[#d7ccc8] to-[#bcaaa4] bg-clip-text text-transparent">
                Contact
              </span>
              <span className="block text-2xl sm:text-3xl lg:text-4xl text-[#8d6e63] font-extralight mt-2">
                Get in Touch
              </span>
            </h2>
            <div className="w-20 h-px bg-gradient-to-r from-[#8d6e63] to-transparent mx-auto"></div>
          </div>

          <p
            className="text-base sm:text-lg text-[#bcaaa4] leading-relaxed max-w-2xl mx-auto"
            data-animate="content"
          >
            Ready to experience the future of timekeeping? Join our exclusive
            waitlist and be the first to own an Aether Watch.
          </p>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 mt-12 sm:mt-16">
            <div
              className="text-center space-y-3 sm:space-y-4 sm:col-span-2 md:col-span-1"
              data-animate="item"
            >
              <div className="w-14 h-14 sm:w-16 sm:h-16 mx-auto bg-gradient-to-r from-[#8d6e63] to-[#bcaaa4] rounded-full flex items-center justify-center">
                <svg
                  className="w-6 h-6 sm:w-8 sm:h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 className="text-base sm:text-lg font-medium text-[#d7ccc8]">
                Email
              </h3>
              <p className="text-sm sm:text-base text-[#8d6e63]">
                hello@aetherwatch.com
              </p>
            </div>

            <div
              className="text-center space-y-3 sm:space-y-4"
              data-animate="item"
            >
              <div className="w-14 h-14 sm:w-16 sm:h-16 mx-auto bg-gradient-to-r from-[#8d6e63] to-[#bcaaa4] rounded-full flex items-center justify-center">
                <svg
                  className="w-6 h-6 sm:w-8 sm:h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
              </div>
              <h3 className="text-base sm:text-lg font-medium text-[#d7ccc8]">
                Phone
              </h3>
              <p className="text-sm sm:text-base text-[#8d6e63]">
                +1 (555) 123-4567
              </p>
            </div>

            <div
              className="text-center space-y-3 sm:space-y-4"
              data-animate="item"
            >
              <div className="w-14 h-14 sm:w-16 sm:h-16 mx-auto bg-gradient-to-r from-[#8d6e63] to-[#bcaaa4] rounded-full flex items-center justify-center">
                <svg
                  className="w-6 h-6 sm:w-8 sm:h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              <h3 className="text-base sm:text-lg font-medium text-[#d7ccc8]">
                Location
              </h3>
              <p className="text-sm sm:text-base text-[#8d6e63]">
                San Francisco, CA
              </p>
            </div>
          </div>

          <div className="mt-12 sm:mt-16">
            <button
              data-animate="button"
              className="px-8 sm:px-12 py-3 sm:py-4 bg-gradient-to-r from-[#5d4037] via-[#4e342e] to-[#3e2723] hover:from-[#6d4c41] hover:via-[#5d4037] hover:to-[#4e342e] rounded-full text-base sm:text-lg font-medium text-white transition-all duration-500 transform hover:scale-[1.02] hover:shadow-2xl hover:shadow-[#8d6e63]/20 border border-[#8d6e63]/20"
            >
              Join Waitlist
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
