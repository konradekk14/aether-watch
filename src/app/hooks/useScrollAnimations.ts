"use client";

import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const useScrollAnimations = () => {
  useEffect(() => {
    // Enable smooth scrolling for normal sections
    document.documentElement.style.scrollBehavior = "smooth";

    // Set up the contact section animation
    const contactSection = document.getElementById("contact");
    const aboutSection = document.getElementById("about");

    if (contactSection && aboutSection) {
      // Initial setup - position the contact section
      gsap.set(contactSection, {
        yPercent: 100, // Start below the viewport
        position: "fixed",
        width: "100%",
        bottom: 0,
        zIndex: 10,
      });

      // Create the scroll trigger animation
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: aboutSection,
          start: "bottom bottom+=10%", // Start slightly before the bottom
          end: "+=150%", // Extend the animation duration
          pin: true,
          pinSpacing: true,
          scrub: 1.5, // Increased scrub for smoother motion
          anticipatePin: 1,
          ease: "power1.inOut", // Smoother ease for the entire timeline
          onEnter: () => {
            contactSection.style.visibility = "visible";
          },
          onLeaveBack: () => {
            contactSection.style.visibility = "hidden";
          },
        },
      });

      // Create a more complex animation sequence
      tl.fromTo(
        aboutSection,
        { scale: 1 },
        { scale: 0.98, duration: 0.3 } // Subtle scale effect on the about section
      ).to(
        contactSection,
        {
          yPercent: 0,
          ease: "power1.inOut",
          duration: 1,
        },
        "<+=0.1"
      ); // Start slightly after the scale effect

      // Cleanup function
      return () => {
        ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
        document.documentElement.style.scrollBehavior = "auto";
      };
    }
  }, []);
};
