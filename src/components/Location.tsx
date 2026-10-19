"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Clock, Navigation } from "lucide-react";

export default function Location() {
  return (
    <section id="location" className="py-28 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-amber-400 text-xs uppercase tracking-[0.3em] mb-4">
            Find Us
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Our Location
          </h2>
          <p className="text-gray-500 max-w-md mx-auto">
            Located on Amsterdam Avenue in the Upper West Side — easy to reach,
            impossible to forget.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10 items-stretch">
          {/* Info cards */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex flex-col gap-4"
          >
            {[
              {
                icon: MapPin,
                title: "Address",
                lines: ["1467 Amsterdam Ave", "New York, NY 10027"],
              },
              {
                icon: Phone,
                title: "Phone",
                lines: ["(646) 449-8686"],
                href: "tel:16464498686",
              },
              {
                icon: Clock,
                title: "Hours",
                lines: ["Monday – Sunday", "9:00 AM – 10:00 PM"],
              },
            ].map(({ icon: Icon, title, lines, href }) => (
              <div
                key={title}
                className="bg-zinc-900 border border-white/5 hover:border-amber-500/30 rounded-2xl p-6 flex items-start gap-5 group transition-all duration-300"
              >
                <div className="bg-amber-500/10 border border-amber-500/20 p-3 rounded-xl shrink-0">
                  <Icon className="w-5 h-5 text-amber-400" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-gray-600 mb-1">
                    {title}
                  </p>
                  {lines.map((line, i) =>
                    href && i === 0 ? (
                      <a
                        key={i}
                        href={href}
                        className="block text-white font-semibold text-lg hover:text-amber-400 transition-colors"
                      >
                        {line}
                      </a>
                    ) : (
                      <p
                        key={i}
                        className={i === 0 ? "text-white font-semibold text-lg" : "text-gray-500"}
                      >
                        {line}
                      </p>
                    )
                  )}
                </div>
              </div>
            ))}

            <a
              href="https://www.google.com/maps/search/?api=1&query=1467+Amsterdam+Ave+New+York+NY+10027"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 bg-amber-500 hover:bg-amber-400 text-black font-bold text-sm uppercase tracking-widest px-6 py-4 rounded-2xl transition-all duration-300 hover:shadow-lg hover:shadow-amber-500/30 mt-2"
            >
              <Navigation className="w-4 h-4" />
              Get Directions
            </a>
          </motion.div>

          {/* Map embed */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="rounded-3xl overflow-hidden border border-white/5 min-h-[400px]"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3019.7430584027694!2d-73.96052!3d40.81174!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2f64d8f6c4a3d%3A0x0!2s1467+Amsterdam+Ave%2C+New+York%2C+NY+10027!5e0!3m2!1sen!2sus!4v1610000000000!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "400px" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="American Restaurant Location"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
