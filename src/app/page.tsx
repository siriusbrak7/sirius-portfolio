import Hero from "./sections/Hero";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Blog from "./sections/Blog";
import Contact from "./sections/Contact";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <Projects />
      <Blog />
      <Contact />
      <Footer />
    </main>
  );
}
