"use client";

import React from "react";
import Link from "next/link";
import { poetries } from "../../data/poetries";

const PoetryList: React.FC = () => {
  return (
    <section className="w-full bg-background text-foreground py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto space-y-12 sm:space-y-16">
        {poetries.map((poem) => (
          <div
            key={poem.id}
            className="space-y-3 sm:space-y-4 text-left" // ✅ Always left-aligned
          >
            {/* Date */}
            <p className="text-2xl sm:text-3xl md:text-4xl font-hauora font-semibold text-foreground/20">
              {poem.date}
            </p>

            {/* Title */}
            <h2 className="text-xl sm:text-2xl md:text-3xl font-playfair italic font-semibold">
              {poem.title}
            </h2>

            {/* Excerpt */}
            <p className="text-base sm:text-lg md:text-xl text-foreground/80 max-w-3xl leading-relaxed">
              {poem.excerpt}{" "}
              <Link
                href={`/poetry/${poem.slug}`}
                className="underline hover:text-foreground/60 transition-colors"
              >
                Read more
              </Link>
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PoetryList;
