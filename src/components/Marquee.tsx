"use client";

import { motion } from "framer-motion";

const items = [
  "Tacos",
  "Pancakes",
  "Tamales",
  "Chilaquiles",
  "Breakfast",
  "NYC Flavor",
  "Family Recipes",
  "Huevos",
  "Quesadillas",
  "Fresh Daily",
];

const repeated = [...items, ...items, ...items];

export default function Marquee() {
  return (
    <div className="overflow-hidden bg-amber-500 py-4 select-none w-full">
      <motion.div
        className="flex w-max"
        animate={{ x: ["0%", "-33.333%"] }}
        transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
      >
        {repeated.map((item, i) => (
          <span
            key={i}
            className="flex items-center gap-5 px-6 text-black font-bold text-sm uppercase tracking-[0.2em] whitespace-nowrap"
            style={{ fontFamily: "sans-serif" }}
          >
            {item}
            <span className="opacity-30">✦</span>
          </span>
        ))}
      </motion.div>
    </div>
  );
}
