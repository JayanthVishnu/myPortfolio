import { useState, useEffect } from 'react';
import resumePdf from '../assets/projects/Resume.pdf';
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState('hero');
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
            const sections = ['hero', 'about', 'skills', 'experience', 'projects', 'contact'];
            for (const section of sections) {
                const el = document.getElementById(section);
                if (el) {
                    const rect = el.getBoundingClientRect();
                    if (rect.top <= 150 && rect.bottom >= 150) {
                        setActiveSection(section);
                        break;
                    }
                }
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'About', href: '#about' },
        { name: 'Skills', href: '#skills' },
        { name: 'Experience', href: '#experience' },
        { name: 'Projects', href: '#projects' },
        { name: 'Contact', href: '#contact' },
    ];

    const handleNavClick = (e, href) => {
        e.preventDefault();
        if (href === '#hero') {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
            document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
        }
        setIsMobileMenuOpen(false);
    };

    return (
        <>
            <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
                isScrolled
                    ? 'py-3 bg-[#080c16]/90 backdrop-blur-xl border-b border-indigo-500/10 shadow-[0_1px_30px_rgba(0,0,0,0.4)]'
                    : 'py-5 bg-transparent'
            }`}>
                <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
                    {/* Logo */}
                    <a
                        href="#hero"
                        onClick={(e) => handleNavClick(e, '#hero')}
                        className="flex items-center gap-2 group cursor-pointer"
                    >
                        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center shadow-[0_0_12px_rgba(99,102,241,0.4)] group-hover:shadow-[0_0_18px_rgba(99,102,241,0.6)] transition-shadow">
                            <span className="text-white font-bold text-sm" style={{ fontFamily: 'Sora, sans-serif' }}>J</span>
                        </div>
                        <span className="text-white font-semibold text-sm tracking-tight" style={{ fontFamily: 'Sora, sans-serif' }}>
                            Jayanth<span className="text-indigo-400"> Vishnu</span>
                        </span>
                    </a>

                    {/* Desktop Links */}
                    <div className="hidden md:flex items-center gap-1">
                        {navLinks.map((link) => {
                            const isActive = activeSection === link.href.substring(1);
                            return (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    onClick={(e) => handleNavClick(e, link.href)}
                                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                                        isActive
                                            ? 'text-white bg-indigo-500/15 border border-indigo-500/25'
                                            : 'text-slate-400 hover:text-slate-200 hover:bg-white/5'
                                    }`}
                                >
                                    {link.name}
                                </a>
                            );
                        })}
                        <a
                            href={resumePdf}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="ml-3 btn-primary text-sm py-2 px-4"
                        >
                            Resume ↗
                        </a>
                    </div>

                    {/* Mobile Toggle */}
                    <button
                        className="md:hidden p-2 text-slate-400 hover:text-white transition-colors"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            {isMobileMenuOpen
                                ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            }
                        </svg>
                    </button>
                </div>

                {/* Mobile Menu */}
                <AnimatePresence>
                    {isMobileMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="md:hidden bg-[#080c16]/95 backdrop-blur-xl border-b border-indigo-500/10 overflow-hidden"
                        >
                            <div className="flex flex-col p-4 gap-1">
                                {navLinks.map((link) => (
                                    <a
                                        key={link.name}
                                        href={link.href}
                                        onClick={(e) => handleNavClick(e, link.href)}
                                        className={`px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                                            activeSection === link.href.substring(1)
                                                ? 'text-white bg-indigo-500/15'
                                                : 'text-slate-400 hover:text-white hover:bg-white/5'
                                        }`}
                                    >
                                        {link.name}
                                    </a>
                                ))}
                                <a
                                    href={resumePdf}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="mt-2 btn-primary text-sm text-center"
                                >
                                    Resume ↗
                                </a>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </nav>

            {/* Scroll Progress Bar */}
            <motion.div
                className="fixed top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-indigo-500 to-violet-500 origin-left z-[60]"
                style={{ scaleX }}
            />
        </>
    );
};

export default Navbar;
