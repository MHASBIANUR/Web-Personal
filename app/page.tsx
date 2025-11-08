import Hero from "@/components/Hero";
import About from "@/components/About";
import Works from "@/components/Works";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <main className="flex flex-col items-center justify-center">
      <Hero />
      <About />
      <Works />
      <Contact />
      <Footer />
    </main>
  );
}
