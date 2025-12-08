import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

// Import icons
import htmlIcon from '../assets/icon-pack/html.svg';
import cssIcon from '../assets/icon-pack/css.svg';
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
import windowsIcon from '../assets/icon-pack/windows.svg';
import typescriptIcon from '../assets/icon-pack/typescript.svg';
import redisIcon from '../assets/icon-pack/redis.svg';
import jestIcon from '../assets/icon-pack/jest.svg';
import expressIcon from '../assets/icon-pack/express.svg';

const skillsData = [
    {
        category: "Frontend",
        skills: [
            { name: "HTML", icon: htmlIcon },
            { name: "CSS", icon: cssIcon },
            { name: "JavaScript", icon: jsIcon },
            { name: "TypeScript", icon: typescriptIcon },
            { name: "React.js", icon: reactIcon },
            { name: "Vue.js", icon: vueIcon }
        ]
    },
    {
        category: "Backend & Database",
        skills: [
            { name: "Node.js", icon: nodeIcon },
            { name: "Express.js", icon: expressIcon },
            { name: "Java", icon: javaIcon },
            { name: "MongoDB", icon: mongoIcon },
            { name: "PostgreSQL", icon: postgresIcon },
            { name: "Redis", icon: redisIcon }
        ]
    },
    {
        category: "Tools & DevOps",
        skills: [
            { name: "Git", icon: gitIcon },
            { name: "Docker", icon: dockerIcon },
            { name: "Postman", icon: postmanIcon },
            { name: "Jest", icon: jestIcon },
            { name: "Linux", icon: linuxIcon },
            { name: "Windows", icon: windowsIcon }
        ]
    }
];

const Skills = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

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
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5 }
        }
    };

    return (
        <section id="skills" className="py-32 px-6 bg-transparent">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 40 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white font-serif">
                        Skills <span className="gradient-text">&</span> Expertise
                    </h2>
                    <p className="text-xl max-w-2xl mx-auto text-gray-400 font-light">
                        A comprehensive toolkit for building exceptional digital experiences
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {skillsData.map((category, categoryIndex) => (
                        <motion.div
                            key={category.category}
                            initial="hidden"
                            animate={isInView ? "visible" : "hidden"}
                            variants={containerVariants}
                            transition={{ delay: categoryIndex * 0.2 }}
                            className="glass-dark rounded-2xl p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(59,130,246,0.15)]"
                        >
                            <h3 className="text-xl font-bold mb-8 text-white font-serif border-b pb-2 border-gray-700">
                                {category.category}
                            </h3>
                            <div className="grid grid-cols-3 gap-6">
                                {category.skills.map((skill, skillIndex) => (
                                    <motion.div
                                        key={skillIndex}
                                        variants={itemVariants}
                                        className="flex flex-col items-center gap-3 group"
                                    >
                                        <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-gray-800/50 group-hover:bg-blue-500/20 transition-colors duration-300 p-2.5 border border-gray-700 group-hover:border-blue-500/50 shadow-lg group-hover:shadow-[0_0_15px_rgba(59,130,246,0.3)]">
                                            <img
                                                src={skill.icon}
                                                alt={skill.name}
                                                className="w-full h-full object-contain filter invert opacity-80 group-hover:opacity-100 transition-opacity"
                                            />
                                        </div>
                                        <span className="text-xs font-medium text-gray-400 group-hover:text-blue-300 transition-colors text-center">
                                            {skill.name}
                                        </span>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
