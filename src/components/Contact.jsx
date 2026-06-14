import { motion } from 'framer-motion';

const Contact = () => {
    const handleMouseMove = (e) => {
        const card = e.currentTarget;
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        card.style.setProperty('--mouse-x', `${x}px`);
        card.style.setProperty('--mouse-y', `${y}px`);
    };

    return (
        <section id="contact" className="py-32 px-6 bg-transparent">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-black text-white uppercase font-serif tracking-wide mb-4">
                        [comms<span className="text-cyan-400">_uplink</span>]
                    </h2>
                    <div className="h-1 w-20 bg-cyan-400/50 mx-auto shadow-[0_0_10px_rgba(0,229,255,0.5)] mb-4" />
                    <p className="text-lg text-gray-400 max-w-xl mx-auto font-light font-mono">
                        // Secure transmission portal. Establish direct telemetry channel with SDE-1 node.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch font-mono">
                    {/* Left: Contact Info (Uplink Details) */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        onMouseMove={handleMouseMove}
                        className="cyber-card p-8 md:p-10 rounded-2xl border border-cyan-500/15 flex flex-col justify-between cyber-corners"
                    >
                        <div className="space-y-8">
                            <div className="flex items-center justify-between border-b border-cyan-500/10 pb-4">
                                <span className="text-xs text-gray-500">[TRANSMISSION_NODES]</span>
                                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                            </div>

                            <div className="space-y-6">
                                {/* Email */}
                                <div className="flex items-start gap-4 group">
                                    <div className="w-12 h-12 rounded-xl bg-cyan-500/5 flex items-center justify-center text-cyan-400 border border-cyan-500/15 group-hover:border-cyan-400 group-hover:shadow-[0_0_10px_rgba(0,229,255,0.2)] transition-all">
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="text-[10px] text-gray-500 uppercase tracking-widest">TRANSMIT_TO</p>
                                        <a href="mailto:jayanthvishnu56@gmail.com" className="text-sm md:text-base text-gray-200 hover:text-cyan-300 transition-colors">
                                            jayanthvishnu56@gmail.com
                                        </a>
                                    </div>
                                </div>

                                {/* Phone */}
                                <div className="flex items-start gap-4 group">
                                    <div className="w-12 h-12 rounded-xl bg-cyan-500/5 flex items-center justify-center text-cyan-400 border border-cyan-500/15 group-hover:border-cyan-400 group-hover:shadow-[0_0_10px_rgba(0,229,255,0.2)] transition-all">
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="text-[10px] text-gray-500 uppercase tracking-widest">DIAL_NODE</p>
                                        <a href="tel:+918618343931" className="text-sm md:text-base text-gray-200 hover:text-cyan-300 transition-colors">
                                            +91 8618343931
                                        </a>
                                    </div>
                                </div>

                                {/* Location */}
                                <div className="flex items-start gap-4 group">
                                    <div className="w-12 h-12 rounded-xl bg-cyan-500/5 flex items-center justify-center text-cyan-400 border border-cyan-500/15 group-hover:border-cyan-400 group-hover:shadow-[0_0_10px_rgba(0,229,255,0.2)] transition-all">
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="text-[10px] text-gray-500 uppercase tracking-widest">LOCATION_GPS</p>
                                        <p className="text-sm md:text-base text-gray-200">
                                            Bengaluru, Karnataka, India
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="mt-8 p-3 bg-cyan-500/5 border border-cyan-500/10 rounded-lg text-[10px] text-gray-500">
                            * Telemetry routing encrypted. Active connection paths calibrated under TLS standards.
                        </div>
                    </motion.div>

                    {/* Right: Contact Form */}
                    <motion.form
                        action="https://formspree.io/f/mbjnnywv"
                        method="POST"
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        onMouseMove={handleMouseMove}
                        className="cyber-card p-8 md:p-10 rounded-2xl border border-cyan-500/15 flex flex-col justify-between"
                    >
                        <div className="space-y-6 w-full">
                            <div className="flex items-center justify-between border-b border-cyan-500/10 pb-4">
                                <span className="text-xs text-gray-500">[UPLINK_TRANSMITTER]</span>
                                <span className="text-cyan-400 font-bold animate-pulse text-[10px]">READY_TO_TRANSMIT</span>
                            </div>

                            <div className="space-y-4 text-xs">
                                <div>
                                    <label htmlFor="name" className="block text-gray-500 mb-1.5 uppercase font-bold tracking-wider">NAME</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        required
                                        className="w-full bg-black/50 border border-cyan-500/15 rounded-lg px-4 py-3 text-gray-200 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 focus:shadow-[0_0_10px_rgba(0,229,255,0.1)] transition-all font-mono"
                                        placeholder="INPUT_SENDER_NAME"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-gray-500 mb-1.5 uppercase font-bold tracking-wider">EMAIL</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        required
                                        className="w-full bg-black/50 border border-cyan-500/15 rounded-lg px-4 py-3 text-gray-200 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 focus:shadow-[0_0_10px_rgba(0,229,255,0.1)] transition-all font-mono"
                                        placeholder="SENDER_MAIL_ADDRESS"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="message" className="block text-gray-500 mb-1.5 uppercase font-bold tracking-wider">MESSAGE_DATA</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        required
                                        rows="4"
                                        className="w-full bg-black/50 border border-cyan-500/15 rounded-lg px-4 py-3 text-gray-200 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 focus:shadow-[0_0_10px_rgba(0,229,255,0.1)] transition-all resize-none font-mono"
                                        placeholder="COMPILE_MESSAGE_PAYLOAD_HERE..."
                                    ></textarea>
                                </div>
                            </div>
                        </div>

                        <button
                            type="submit"
                            className="mt-6 w-full bg-cyan-500 text-black font-black py-3 px-6 rounded-lg transition-all duration-300 hover:bg-cyan-400 hover:shadow-[0_0_20px_rgba(0,229,255,0.4)] hover:-translate-y-0.5 text-center uppercase tracking-widest text-sm"
                        >
                            EXECUTE_UPLINK
                        </button>
                    </motion.form>
                </div>
            </div>
        </section >
    );
};

export default Contact;
