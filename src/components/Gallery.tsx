"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const photos = [
  {
    src: "https://images.unsplash.com/photo-1550547660-d9450f859349?w=800&q=80&auto=format&fit=crop",
    alt: "Restaurant dining",
    className: "col-span-2 row-span-2",
  },
  {
    src: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=600&q=80&auto=format&fit=crop",
    alt: "Street tacos",
    className: "col-span-1 row-span-1",
  },
  {
    src: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=600&q=80&auto=format&fit=crop",
    alt: "Pancakes",
    className: "col-span-1 row-span-1",
  },
  {
    src: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80&auto=format&fit=crop",
    alt: "Restaurant atmosphere",
    className: "col-span-1 row-span-2",
  },
  {
    src: "https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?w=600&q=80&auto=format&fit=crop",
    alt: "American breakfast",
    className: "col-span-1 row-span-1",
  },
  {
    src: "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=600&q=80&auto=format&fit=crop",
    alt: "Burrito bowl",
    className: "col-span-1 row-span-1",
  },
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-28 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-amber-400 text-xs uppercase tracking-[0.3em] mb-4">
            A Taste of Us
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold text-white">
            Food & Atmosphere
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-4 grid-rows-3 gap-3 h-[620px]"
        >
          {photos.map((photo, i) => (
            <motion.div
              key={photo.alt}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className={`relative rounded-2xl overflow-hidden group ${photo.className}`}
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
            </motion.div>
          ))}
        </motion.div>

        {/* Tagline strip */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 flex flex-wrap justify-center gap-8 text-gray-600 text-sm uppercase tracking-widest"
        >
          {["Fresh Daily", "Family Recipes", "New York City", "Dine In & Takeout", "Authentic Flavors"].map((tag) => (
            <span key={tag} className="flex items-center gap-2">
              <span className="w-1 h-1 bg-amber-500 rounded-full" />
              {tag}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
