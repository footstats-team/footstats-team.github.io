import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Features from "./components/Features";
import PassingTable from "./components/PassingChart";
import Highlights from "./components/Highlights";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Highlights />
        <PassingTable />
        <About />
        <Features />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
