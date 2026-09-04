import { Navbar } from "@/layout/Navbar";
import { Hero } from "@/sections/Hero";
import { Contact } from "@/sections/Contact";
import { Projects } from "@/sections/Projects";
import { Footer } from "@/layout/Footer";

function App() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <Contact />
      </main>
       <Footer />
    </div>
  );   
}

export default App;
