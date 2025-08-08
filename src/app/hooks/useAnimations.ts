"use client";

import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const useAnimations = (sectionId: string) => {
  useEffect(() => {
    const section = document.getElementById(sectionId);
    if (!section) return;

    // Get all animatable elements within the section
    const titles = section.querySelectorAll("[data-animate='title']");
    const contents = section.querySelectorAll("[data-animate='content']");
    const items = section.querySelectorAll("[data-animate='item']");
    const buttons = section.querySelectorAll("[data-animate='button']");

    // Set initial states for elements that exist
    const elements = [
      ...Array.from(titles),
      ...Array.from(contents),
      ...Array.from(items),
      ...Array.from(buttons),
    ].filter(Boolean);

    if (elements.length > 0) {
      gsap.set(elements, { opacity: 0, y: 50 });
    }

    if (items.length > 0) {
      gsap.set(items, { scale: 0.95 });
    }

    // Create the animation timeline
    const tl = gsap.timeline({
      defaults: { ease: "power2.out" },
      scrollTrigger:
        sectionId === "home"
          ? undefined
          : {
              trigger: section,
              start: "top 80%", // Start animation when the top of the section hits 80% from the top of viewport
              end: "top 30%", // End animation when the top of the section hits 30% from the top of viewport
              toggleActions: "play none none reverse", // play on enter, reverse on leave
            },
    });

    // Only animate elements that exist
    if (titles.length > 0) {
      tl.to(titles, {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.2,
      });
    }

    if (contents.length > 0) {
      tl.to(
        contents,
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.1,
        },
        "-=0.4"
      );
    }

    if (items.length > 0) {
      tl.to(
        items,
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.6,
          stagger: 0.1,
        },
        "-=0.3"
      );
    }

    if (buttons.length > 0) {
      tl.to(
        buttons,
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          ease: "back.out(1.7)",
        },
        "-=0.2"
      );
    }

    // Cleanup
    return () => {
      const trigger = ScrollTrigger.getById(sectionId);
      if (trigger) {
        trigger.kill();
      }
      tl.kill();
    };
  }, [sectionId]);
};
