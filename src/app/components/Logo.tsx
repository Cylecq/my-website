"use client";
import React from "react";
import scrollToSection from "@/utils/scrollToSection";

function Logo() {
  return (
    <button
      onClick={() => scrollToSection("#title")}
      className="flex"
      aria-label="Home Page"
    >
      <span aria-hidden="true" className="text-lg lg:text-xl">
        Cyril{" "}
        <strong>
          L<span className="text-primary">.</span>
        </strong>
      </span>
    </button>
  );
}

export default Logo;
