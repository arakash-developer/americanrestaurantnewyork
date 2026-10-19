"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const photos = [
  {
    src: "https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?w=900&q=85&auto=format&fit=crop",
    alt: "Signature plate",
    tall: true,
  },
  {
    src: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=700&q=85&auto=format&fit=crop",
    alt: "Pancakes",
    tall: false,
  },
  {
    src: "https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?w=700&q=85&auto=format&fit=crop",
    alt: "Breakfast plate",
    tall: false,
  },
  {
    src: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=900&q=85&auto=format&fit=crop",
    alt: "Street tacos",
    tall: true,
  },
  {
    src: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=700&q=85&auto=format&fit=crop",
    alt: "Restaurant",
    tall: false,
  },
  {
    src: "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=700&q=85&auto=format&fit=crop",
    alt: "Bowl",
    tall: false,
  },
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-24 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-end justify-between mb-14 flex-wrap gap-6">
          <div>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-amber-400 text-xs uppercase tracking-[0.3em] mb-3"
              style={{ fontFamily: "sans-serif" }}
            >
              A Taste of Us
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-4xl sm:text-5xl font-bold text-white"
              style={{ fontFamily: "Georgia, serif" }}
            >
              Food &amp;
              <span className="text-amber-400 italic"> Atmosphere</span>
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-gray-600 text-sm max-w-xs"
            style={{ fontFamily: "sans-serif" }}
          >
            1467 Amsterdam Ave — where every plate tells a story.
          </motion.p>
        </div>

        {/* Two-column masonry */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {photos.map((p, i) => (
            <motion.div
              key={p.alt}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className={`relative group rounded-2xl overflow-hidden ${
                p.tall ? "row-span-2" : "row-span-1"
              }`}
              style={{ aspectRatio: p.tall ? "4/5" : "4/3" }}
            >
              <Image
                src={p.src}
                alt={p.alt}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 768px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
