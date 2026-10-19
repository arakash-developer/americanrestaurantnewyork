"use client";

import { motion } from "framer-motion";
import { Clock } from "lucide-react";

const days = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

const today = new Date().toLocaleDateString("en-US", { weekday: "long" });

export default function Hours() {
  return (
    <section id="hours" className="py-28 bg-zinc-950">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-amber-400 text-xs uppercase tracking-[0.3em] mb-4">
            When To Visit
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Hours of Operation
          </h2>
          <p className="text-gray-500">We&apos;re open every day of the week — come hungry.</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="bg-zinc-900 border border-white/5 rounded-3xl overflow-hidden"
        >
          {/* Banner */}
          <div className="bg-amber-500 px-8 py-5 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Clock className="w-5 h-5 text-black" />
              <span className="font-bold text-black uppercase tracking-wider text-sm">
                Open Today
              </span>
            </div>
            <span className="font-bold text-black text-lg">9:00 AM – 10:00 PM</span>
          </div>

          {/* Day list */}
          <div className="divide-y divide-white/5">
            {days.map((day, i) => {
              const isToday = day === today;
              return (
                <motion.div
                  key={day}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.05 * i }}
                  className={`flex items-center justify-between px-8 py-5 transition-colors ${
                    isToday ? "bg-amber-500/5" : "hover:bg-white/2"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    {isToday && (
                      <span className="w-2 h-2 bg-amber-400 rounded-full animate-pulse" />
                    )}
                    <span
                      className={`font-semibold ${
                        isToday ? "text-amber-400" : "text-gray-300"
                      }`}
                    >
                      {day}
                    </span>
                    {isToday && (
                      <span className="text-xs text-amber-400/70 uppercase tracking-wider">
                        Today
                      </span>
                    )}
                  </div>
                  <span
                    className={`text-sm ${
                      isToday ? "text-amber-300 font-bold" : "text-gray-500"
                    }`}
                  >
                    9:00 AM – 10:00 PM
                  </span>
                </motion.div>
              );
            })}
          </div>

          {/* Footer note */}
          <div className="px-8 py-5 border-t border-white/5 text-center">
            <p className="text-gray-500 text-sm">
              Dine-in · Takeout · Curbside Pickup · Delivery
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
