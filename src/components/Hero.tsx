"use client";

import { motion } from "framer-motion";
import { ChevronDown, MapPin, Clock, Phone } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-end overflow-hidden">
      {/* Full-bleed background image */}
      <Image
        src="https://images.unsplash.com/photo-1550547660-d9450f859349?w=1920&q=85&auto=format&fit=crop"
        alt="Restaurant ambiance"
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />

      {/* Layered gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/20" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent" />

      {/* Content anchored to bottom */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 pb-24 pt-40">
        <div className="max-w-3xl">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-amber-500/20 border border-amber-500/40 text-amber-300 text-xs uppercase tracking-[0.25em] px-4 py-2 rounded-full mb-6"
          >
            <span className="w-1.5 h-1.5 bg-amber-400 rounded-full animate-pulse" />
            Family-Owned · New York City
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-6xl sm:text-7xl lg:text-[96px] font-bold text-white leading-[1.0] tracking-tight mb-6"
          >
            American
            <br />
            <span className="shimmer">Restaurant</span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="text-gray-300 text-lg sm:text-xl max-w-xl leading-relaxed mb-10"
          >
            Classic American breakfast meets authentic Mexican comfort food —
            tacos, tamales, chilaquiles & more. Served daily in the heart of NYC.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="flex flex-wrap gap-4 mb-14"
          >
            <a
              href="#menu"
              className="bg-amber-500 hover:bg-amber-400 text-black font-bold text-sm uppercase tracking-widest px-8 py-4 rounded-full transition-all duration-300 hover:shadow-2xl hover:shadow-amber-500/40 hover:-translate-y-1"
            >
              View Menu
            </a>
            <a
              href="https://americanrestaurantnewyork.com/american-restaurant/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 backdrop-blur-sm hover:bg-white/20 border border-white/30 text-white font-semibold text-sm uppercase tracking-widest px-8 py-4 rounded-full transition-all duration-300 hover:-translate-y-1"
            >
              Order Online
            </a>
          </motion.div>

          {/* Info pills */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.55 }}
            className="flex flex-wrap gap-3"
          >
            {[
              { icon: MapPin, text: "1467 Amsterdam Ave, NY 10027" },
              { icon: Phone, text: "(646) 449-8686" },
              { icon: Clock, text: "Open Daily 9am – 10pm" },
            ].map(({ icon: Icon, text }) => (
              <div
                key={text}
                className="flex items-center gap-2 bg-black/40 backdrop-blur-sm border border-white/10 text-gray-300 text-sm px-4 py-2 rounded-full"
              >
                <Icon className="w-3.5 h-3.5 text-amber-400" />
                {text}
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll cue */}
      <a
        href="#about"
        className="absolute bottom-8 right-8 text-white/40 hover:text-amber-400 transition-colors"
        aria-label="Scroll down"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <ChevronDown className="w-7 h-7" />
        </motion.div>
      </a>
    </section>
  );
}
