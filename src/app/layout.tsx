import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "American Restaurant | 1467 Amsterdam Ave, New York NY",
  description:
    "Family-owned restaurant in New York, NY serving classic American breakfast favorites, tacos, tamales, chilaquiles, and authentic Mexican comfort food. Open daily 9am–10pm.",
  keywords:
    "American restaurant, New York, breakfast, tacos, tamales, chilaquiles, Mexican food, family-owned, Upper West Side",
  openGraph: {
    title: "American Restaurant – New York, NY",
    description:
      "Classic American breakfast & authentic Mexican comfort food. 1467 Amsterdam Ave, NY. Open daily 9am–10pm.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased">{children}</body>
    </html>
  );
}
