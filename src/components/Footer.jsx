const Footer = () => {
    const year = new Date().getFullYear();
    return (
        <footer className="border-t border-slate-800 py-10 px-6">
            <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                    <p className="text-sm font-semibold text-white" style={{ fontFamily: 'Sora, sans-serif' }}>
                        Jayanth Shree Vishnu
                    </p>
                    <p className="text-xs text-slate-500 mt-0.5">Software Development Engineer · Bengaluru, IN</p>
                </div>
                <div className="flex items-center gap-5">
                    <a href="https://github.com/JayanthVishnu/" target="_blank" rel="noopener noreferrer"
                        className="text-xs text-slate-500 hover:text-slate-300 transition-colors">GitHub</a>
                    <a href="https://www.linkedin.com/in/jayanth-shree-vishnu-a80858259/" target="_blank" rel="noopener noreferrer"
                        className="text-xs text-slate-500 hover:text-slate-300 transition-colors">LinkedIn</a>
                    <a href="mailto:jayanthvishnu56@gmail.com"
                        className="text-xs text-slate-500 hover:text-slate-300 transition-colors">Email</a>
                </div>
                <p className="text-xs text-slate-700">© {year} Jayanth Shree Vishnu</p>
            </div>
        </footer>
    );
};

export default Footer;
