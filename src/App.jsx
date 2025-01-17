import { useRef, useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { AboutSection } from './components/AboutSection';
import { SkillSection } from './components/SkillSection';
import { ProjectSection } from './components/ProjectSection';
import { ContactSection } from './components/ContactSection';

function App() {
  const navLinksRef = useRef(null);
  const aboutSectionRef = useRef(null);
  const [menuOpen, setMenuOpen] = useState(false);

  const onToggleMenu = () => {
    setMenuOpen((prev) => !prev);

    if (!menuOpen) {
      aboutSectionRef.current.style.marginTop = '13rem';
    } else {
      aboutSectionRef.current.style.marginTop = '0';
    }
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        aboutSectionRef.current.style.marginTop = '0';
        setMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      <Header
        navLinksRef={navLinksRef}
        onToggleMenu={onToggleMenu}
        menuOpen={menuOpen}
      />
      <main className="max-w-5xl mx-auto p-6 space-y-12 text-center">
        <AboutSection aboutSectionRef={aboutSectionRef} />
        <SkillSection />
        <ProjectSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}

export default App;
