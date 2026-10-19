import { UtensilsCrossed, MapPin, Phone, Clock } from "lucide-react";

export default function Footer() {
  const year = 2026;

  return (
    <footer className="bg-black border-t border-white/5 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <UtensilsCrossed className="w-6 h-6 text-amber-400" />
              <span className="text-white font-bold text-lg tracking-wider uppercase">
                American <span className="text-amber-400">Restaurant</span>
              </span>
            </div>
            <p className="text-gray-500 leading-relaxed text-sm max-w-xs">
              A family-owned restaurant serving classic American breakfast and
              authentic Mexican comfort food in the heart of New York City.
            </p>
            <div className="mt-6">
              <a
                href="https://americanrestaurantnewyork.com/american-restaurant/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-amber-500 hover:bg-amber-400 text-black text-xs font-bold uppercase tracking-widest px-5 py-2.5 rounded-full transition-all duration-300"
              >
                Order Online
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <p className="text-xs uppercase tracking-widest text-gray-600 mb-5">
              Navigate
            </p>
            <ul className="flex flex-col gap-3">
              {[
                ["Home", "#home"],
                ["About", "#about"],
                ["Menu", "#menu"],
                ["Hours", "#hours"],
                ["Location", "#location"],
                ["Contact", "#contact"],
              ].map(([label, href]) => (
                <li key={href}>
                  <a
                    href={href}
                    className="text-gray-500 hover:text-amber-400 text-sm transition-colors"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Info */}
          <div>
            <p className="text-xs uppercase tracking-widest text-gray-600 mb-5">
              Info
            </p>
            <ul className="flex flex-col gap-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span className="text-gray-500 text-sm">
                  1467 Amsterdam Ave
                  <br />
                  New York, NY 10027
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                <a
                  href="tel:16464498686"
                  className="text-gray-500 hover:text-amber-400 text-sm transition-colors"
                >
                  (646) 449-8686
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span className="text-gray-500 text-sm">
                  Daily: 9:00 AM – 10:00 PM
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-600">
          <p>© {year} American Restaurant. All rights reserved.</p>
          <p className="text-xs">1467 Amsterdam Ave · New York, NY 10027</p>
        </div>
      </div>
    </footer>
  );
}
