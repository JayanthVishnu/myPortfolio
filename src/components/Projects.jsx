import { motion } from 'framer-motion';

// Import project images
import weatherReactImg from '../assets/projects/weather-react.png';
import pdfAiImg from '../assets/projects/pdf-ai.png';
import landRegistryImg from '../assets/projects/land-registry.png';
import covidBedsImg from '../assets/projects/covid-beds.png';
import weatherAndroidImg from '../assets/projects/weather-android.png';
import hospitalMgmtImg from '../assets/projects/hospital-mgmt.png';

const projects = [
    {
        title: "AI PDF Reader",
        status: "ACTIVE_PROD",
        description: "Built an intelligent document Q&A system converting PDFs to text chunks stored in a vector database, using LLMs (OpenAI/HuggingFace) via Streamlit for context-aware query answering.",
        tags: ["Python", "OpenAI", "HuggingFace", "VectorDB", "Streamlit"],
        image: pdfAiImg,
        demoLink: "https://github.com/JayanthVishnu/muti_pdf_reader_using_AI",
        linkText: "Launch Source"
    },
    {
        title: "Hospital Management",
        status: "STABLE",
        description: "Built full-stack hospital platform covering doctor management, patient records, appointment scheduling, billing, and medical reports using Spring Boot REST APIs and React frontend with MySQL relational data models.",
        tags: ["Spring Boot", "React", "MySQL", "REST APIs"],
        image: hospitalMgmtImg,
        demoLink: "https://github.com/JayanthVishnu/Hospital-Management-System", // Added fallback repository
        linkText: "Launch Source"
    },
    {
        title: "Weather App",
        status: "ACTIVE_WEB",
        description: "Created a responsive weather forecasting app integrated with OpenWeatherAPI for real-time conditions and forecasts.",
        tags: ["React", "Material UI", "OpenWeatherAPI", "REST APIs"],
        image: weatherReactImg,
        demoLink: "https://jayanthvishnu.github.io/weather-app/",
        linkText: "Launch App"
    },
    {
        title: "Land Registry Ledger",
        status: "STANDBY",
        description: "A decentralized land registry system built on the Ethereum blockchain. Implemented smart contracts with Solidity to ensure immutable storage of land ownership data, eliminating fraud and manipulation. Utilized Ganache and Remix IDE for testing.",
        tags: ["Solidity", "Ethereum", "Ganache", "Blockchain"],
        image: landRegistryImg
    },
    {
        title: "COVID-19 Beds Booking",
        status: "STANDBY",
        description: "A web application designed to help patients find and reserve hospital beds during the pandemic. Built with a robust SQL database to manage real-time bed availability and streamline the allocation process for critical patients.",
        tags: ["SQL", "Database", "Web Development", "Healthcare"],
        image: covidBedsImg,
        demoLink: "https://github.com/JayanthVishnu/Covid-19-DBMS-BED-SLOT-BOOKING",
        linkText: "Launch Source"
    },
    {
        title: "Android Weather Client",
        status: "STANDBY",
        description: "A native Android application that delivers real-time weather updates. Leveraged third-party APIs to retrieve accurate weather data and implemented a user-friendly interface for seamless navigation and information display.",
        tags: ["Android", "Java", "APIs", "Mobile Dev"],
        image: weatherAndroidImg
    }
];

const Projects = () => {
    const handleMouseMove = (e) => {
        const card = e.currentTarget;
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        card.style.setProperty('--mouse-x', `${x}px`);
        card.style.setProperty('--mouse-y', `${y}px`);
    };

    return (
        <section id="projects" className="py-32 px-6 bg-transparent">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-black text-white uppercase font-serif tracking-wide mb-4">
                        [featured<span className="text-cyan-400">_modules</span>]
                    </h2>
                    <div className="h-1 w-20 bg-cyan-400/50 mx-auto shadow-[0_0_10px_rgba(0,229,255,0.5)] mb-4" />
                    <p className="text-lg text-gray-400 max-w-xl mx-auto font-light font-mono">
                        // Personal registry modules. Active applications launched directly from terminal channels.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            onMouseMove={handleMouseMove}
                            className="cyber-card rounded-2xl overflow-hidden flex flex-col justify-between group cursor-default border border-cyan-500/15"
                        >
                            <div>
                                {/* Project Image with scanning mask */}
                                <div className="h-44 overflow-hidden relative border-b border-cyan-500/10">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover transition-transform duration-750 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#040408]/90 via-[#040408]/40 to-transparent opacity-80" />
                                    
                                    {/* Scan bar inside image */}
                                    <div className="absolute inset-x-0 h-[2px] bg-cyan-400/30 blur-[1px] animate-scan" />
                                    
                                    {/* Status Indicator */}
                                    <div className="absolute top-4 right-4 font-mono text-[9px] px-2 py-0.5 rounded bg-[#040408]/90 border border-cyan-400/30 text-cyan-300 font-bold uppercase tracking-wider">
                                        {project.status}
                                    </div>
                                </div>

                                <div className="p-6 space-y-4">
                                    <h3 className="text-xl font-bold text-white font-mono tracking-wide group-hover:text-cyan-300 transition-colors">
                                        {project.title}
                                    </h3>

                                    <p className="text-gray-400 font-light leading-relaxed text-xs h-20 overflow-y-auto">
                                        {project.description}
                                    </p>
                                </div>
                            </div>

                            <div className="p-6 pt-0 space-y-4">
                                {/* Tech Tags */}
                                <div className="flex flex-wrap gap-1.5 pt-2 border-t border-cyan-500/5">
                                    {project.tags.map((tag, tagIndex) => (
                                        <span
                                            key={tagIndex}
                                            className="px-2 py-0.5 text-[9px] font-mono bg-cyan-500/5 text-gray-300 rounded border border-cyan-500/10"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                {/* Link action */}
                                {project.demoLink && (
                                    <a
                                        href={project.demoLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center justify-center gap-2 w-full px-4 py-2 bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-400 rounded-lg border border-cyan-500/25 hover:border-cyan-400 transition-all duration-300 group/btn font-mono text-xs font-bold tracking-wider"
                                    >
                                        <span>{project.linkText || "LAUNCH_MODULE"}</span>
                                        <svg
                                            className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-1"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                        </svg>
                                    </a>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
