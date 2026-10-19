"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight, Star, ChevronDown } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="relative h-screen min-h-[700px] overflow-hidden bg-[#080808]">

      {/* Right — image panel (absolute, covers right 48%) */}
      <div className="absolute top-0 right-0 h-full w-[52%] hidden lg:block">
        <Image
          src="https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?w=1400&q=90&auto=format&fit=crop"
          alt="Signature dish"
          fill
          priority
          className="object-cover"
          sizes="52vw"
        />
        {/* Left edge fade into dark bg */}
        <div className="absolute inset-y-0 left-0 w-40 bg-gradient-to-r from-[#080808] to-transparent" />
        {/* Bottom fade */}
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#080808] to-transparent" />
        {/* Subtle top fade */}
        <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[#080808]/60 to-transparent" />

        {/* Floating badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="absolute bottom-20 right-10 bg-black/70 backdrop-blur-xl border border-white/10 rounded-2xl px-5 py-4"
        >
          <p className="text-[10px] text-amber-400 uppercase tracking-widest mb-1" style={{ fontFamily: "sans-serif" }}>
            Now Open
          </p>
          <p className="text-white font-semibold text-sm" style={{ fontFamily: "sans-serif" }}>
            Dine-in · Takeout · Delivery
          </p>
        </motion.div>
      </div>

      {/* Mobile background */}
      <div className="absolute inset-0 lg:hidden">
        <Image
          src="https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?w=800&q=80&auto=format&fit=crop"
          alt="Food"
          fill
          priority
          className="object-cover opacity-15"
          sizes="100vw"
        />
      </div>

      {/* Content — same container as navbar */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 h-full flex flex-col justify-between py-28">

        {/* Top — label */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3"
        >
          <div className="flex gap-0.5">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-3 h-3 fill-amber-400 text-amber-400" />
            ))}
          </div>
          <span className="text-gray-500 text-xs uppercase tracking-[0.28em]" style={{ fontFamily: "sans-serif" }}>
            Family-Owned · New York City
          </span>
        </motion.div>

        {/* Middle — main content */}
        <div className="flex flex-col lg:max-w-[52%]">
          {/* Amber accent line */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="w-12 h-[3px] bg-amber-500 rounded-full mb-8 origin-left"
          />

          <motion.h1
            initial={{ opacity: 0, y: 48 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="text-[clamp(52px,6.5vw,100px)] font-bold text-white leading-[0.92] tracking-tighter mb-7"
            style={{ fontFamily: "Georgia, serif" }}
          >
            Taste the
            <br />
            <span className="shimmer italic">Soul</span>
            <span className="text-white"> of</span>
            <br />
            New York.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="text-gray-400 text-base sm:text-[17px] max-w-[380px] leading-relaxed mb-10"
            style={{ fontFamily: "sans-serif" }}
          >
            Classic American breakfast meets authentic Mexican comfort food —
            open daily on Amsterdam Ave.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.48 }}
            className="flex flex-wrap items-center gap-4"
          >
            <a
              href="#menu"
              className="group inline-flex items-center gap-2.5 bg-amber-500 hover:bg-amber-400 text-black font-bold text-[13px] uppercase tracking-widest px-8 py-4 rounded-full transition-all duration-300 hover:shadow-xl hover:shadow-amber-500/30 hover:-translate-y-0.5"
              style={{ fontFamily: "sans-serif" }}
            >
              Explore Menu
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
            </a>
            <a
              href="https://americanrestaurantnewyork.com/american-restaurant/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-white/20 hover:border-amber-500/60 text-white/80 hover:text-amber-400 font-semibold text-[13px] uppercase tracking-widest px-8 py-4 rounded-full transition-all duration-300"
              style={{ fontFamily: "sans-serif" }}
            >
              Order Online
            </a>
          </motion.div>
        </div>

        {/* Bottom — info strip */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.65 }}
          className="flex items-end justify-between flex-wrap gap-6"
        >
          <div className="flex gap-10 border-t border-white/10 pt-6" style={{ fontFamily: "sans-serif" }}>
            {[
              { label: "Address", value: "1467 Amsterdam Ave" },
              { label: "Phone", value: "(646) 449-8686" },
              { label: "Hours", value: "9 AM – 10 PM" },
            ].map(({ label, value }) => (
              <div key={label}>
                <p className="text-[10px] uppercase tracking-widest text-gray-600 mb-1">{label}</p>
                <p className="text-white text-sm font-semibold">{value}</p>
              </div>
            ))}
          </div>

          {/* Scroll indicator */}
          <motion.a
            href="#about"
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center gap-1.5 text-gray-600 hover:text-amber-400 transition-colors"
          >
            <span className="text-[10px] uppercase tracking-widest" style={{ fontFamily: "sans-serif" }}>Scroll</span>
            <ChevronDown className="w-4 h-4" />
          </motion.a>
        </motion.div>

      </div>
    </section>
  );
}
