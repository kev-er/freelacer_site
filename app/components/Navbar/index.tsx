"use client";
import Navbar from "./Navbar";
import React, { useEffect } from "react";

const Navbarin: React.FC = () => {
  useEffect(() => {
    // Debounce function to improve scroll performance
    const debounce = (fn: Function) => {
      let frame: number;
      return (...params: any[]) => {
        if (frame) {
          cancelAnimationFrame(frame);
        }
        frame = requestAnimationFrame(() => {
          fn(...params);
        });
      };
    };

    const storeScroll = () => {
      document.documentElement.dataset.scroll = window.scrollY.toString();
    };

    document.addEventListener("scroll", debounce(storeScroll), { passive: true });

    storeScroll();
  }, []);

  return (
    <>
      <Navbar />
    </>
  );
};

export default Navbarin;
