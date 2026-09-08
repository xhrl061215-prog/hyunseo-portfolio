import About from "@/components/About";
import Awards from "@/components/Awards";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <>
      <a
        href="#main"
        className="sr-only rounded-full bg-accent px-4 py-2 text-sm text-paper focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60]"
      >
        Skip to content
      </a>

      <Header />

      <main id="main" className="mx-auto w-full max-w-3xl flex-1 px-6 md:px-8">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Awards />
        <Contact />
      </main>

      <Footer />
    </>
  );
}
