import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const About = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const handleMouseMove = (e) => {
        const card = e.currentTarget;
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        card.style.setProperty('--mouse-x', `${x}px`);
        card.style.setProperty('--mouse-y', `${y}px`);
    };

    const vitalStats = [
        { label: "Dashboard Latency", val: "< 500ms", note: "Panasonic Jhajjar" },
        { label: "Failover Uptime", val: "99.2%", note: "MongoDB Replica Sets" },
        { label: "Arbitration Sync", val: "99.5%", note: "MQTT inter-system sync" },
        { label: "Manual Data Errors", val: "-75%", note: "HMSI Traceability System" },
        { label: "Concurrent Ingestion", val: "10+ streams", note: "Rust async file process" },
        { label: "WMS Visibility", val: "+50%", note: "Panasonic IIC WMS" }
    ];

    return (
        <section id="about" className="py-32 px-6 bg-transparent">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    ref={ref}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    variants={{
                        hidden: { opacity: 0 },
                        visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
                    }}
                    className="space-y-12"
                >
                    <motion.div 
                        variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                        className="text-center md:text-left"
                    >
                        <h2 className="text-3xl md:text-5xl font-black text-white uppercase font-serif tracking-wide mb-4">
                            [about<span className="text-cyan-400">_developer</span>]
                        </h2>
                        <div className="h-1 w-20 bg-cyan-400/50 mx-auto md:mx-0 shadow-[0_0_10px_rgba(0,229,255,0.5)]" />
                    </motion.div>

                    {/* Bento Grid */}
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                        {/* Profile Block (7 cols) */}
                        <motion.div
                            variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}
                            onMouseMove={handleMouseMove}
                            className="cyber-card lg:col-span-7 p-8 rounded-2xl border border-cyan-500/15 flex flex-col justify-between cyber-corners"
                        >
                            <div className="space-y-6">
                                <div className="flex items-center gap-2 font-mono text-xs text-gray-500">
                                    <span>FILE_PATH: /src/profile/core.json</span>
                                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                                </div>
                                <h3 className="text-2xl font-bold text-white font-serif tracking-wide">
                                    PROVEN SDE ARCHITECT
                                </h3>
                                <div className="space-y-4 text-gray-400 font-light leading-relaxed">
                                    <p>
                                        I am a Software Engineer (SDE-1) specializing in engineering highly distributed, 
                                        low-latency backend infrastructures and automated pipelines in enterprise environments.
                                    </p>
                                    <p>
                                        From building custom multi-threaded file parsers in Rust to managing real-time data syncs with WebSockets and MongoDB ChangeStreams, I deliver systems optimized for maximum throughput and reliability.
                                    </p>
                                    <p>
                                        I excel at transforming legacy, manual systems into modern automated configurations, establishing highly available environments, and designing clean RESTful contracts aligned with corporate standards.
                                    </p>
                                </div>
                            </div>
                            
                            {/* Principles */}
                            <div className="mt-8 pt-6 border-t border-cyan-500/10 grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {[
                                    "Distributed & real-time sync architectures",
                                    "Automated failovers & high availability",
                                    "High-throughput async drivers (Rust/Node)",
                                    "Traceability & workflow automation"
                                ].map((p, i) => (
                                    <div key={i} className="flex items-center gap-2 text-xs font-mono text-cyan-300">
                                        <span className="text-cyan-400 font-bold">&gt; </span>
                                        {p}
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        {/* Vital Diagnostic Stats Block (5 cols) */}
                        <motion.div
                            variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}
                            onMouseMove={handleMouseMove}
                            className="cyber-card lg:col-span-5 p-8 rounded-2xl border border-cyan-500/15 flex flex-col justify-between"
                        >
                            <div className="space-y-6 w-full">
                                <div className="flex items-center justify-between font-mono text-xs text-gray-500 border-b border-cyan-500/10 pb-4">
                                    <span>[SYSTEM_VITAL_DIAGNOSTICS]</span>
                                    <span className="text-emerald-400 animate-pulse font-bold">ONLINE</span>
                                </div>
                                
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
                                    {vitalStats.map((stat, i) => (
                                        <div key={i} className="space-y-1 group">
                                            <span className="text-gray-500 font-mono text-[10px] uppercase block tracking-wider group-hover:text-cyan-300 transition-colors">
                                                {stat.label}
                                            </span>
                                            <div className="text-2xl font-black text-white font-mono tracking-tight font-serif">
                                                {stat.val}
                                            </div>
                                            <span className="text-gray-400 font-mono text-[9px] block italic leading-tight">
                                                {stat.note}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            
                            <div className="mt-8 p-3 bg-cyan-500/5 border border-cyan-500/10 rounded-lg font-mono text-[10px] text-gray-500">
                                <span className="text-cyan-400 block font-bold">&gt; MEMORY DUMP: APPROVED</span>
                                System status: Nominal. Metrics obtained from production environments in live deployment.
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
