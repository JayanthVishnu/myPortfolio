const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-transparent text-white py-12 border-t border-cyan-500/10 font-mono">
            <div className="max-w-6xl mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="text-center md:text-left space-y-1">
                        <h3 className="text-lg font-black tracking-widest"><span className="gradient-text">JSV_UPLINK</span></h3>
                        <p className="text-gray-500 text-xs font-light">
                            Software Engineer (SDE-1) • Bengaluru, IN
                        </p>
                    </div>

                    <div className="flex gap-6 text-xs text-gray-400">
                        <a href="https://github.com/JayanthVishnu/" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors duration-300">
                            [GITHUB]
                        </a>
                        <a href="https://www.linkedin.com/in/jayanth-shree-vishnu-a80858259/" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors duration-300">
                            [LINKEDIN]
                        </a>
                        <a href="mailto:jayanthvishnu56@gmail.com" className="hover:text-cyan-400 transition-colors duration-300">
                            [EMAIL]
                        </a>
                    </div>
                </div>

                <div className="mt-8 pt-6 border-t border-cyan-500/5 text-center text-gray-600 text-[10px] tracking-wider">
                    <p>&copy; {currentYear} Jayanth Shree Vishnu. SYSTEM DIAGNOSTICS DEPLOYMENT REGISTERED.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
