"use client";

import { useState } from "react";

type Testimonial = {
  id: number;
  name: string;
  title: string;
  quote: string;
};

const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: "Poppy Eleanor",
    title: "Client Manager",
    quote:
      "Their client-focused approach strengthened our communication and trust. Every interaction was smooth, thoughtful, and aligned with our needs, helping our team operate with greater clarity, confidence, and long-lasting momentum.",
  },
  {
    id: 2,
    name: "Michael Harris",
    title: "Programme Director",
    quote:
      "A deep understanding of governance, regulation, and delivery. They consistently translated complex requirements into practical, implementable solutions.",
  },
  {
    id: 3,
    name: "Amrita Patel",
    title: "Chief Data Officer",
    quote:
      "Their work enabled us to accelerate sensitive data collaboration without compromising privacy, ethics, or regulatory obligations.",
  },
  {
    id: 4,
    name: "Liam O’Connor",
    title: "Head of Innovation",
    quote:
      "A rare blend of strategic thinking and delivery discipline, helping our teams align on governance while still moving quickly.",
  },
];

export function TestimonialsSection() {
  const [active, setActive] = useState<Testimonial>(TESTIMONIALS[0]);

  return (
    <section className="border-b border-zinc-900/60 bg-black">
      <div className="mx-auto max-w-6xl px-6 py-16 md:px-10 md:py-20 lg:px-0">
        <div className="relative mb-10">
          <h2 className="text-3xl font-semibold tracking-tight text-zinc-900/30 md:text-4xl">
            What our clients say
          </h2>
          <p className="absolute left-0 top-1/2 text-sm font-medium text-zinc-200/90 md:top-3/4">
            What our clients say
          </p>
        </div>

        <div className="flex flex-col gap-10 md:flex-row md:items-center">
          {/* Headshots column */}
          <div className="flex flex-row gap-4 md:flex-col">
            {TESTIMONIALS.map((t) => {
              const isActive = t.id === active.id;
              return (
                <button
                  key={t.id}
                  type="button"
                  onClick={() => setActive(t)}
                  className={`relative h-12 w-12 rounded-full border border-zinc-700 bg-[url('https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=400')] bg-cover bg-center transition ${
                    isActive ? "ring-2 ring-[#c5f018] ring-offset-2 ring-offset-black" : ""
                  }`}
                  aria-label={`View testimonial from ${t.name}`}
                />
              );
            })}
          </div>

          {/* Testimonial card */}
          <div className="flex-1">
            <div className="rounded-3xl border border-lime-400/70 bg-gradient-to-br from-lime-500/10 via-emerald-500/10 to-black p-[1px]">
              <div className="h-full rounded-[1.4rem] bg-gradient-to-br from-zinc-950 to-slate-950 px-6 py-8 md:px-8 md:py-10">
                <p className="text-sm leading-relaxed text-zinc-100">
                  “{active.quote}”
                </p>
                <div className="mt-6 flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
                  <div>
                    <p className="text-sm font-semibold text-white">{active.name}</p>
                    <p className="text-xs text-zinc-400">{active.title}</p>
                  </div>
                  <div className="flex items-center gap-1 text-xs">
                    {Array.from({ length: 5 }).map((_, idx) => (
                      <span
                        key={idx}
                        className={`inline-block text-base ${
                          idx < 4 ? "text-[#c5f018]" : "text-zinc-500"
                        }`}
                      >
                        ★
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

