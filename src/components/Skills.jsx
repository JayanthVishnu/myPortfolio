import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

// Import icons
import jsIcon from '../assets/icon-pack/javascript.svg';
import reactIcon from '../assets/icon-pack/react.svg';
import vueIcon from '../assets/icon-pack/vue.svg';
import nodeIcon from '../assets/icon-pack/node.svg';
import javaIcon from '../assets/icon-pack/java.svg';
import mongoIcon from '../assets/icon-pack/mongodb.svg';
import postgresIcon from '../assets/icon-pack/postgresql.svg';
import gitIcon from '../assets/icon-pack/git.svg';
import dockerIcon from '../assets/icon-pack/docker.svg';
import postmanIcon from '../assets/icon-pack/postman.svg';
import linuxIcon from '../assets/icon-pack/linux.svg';
import typescriptIcon from '../assets/icon-pack/typescript.svg';
import redisIcon from '../assets/icon-pack/redis.svg';
import jestIcon from '../assets/icon-pack/jest.svg';
import expressIcon from '../assets/icon-pack/express.svg';
import rustIcon from '../assets/icon-pack/rust.svg';
import pythonIcon from '../assets/icon-pack/python.svg';
import svelteIcon from '../assets/icon-pack/svelte.svg';
import supabaseIcon from '../assets/icon-pack/supabase.svg';
import springbootIcon from '../assets/icon-pack/springboot.svg';
import sqlIcon from '../assets/icon-pack/sql.svg';

const skillsData = [
    {
        category: "LANGUAGES & PARSERS",
        description: "Core programming syntax & schema engines",
        skills: [
            { name: "JavaScript", icon: jsIcon },
            { name: "Java", icon: javaIcon },
            { name: "TypeScript", icon: typescriptIcon },
            { name: "Python", icon: pythonIcon },
            { name: "SQL", icon: sqlIcon },
            { name: "Rust", icon: rustIcon }
        ]
    },
    {
        category: "FRAMEWORKS & ENGINES",
        description: "Application skeletons & state managers",
        skills: [
            { name: "Node.js", icon: nodeIcon },
            { name: "Express.js", icon: expressIcon },
            { name: "React.js", icon: reactIcon },
            { name: "Vue.js", icon: vueIcon },
            { name: "Svelte", icon: svelteIcon },
            { name: "Spring Boot", icon: springbootIcon },
        ]
    },
    {
        category: "DB, PROTOCOLS & DEVOPS",
        description: "Storage architectures, messaging & infrastructure",
        skills: [
            { name: "MongoDB", icon: mongoIcon },
            { name: "PostgreSQL", icon: postgresIcon },
            { name: "Redis", icon: redisIcon },
            { name: "Docker", icon: dockerIcon },
            { name: "Git", icon: gitIcon },
            { name: "Postman", icon: postmanIcon },
            { name: "Jest", icon: jestIcon },
            { name: "Linux", icon: linuxIcon }
        ]
    }
];

const Skills = () => {
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

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, scale: 0.9, y: 10 },
        visible: {
            opacity: 1,
            scale: 1,
            y: 0,
            transition: { duration: 0.4 }
        }
    };

    return (
        <section id="skills" className="py-32 px-6 bg-transparent">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 40 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-black text-white uppercase font-serif tracking-wide mb-4">
                        [skills<span className="text-cyan-400">_matrix</span>]
                    </h2>
                    <div className="h-1 w-20 bg-cyan-400/50 mx-auto shadow-[0_0_10px_rgba(0,229,255,0.5)] mb-4" />
                    <p className="text-lg text-gray-400 max-w-xl mx-auto font-light font-mono">
                        // Diagnostic checklist of technologies deployed in production environments.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {skillsData.map((category, categoryIndex) => (
                        <motion.div
                            key={category.category}
                            initial="hidden"
                            animate={isInView ? "visible" : "hidden"}
                            variants={containerVariants}
                            transition={{ delay: categoryIndex * 0.15 }}
                            onMouseMove={handleMouseMove}
                            className="cyber-card rounded-2xl p-8 border border-cyan-500/15 flex flex-col justify-between"
                        >
                            <div>
                                <h3 className="text-lg font-black mb-1 text-white font-mono border-b border-cyan-500/10 pb-3 tracking-widest text-cyan-400">
                                    {category.category}
                                </h3>
                                <p className="text-xs text-gray-500 font-mono italic mb-8">
                                    {category.description}
                                </p>

                                <div className="grid grid-cols-3 gap-y-8 gap-x-4">
                                    {category.skills.map((skill, skillIndex) => (
                                        <motion.div
                                            key={skillIndex}
                                            variants={itemVariants}
                                            className="flex flex-col items-center gap-2.5 group relative z-10"
                                        >
                                            <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-cyan-500/5 group-hover:bg-cyan-500/20 transition-all duration-300 p-2.5 border border-cyan-500/10 group-hover:border-cyan-400/50 shadow-md group-hover:shadow-[0_0_15px_rgba(0,229,255,0.3)]">
                                                <img
                                                    src={skill.icon}
                                                    alt={skill.name}
                                                    className="w-full h-full object-contain opacity-70 group-hover:opacity-100 transition-opacity"
                                                />
                                            </div>
                                            <span className="text-[10px] font-bold text-gray-400 font-mono group-hover:text-cyan-300 transition-colors text-center truncate w-full">
                                                {skill.name}
                                            </span>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>

                            <div className="mt-8 font-mono text-[9px] text-gray-600 border-t border-cyan-500/5 pt-4">
                                STATUS: CALIBRATED // ACTIVE
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
