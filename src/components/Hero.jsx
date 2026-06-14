import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Terminal from './Terminal';

const Hero = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"]
    });

    const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
    const scale = useTransform(scrollYProgress, [0, 1], [1, 0.95]);

    return (
        <section
            ref={containerRef}
            id="hero"
            className="relative min-h-screen flex items-center justify-center pt-24 pb-16 px-6 overflow-hidden"
        >
            {/* Ambient Background Grid lines */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#00e5ff05_1px,transparent_1px),linear-gradient(to_bottom,#00e5ff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none -z-5" />

            {/* Layout container */}
            <motion.div
                style={{ opacity, scale }}
                className="relative z-10 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center"
            >
                {/* Left: Branding & Core diagnostics */}
                <div className="lg:col-span-7 text-left space-y-6">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        className="space-y-4"
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs font-mono text-cyan-400 uppercase tracking-widest">
                            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                            DEPLOYED SYSTEM ID: SDE-1
                        </div>
                        
                        <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white leading-tight uppercase font-serif tracking-tight">
                            SYSTEM BOOT:<br />
                            <span className="gradient-text neon-glow-cyan">JAYANTH SHREE VISHNU</span>
                        </h1>
                        
                        <p className="text-gray-400 max-w-xl text-lg font-light leading-relaxed font-mono">
                            // High-performance software engineer designing distributed backend systems, async microservices, and real-time data ingestion pipelines.
                        </p>
                    </motion.div>

                    {/* Quick System Stats */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 0.3 }}
                        className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 rounded-xl bg-cyan-500/5 border border-cyan-500/10 font-mono text-xs text-gray-400"
                    >
                        <div>
                            <span className="text-cyan-400 block font-bold">&gt; LANGS</span>
                            <span>Java, Node, Rust</span>
                        </div>
                        <div>
                            <span className="text-cyan-400 block font-bold">&gt; ARCH</span>
                            <span>Distributed</span>
                        </div>
                        <div>
                            <span className="text-cyan-400 block font-bold">&gt; LOC</span>
                            <span>Bengaluru, IN</span>
                        </div>
                        <div>
                            <span className="text-cyan-400 block font-bold">&gt; COMMS</span>
                            <span className="text-emerald-400 animate-pulse">ACTIVE UPLINK</span>
                        </div>
                    </motion.div>

                    {/* Console Actions */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                        className="flex flex-col sm:flex-row gap-4 font-mono"
                    >
                        <a
                            href="#contact"
                            className="px-6 py-3.5 bg-cyan-500 text-black font-bold text-sm uppercase tracking-wider rounded-lg transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_0_20px_rgba(0,229,255,0.4)] border border-cyan-400 hover:bg-cyan-400 text-center"
                        >
                            ESTABLISH CONTACT
                        </a>
                        <a
                            href="#projects"
                            className="px-6 py-3.5 border border-cyan-500/30 text-cyan-400 font-bold text-sm uppercase tracking-wider rounded-lg transition-all duration-300 hover:bg-cyan-500/10 hover:border-cyan-500 hover:shadow-[0_0_15px_rgba(0,229,255,0.15)] text-center"
                        >
                            INSPECT MODULES
                        </a>
                    </motion.div>
                </div>

                {/* Right: Terminal CLI widget */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95, y: 30 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                    className="lg:col-span-5 w-full"
                >
                    <div className="text-xs font-mono text-gray-500 mb-2 flex items-center justify-between px-2">
                        <span>[LIVE_UPLINK_CONSOLE]</span>
                        <span>v1.0.4-secure</span>
                    </div>
                    <Terminal />
                </motion.div>
            </motion.div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 font-mono text-[10px] text-gray-500 tracking-widest">
                <span>SCROLL TO EXPAND DIAGNOSTICS</span>
                <div className="w-5 h-9 border border-cyan-500/30 rounded-full flex justify-center p-1">
                    <motion.div
                        animate={{ y: [0, 10, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                        className="w-1 h-1.5 bg-cyan-400 rounded-full"
                    />
                </div>
            </div>
        </section>
    );
};

export default Hero;
