"use client";

import React from "react";

const Hero: React.FC = () => {
  return (
    <section className="w-full bg-background text-foreground py-20 px-6 md:px-11 lg:px-20">
      <div className="max-w-5xl mx-auto">
        {/* Main Heading */}
        <h1 className="text-3xl md:text-6xl font-playfair italic font-normal leading-tight text-left">
          Paean
        </h1>

        {/* Subheading */}
        <p className="mt-4 text-xl md:text-2xl font-playfair italic text-foreground/80">
          a song of praise or triumph
        </p>
      </div>
    </section>
  );
};

export default Hero;
