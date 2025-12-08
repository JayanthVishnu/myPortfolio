import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const Experience = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const experiences = [
        {
            company: "Cymbeline Innovation Pvt Ltd",
            role: "Software Developer Engineer",
            period: "1 Year",
            description: "Full-stack development using MERN and MEVN stacks. Managed complete project lifecycle from conception to deployment, including direct client communication and requirement gathering. Took full ownership of end-to-end development, ensuring high-quality deliverables and client satisfaction."
        }
    ];

    return (
        <section id="experience" className="py-32 px-6 bg-transparent">
            <div className="max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white font-serif">
                        <span className="gradient-text">Experience</span>
                    </h2>
                    <p className="text-xl text-gray-400 font-light">
                        My professional journey
                    </p>
                </motion.div>

                <div className="relative border-l-2 border-gray-800 ml-4 md:ml-0 space-y-12">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="relative pl-8 md:pl-12"
                        >
                            {/* Timeline dot */}
                            <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.8)] ring-4 ring-black" />

                            <div className="glass-dark p-8 rounded-2xl transition-all duration-300 hover:bg-white/5 hover:border-blue-500/30">
                                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
                                    <h3 className="text-2xl font-bold text-white font-serif">{exp.role}</h3>
                                    <span className="text-blue-400 font-medium px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-sm">
                                        {exp.period}
                                    </span>
                                </div>
                                <div className="text-lg text-gray-300 mb-4 font-medium">{exp.company}</div>
                                <p className="text-gray-400 leading-relaxed font-light">
                                    {exp.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
