import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const About = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section id="about" className="py-32 px-6 bg-transparent">
            <div className="max-w-5xl mx-auto">
                <motion.div
                    ref={ref}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    variants={{
                        hidden: { opacity: 0 },
                        visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
                    }}
                >
                    <motion.h2
                        variants={{
                            hidden: { opacity: 0, y: 30 },
                            visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
                        }}
                        className="text-4xl md:text-5xl font-bold text-white mb-8 tracking-tight font-serif"
                    >
                        Passionate about building
                        <br />
                        <span className="gradient-text">scalable solutions.</span>
                    </motion.h2>

                    <div className="space-y-6 text-lg md:text-xl text-gray-300 leading-relaxed font-light">
                        <motion.p variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
                            I'm a Software Developer based in Bengaluru with 1 year of professional experience
                            specializing in full-stack development. My expertise spans across modern web technologies,
                            with a strong focus on building robust and scalable applications using MERN and MEVN stacks.
                        </motion.p>

                        <motion.p variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
                            What sets me apart is my deep understanding of both frontend and backend ecosystems.
                            I excel in creating seamless user experiences while architecting powerful backend solutions
                            with RESTful APIs, WebSocket implementations for real-time features, and advanced database
                            operations including MongoDB ChangeStream for reactive data handling.
                        </motion.p>

                        <motion.p variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
                            My approach combines technical precision with practical problem-solving. Whether it's
                            optimizing database queries, implementing real-time communication, or crafting intuitive
                            user interfaces, I bring end-to-end ownership and a commitment to delivering high-quality solutions.
                        </motion.p>
                    </div>

                    <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
                        {[
                            "Full-stack ownership from frontend to backend",
                            "Real-time features with WebSocket & ChangeStream",
                            "Clean, maintainable code that scales",
                            "Continuous learning and skill enhancement"
                        ].map((principle, index) => (
                            <motion.div
                                key={index}
                                variants={{
                                    hidden: { opacity: 0, x: -20 },
                                    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } }
                                }}
                                className="flex items-start gap-3"
                            >
                                <div className="w-2 h-2 rounded-full mt-2.5 flex-shrink-0 bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.8)]" />
                                <p className="text-gray-200 font-medium">{principle}</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
