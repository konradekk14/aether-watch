"use client";
import { useState, useEffect } from "react";
import CTAButton from "./CTAButton";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b ${
        isScrolled
          ? "bg-[#121212]/95 backdrop-blur-lg border-[#8d6e63]/20"
          : "bg-transparent border-transparent"
      }`}
    >
      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <button
            onClick={() => scrollToSection("home")}
            className="group flex items-center space-x-3 cursor-pointer"
          >
            <div className="relative">
              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[#8d6e63] to-[#bcaaa4] flex items-center justify-center">
                <div className="w-6 h-6 rounded-full bg-[#121212] flex items-center justify-center">
                  <div className="w-3 h-3 rounded-full bg-gradient-to-r from-[#d7ccc8] to-[#bcaaa4]"></div>
                </div>
              </div>
              <div className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-[#8d6e63]/30 animate-pulse"></div>
            </div>
            <span className="text-xl font-light text-white tracking-wide group-hover:text-[#d7ccc8] transition-colors duration-300">
              Aether
            </span>
          </button>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            {["home", "about", "contact"].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className="relative group text-[#d7ccc8] hover:text-white transition-colors duration-300 font-light capitalize"
              >
                {section}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-gradient-to-r from-[#8d6e63] to-[#bcaaa4] group-hover:w-full transition-all duration-300"></span>
              </button>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <CTAButton showArrow={true}>Pre-Order</CTAButton>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-[#d7ccc8] hover:text-white transition-colors duration-300 relative z-50"
          >
            <svg
              className={`w-6 h-6 transition-transform duration-300 ${
                isMobileMenuOpen ? "rotate-45" : ""
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`md:hidden fixed inset-0 z-40 transition-opacity duration-500 ${
          isMobileMenuOpen ? "visible opacity-100" : "invisible opacity-0"
        }`}
      >
        <div
          className="absolute inset-0 bg-[#121212]/95 backdrop-blur-lg"
          onClick={() => setIsMobileMenuOpen(false)}
        />
        <div className="relative z-50 flex flex-col items-center justify-center min-h-screen space-y-8">
          {["home", "about", "contact"].map((section) => (
            <button
              key={section}
              onClick={() => scrollToSection(section)}
              className="cursor-pointer text-3xl font-light text-[#d7ccc8] hover:text-white transition-colors duration-300 capitalize"
            >
              {section}
            </button>
          ))}

          <div className="pt-8">
            <CTAButton showArrow={false}>Pre-Order</CTAButton>
          </div>
        </div>
      </div>
    </nav>
  );
}
