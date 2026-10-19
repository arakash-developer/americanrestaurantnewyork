"use client";

import { motion } from "framer-motion";
import { Phone, ExternalLink, Truck, Store, Car } from "lucide-react";

const options = [
  {
    icon: Store,
    title: "Dine In",
    description: "Visit us at 1467 Amsterdam Ave and enjoy your meal in our cozy family-owned restaurant.",
    action: "Get Directions",
    href: "https://www.google.com/maps/search/?api=1&query=1467+Amsterdam+Ave+New+York+NY+10027",
  },
  {
    icon: Truck,
    title: "Delivery",
    description: "Order online and get your favorite dishes delivered right to your door.",
    action: "Order for Delivery",
    href: "https://americanrestaurantnewyork.com/american-restaurant/",
    highlight: true,
  },
  {
    icon: Car,
    title: "Curbside Pickup",
    description: "Call ahead or order online, and we'll have your order ready for curbside pickup.",
    action: "Call to Order",
    href: "tel:16464498686",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-28 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-amber-400 text-xs uppercase tracking-[0.3em] mb-4">
            How To Order
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Come Eat With Us
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            Multiple ways to enjoy American Restaurant. Choose what works best
            for you.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-3 gap-6 mb-20">
          {options.map(({ icon: Icon, title, description, action, href, highlight }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * i }}
              className={`relative rounded-3xl p-8 flex flex-col gap-5 border transition-all duration-300 hover:-translate-y-1 ${
                highlight
                  ? "bg-amber-500/10 border-amber-500/30 hover:border-amber-400/60"
                  : "bg-zinc-900 border-white/5 hover:border-white/20"
              }`}
            >
              {highlight && (
                <span className="absolute top-5 right-5 bg-amber-500 text-black text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full">
                  Recommended
                </span>
              )}
              <div
                className={`w-14 h-14 rounded-2xl flex items-center justify-center ${
                  highlight ? "bg-amber-500/20" : "bg-zinc-800"
                }`}
              >
                <Icon className={`w-6 h-6 ${highlight ? "text-amber-400" : "text-gray-400"}`} />
              </div>
              <div className="flex-1">
                <h3 className="text-white font-bold text-xl mb-2">{title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{description}</p>
              </div>
              <a
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                className={`flex items-center justify-center gap-2 py-3 rounded-xl font-semibold text-sm uppercase tracking-wider transition-all duration-300 ${
                  highlight
                    ? "bg-amber-500 hover:bg-amber-400 text-black"
                    : "border border-white/10 hover:border-white/30 text-gray-300 hover:text-white"
                }`}
              >
                {action}
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </motion.div>
          ))}
        </div>

        {/* Phone CTA banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-amber-900/30 to-amber-700/10 border border-amber-500/20 rounded-3xl p-10 flex flex-col sm:flex-row items-center justify-between gap-6"
        >
          <div>
            <h3 className="text-white font-bold text-2xl mb-2">
              Have Questions? Just Call Us.
            </h3>
            <p className="text-gray-500">
              Our team is happy to help with orders, allergies, and reservations.
            </p>
          </div>
          <a
            href="tel:16464498686"
            className="flex items-center gap-3 bg-amber-500 hover:bg-amber-400 text-black font-bold text-lg px-8 py-4 rounded-2xl transition-all duration-300 hover:shadow-xl hover:shadow-amber-500/30 hover:-translate-y-0.5 whitespace-nowrap"
          >
            <Phone className="w-5 h-5" />
            (646) 449-8686
          </a>
        </motion.div>
      </div>
    </section>
  );
}
