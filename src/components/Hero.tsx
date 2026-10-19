"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight, Star } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="relative h-screen min-h-[700px] flex overflow-hidden">
      {/* Left — content */}
      <div className="relative z-10 flex flex-col justify-end pb-16 px-8 sm:px-14 w-full lg:w-[52%] bg-[#080808]">
        {/* Top label */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3 mb-8"
        >
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
            ))}
          </div>
          <span className="text-gray-500 text-xs uppercase tracking-[0.25em]">
            Family-Owned · New York City
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, delay: 0.1 }}
          className="text-[clamp(52px,7vw,96px)] font-bold text-white leading-[0.95] tracking-tighter mb-6"
          style={{ fontFamily: "Georgia, serif" }}
        >
          Taste the
          <br />
          <span className="shimmer italic">Soul</span> of
          <br />
          New York.
        </motion.h1>

        {/* Sub */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.28 }}
          className="text-gray-400 text-base sm:text-lg max-w-sm leading-relaxed mb-10"
          style={{ fontFamily: "sans-serif" }}
        >
          Classic American breakfast meets authentic Mexican comfort food.
          Open daily, 9&nbsp;AM–10&nbsp;PM on Amsterdam Ave.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.42 }}
          className="flex flex-wrap gap-3 mb-14"
        >
          <a
            href="#menu"
            className="group flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-black font-bold text-sm uppercase tracking-widest px-7 py-4 rounded-full transition-all duration-300 hover:shadow-2xl hover:shadow-amber-500/40 hover:-translate-y-0.5"
            style={{ fontFamily: "sans-serif" }}
          >
            Explore Menu
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="https://americanrestaurantnewyork.com/american-restaurant/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 border border-white/15 hover:border-amber-500/50 text-white hover:text-amber-400 font-semibold text-sm uppercase tracking-widest px-7 py-4 rounded-full transition-all duration-300"
            style={{ fontFamily: "sans-serif" }}
          >
            Order Online
          </a>
        </motion.div>

        {/* Info row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.58 }}
          className="flex gap-8 border-t border-white/8 pt-8"
          style={{ fontFamily: "sans-serif" }}
        >
          {[
            { label: "Address", value: "1467 Amsterdam Ave" },
            { label: "Phone", value: "(646) 449-8686" },
            { label: "Hours", value: "9 AM – 10 PM" },
          ].map(({ label, value }) => (
            <div key={label}>
              <p className="text-[10px] uppercase tracking-widest text-gray-600 mb-0.5">{label}</p>
              <p className="text-white text-sm font-semibold">{value}</p>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Right — image panel */}
      <motion.div
        initial={{ opacity: 0, x: 60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.1 }}
        className="hidden lg:block relative flex-1"
      >
        <Image
          src="https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?w=1200&q=90&auto=format&fit=crop"
          alt="Signature dish"
          fill
          priority
          className="object-cover"
          sizes="50vw"
        />
        {/* Edge fade left */}
        <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#080808] to-transparent" />
        {/* Bottom fade */}
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#080808] to-transparent" />

        {/* Floating badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="absolute bottom-16 left-8 bg-black/80 backdrop-blur-xl border border-white/10 rounded-2xl px-6 py-4"
        >
          <p className="text-[10px] text-gray-500 uppercase tracking-widest mb-1" style={{ fontFamily: "sans-serif" }}>
            Now Open
          </p>
          <p className="text-white font-bold text-base" style={{ fontFamily: "sans-serif" }}>
            Dine-in · Takeout · Delivery
          </p>
        </motion.div>
      </motion.div>

      {/* Mobile background */}
      <div className="absolute inset-0 lg:hidden -z-0">
        <Image
          src="https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?w=1200&q=85&auto=format&fit=crop"
          alt="Food"
          fill
          priority
          className="object-cover opacity-20"
          sizes="100vw"
        />
      </div>
    </section>
  );
}
