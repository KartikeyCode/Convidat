import Image from "next/image";
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import About from "./components/about";
import Stats from "./components/stats";
import Footer from "./components/footer";
export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar/>
      <Hero/>
      <About/>
      <Stats/>
      <Footer/>
    </div>
  );
}
