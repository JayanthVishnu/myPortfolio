import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import './index.css';

function App() {
  return (
    <main className="relative bg-[#080c16] min-h-screen">
      {/* Ambient background glow blobs */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 0 }}>
        <div className="absolute top-0 left-1/3 w-[700px] h-[500px] bg-indigo-700/5 rounded-full blur-[150px]" />
        <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-violet-700/4 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-indigo-900/6 rounded-full blur-[100px]" />
      </div>
      <div className="relative" style={{ zIndex: 1 }}>
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}

export default App;
