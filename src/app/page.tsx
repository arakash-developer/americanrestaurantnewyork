import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import About from "@/components/About";
import Specials from "@/components/Specials";
import Menu from "@/components/Menu";
import Gallery from "@/components/Gallery";
import Hours from "@/components/Hours";
import Location from "@/components/Location";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <About />
        <Specials />
        <Menu />
        <Gallery />
        <Hours />
        <Location />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
