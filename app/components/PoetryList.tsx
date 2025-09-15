"use client";

import React from "react";
import Link from "next/link"; // ✅ Make sure this import exists
import { poetries } from "../../data/poetries";

const PoetryList: React.FC = () => {
  return (
    <section className="w-full bg-background text-foreground py-16 px-6 md:px-5 lg:px-20">
      <div className="max-w-5xl mx-auto space-y-16">
        {poetries.map((poem) => (
          <div key={poem.id} className="space-y-4">
            <p className="text-3xl md:text-5xl font-hauora font-semibold text-foreground/10">
              {poem.date}
            </p>
            <h2 className="text-2xl md:text-3xl font-hauora font-semibold">
              {poem.title}
            </h2>
            <p className="text-lg md:text-xl text-foreground/80 max-w-3xl leading-relaxed">
              {poem.excerpt}{" "}
              <Link
                href={`/poetry/${poem.slug}`} // correct path to dynamic page
                className="underline hover:text-foreground/60 transition"
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
