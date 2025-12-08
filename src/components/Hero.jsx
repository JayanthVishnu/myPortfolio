import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Hero = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"]
    });

    const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
    const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);

    return (
        <section
            ref={containerRef}
            id="hero"
            className="relative min-h-screen flex items-center justify-center overflow-hidden"
        >
            {/* Content */}
            <motion.div
                style={{ opacity, scale }}
                className="relative z-10 max-w-7xl mx-auto px-6 text-center"
            >
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                >
                    <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight font-serif">
                        Hi, I'm Jayanth Shree Vishnu
                        <br />
                        <span className="gradient-text inline-block mt-2">
                            Software Developer
                        </span>
                    </h1>
                </motion.div>

                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                    className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed font-light"
                >
                    Full-stack developer specializing in MERN & MEVN stacks, building scalable web applications
                    with expertise in real-time features, APIs, and modern database solutions.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                >
                    <a
                        href="#contact"
                        className="px-8 py-4 bg-blue-600 text-white rounded-full font-medium text-lg transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(37,99,235,0.5)] hover:bg-blue-500"
                    >
                        Get in touch
                    </a>
                    <a
                        href="#projects"
                        className="px-8 py-4 border border-blue-500 text-blue-400 rounded-full font-medium text-lg transition-all duration-300 hover:bg-blue-500/10 hover:shadow-[0_0_15px_rgba(37,99,235,0.3)]"
                    >
                        View my work
                    </a>
                </motion.div>

                {/* Scroll indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 1.2 }}
                    className="mt-16 flex justify-center"
                >
                    <div className="w-6 h-10 border-2 border-gray-500 rounded-full flex justify-center">
                        <motion.div
                            animate={{ y: [0, 12, 0] }}
                            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                            className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2"
                        />
                    </div>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default Hero;
