const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-transparent text-white py-12 border-t border-gray-800">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="mb-8 md:mb-0 text-center md:text-left">
                        <h3 className="text-2xl font-bold mb-2 font-serif"><span className="gradient-text">Jayanth Shree Vishnu</span></h3>
                        <p className="text-gray-200 font-light">Software Developer • Bengaluru</p>
                    </div>

                    <div className="flex gap-6">
                        <a href="https://github.com/JayanthVishnu/" target="_blank" rel="noopener noreferrer" className="text-gray-200 hover:text-blue-400 transition-colors duration-300">
                            GitHub
                        </a>
                        <a href="https://www.linkedin.com/in/jayanth-shree-vishnu-a80858259/" target="_blank" rel="noopener noreferrer" className="text-gray-200 hover:text-blue-400 transition-colors duration-300">
                            LinkedIn
                        </a>
                        <a href="mailto:jayanthvishnu56@gmail.com" className="text-gray-200 hover:text-blue-400 transition-colors duration-300">
                            Email
                        </a>
                    </div>
                </div>

                <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400 text-sm font-light">
                    <p>&copy; {currentYear} Jayanth Shree Vishnu. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
