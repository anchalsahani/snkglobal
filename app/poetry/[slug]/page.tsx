"use client";

import { poetries } from "@/data/poetries";
import { useParams } from "next/navigation";
import Link from "next/link";

const PoetryDetail = () => {
  const params = useParams();
  const slug = params.slug;
  const poem = poetries.find((p) => p.slug === slug);

  if (!poem) {
    return (
      <div className="p-10 text-center">
        <h1 className="text-3xl font-bold">Poetry not found</h1>
        <Link href="/poetry" className="text-blue-500 underline mt-4 block">
          Back to all poetries
        </Link>
      </div>
    );
  }

  return (
    <section className="w-full bg-background text-foreground py-16 px-6 md:px-5 lg:px-20">
      <div className="max-w-3xl mx-auto space-y-8">
        <p className="text-3xl md:text-5xl font-hauora font-semibold text-foreground/10">
          {poem.date}
        </p>
        <h1 className="text-3xl md:text-4xl font-hauora font-bold">
          {poem.title}
        </h1>
        <p className="text-lg md:text-xl leading-relaxed whitespace-pre-line">
          {poem.content}
        </p>
        <Link
          href="/poetry"
          className="text-blue-500 underline hover:text-blue-400"
        >
          ← Back to all poetries
        </Link>
      </div>
    </section>
  );
};

export default PoetryDetail;
