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

const groups = [
    {
        label: 'Languages',
        skills: [
            { name: 'JavaScript', icon: jsIcon },
            { name: 'TypeScript', icon: typescriptIcon },
            { name: 'Java', icon: javaIcon },
            { name: 'Rust', icon: rustIcon },
            { name: 'Python', icon: pythonIcon },
            { name: 'SQL', icon: sqlIcon },
        ]
    },
    {
        label: 'Frameworks & Runtime',
        skills: [
            { name: 'Node.js', icon: nodeIcon },
            { name: 'Express.js', icon: expressIcon },
            { name: 'Spring Boot', icon: springbootIcon },
            { name: 'React', icon: reactIcon },
            { name: 'Vue.js', icon: vueIcon },
            { name: 'Svelte', icon: svelteIcon },
        ]
    },
    {
        label: 'Databases & Infrastructure',
        skills: [
            { name: 'MongoDB', icon: mongoIcon },
            { name: 'PostgreSQL', icon: postgresIcon },
            { name: 'Supabase', icon: supabaseIcon },
            { name: 'Redis', icon: redisIcon },
            { name: 'Docker', icon: dockerIcon },
            { name: 'Git', icon: gitIcon },
            { name: 'Linux', icon: linuxIcon },
            { name: 'Jest', icon: jestIcon },
        ]
    },
];

const alsoUsed = ['WebSockets', 'MQTT', 'WAMP', 'TCP/IP', 'REST APIs', 'RFID', 'QR', 'Tauri 2', 'PocketBase', 'NSSM', 'Inno Setup', 'Kafka', 'RabbitMQ'];

const Skills = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-80px' });

    return (
        <section id="skills" className="py-28 px-6">
            <div className="max-w-5xl mx-auto" ref={ref}>
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5 }}
                    className="mb-14"
                >
                    <span className="section-label">Technical skills</span>
                    <h2 className="text-3xl md:text-4xl font-bold text-white mt-2">
                        Technologies I work with
                    </h2>
                </motion.div>

                {/* Skill groups */}
                <div className="space-y-10">
                    {groups.map((group, gi) => (
                        <motion.div
                            key={group.label}
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.5, delay: gi * 0.12 }}
                        >
                            <h3 className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-4">
                                {group.label}
                            </h3>
                            <div className="flex flex-wrap gap-3">
                                {group.skills.map((skill) => (
                                    <div
                                        key={skill.name}
                                        className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl glass-card border border-slate-700/40 hover:border-indigo-500/40 transition-all cursor-default group"
                                    >
                                        <div className="card-content flex items-center gap-2.5">
                                            <img
                                                src={skill.icon}
                                                alt={skill.name}
                                                className="w-5 h-5 object-contain opacity-80 group-hover:opacity-100 transition-opacity"
                                            />
                                            <span className="text-sm font-medium text-slate-300 group-hover:text-slate-100 transition-colors">
                                                {skill.name}
                                            </span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Also used */}
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.45 }}
                    className="mt-10 pt-8 border-t border-slate-800"
                >
                    <h3 className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-4">
                        Also used — protocols, tools & exploratory
                    </h3>
                    <div className="flex flex-wrap gap-2">
                        {alsoUsed.map((item) => (
                            <span key={item} className="tag-chip">{item}</span>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Skills;
