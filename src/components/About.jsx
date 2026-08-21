import { motion } from 'framer-motion';
import { useRef } from 'react';
import { useInView } from 'framer-motion';

const About = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });

    const highlights = [
        { icon: '⚡', title: 'Real-time systems', desc: 'WebSocket + MongoDB Change Streams, sub-500ms dashboards on factory floors' },
        { icon: '🦀', title: 'Rust for performance', desc: 'High-throughput async file processors handling 10+ concurrent machine streams' },
        { icon: '🖥', title: 'Desktop apps', desc: 'Tauri 2 + Svelte 5 desktop app for DENSO — RFID, QR, packaged as Windows installer' },
        { icon: '🏭', title: 'End-to-end ownership', desc: 'From client spec to data model to backend to keeping it stable in production' },
    ];

    const fadeUp = {
        hidden: { opacity: 0, y: 24 },
        visible: (i) => ({ opacity: 1, y: 0, transition: { duration: 0.55, delay: i * 0.12 } }),
    };

    return (
        <section id="about" className="py-28 px-6">
            <div className="max-w-5xl mx-auto" ref={ref}>
                {/* Section header */}
                <motion.div
                    custom={0}
                    initial="hidden"
                    animate={isInView ? 'visible' : 'hidden'}
                    variants={fadeUp}
                    className="mb-14"
                >
                    <span className="section-label">About me</span>
                    <h2 className="text-3xl md:text-4xl font-bold text-white mt-2">
                        Shipping backend systems<br className="hidden sm:block" /> that actually run in production
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
                    {/* Left: Bio */}
                    <motion.div
                        custom={1}
                        initial="hidden"
                        animate={isInView ? 'visible' : 'hidden'}
                        variants={fadeUp}
                        className="lg:col-span-3 space-y-5"
                    >
                        <p className="text-slate-300 leading-relaxed text-[0.97rem]">
                            I'm a backend-focused Software Development Engineer at{' '}
                            <span className="text-indigo-300 font-medium">Cymbeline Innovation</span>, where I've spent
                            the past year building production systems for manufacturing clients — real-time plant dashboards,
                            traceability platforms, warehouse management backends, and machine-integration services.
                        </p>
                        <p className="text-slate-400 leading-relaxed text-[0.97rem]">
                            These aren't demo projects. They run on actual factory floors at companies like Panasonic,
                            HMSI, DENSO, and Foxconn. I own features end-to-end: talking to the client, designing the
                            data model, writing the backend, and making sure it doesn't fall over at 2 AM.
                        </p>
                        <p className="text-slate-400 leading-relaxed text-[0.97rem]">
                            My primary stack is <span className="text-slate-200 font-medium">Node.js, Java, and Rust</span>,
                            with <span className="text-slate-200 font-medium">MongoDB</span> as the usual database of choice.
                            I've also built a full desktop application (Tauri 2 + Svelte 5) for shop-floor inventory tracking,
                            complete with RFID/QR hardware integration and a self-deployable Windows installer.
                        </p>

                        {/* Quick facts */}
                        <div className="pt-4 grid grid-cols-2 gap-3">
                            {[
                                ['Company', 'Cymbeline Innovation Pvt Ltd'],
                                ['Role', 'SDE I · Mar 2025 – Present'],
                                ['Location', 'Bengaluru, Karnataka'],
                                ['Education', 'B.E. CS · CIT Tumkur, 2024'],
                            ].map(([k, v]) => (
                                <div key={k} className="space-y-0.5">
                                    <span className="text-xs text-slate-600 font-medium uppercase tracking-wider">{k}</span>
                                    <p className="text-sm text-slate-300">{v}</p>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Right: Highlights */}
                    <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
                        {highlights.map((h, i) => (
                            <motion.div
                                key={i}
                                custom={i + 2}
                                initial="hidden"
                                animate={isInView ? 'visible' : 'hidden'}
                                variants={fadeUp}
                                className="glass-card p-5"
                            >
                                <div className="card-content flex gap-3">
                                    <span className="text-2xl leading-none mt-0.5">{h.icon}</span>
                                    <div>
                                        <h4 className="text-sm font-semibold text-slate-200 mb-1">{h.title}</h4>
                                        <p className="text-xs text-slate-500 leading-relaxed">{h.desc}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
