import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

// Import project images
import weatherReactImg from '../assets/projects/weather-react.png';
import pdfAiImg from '../assets/projects/pdf-ai.png';
import landRegistryImg from '../assets/projects/land-registry.png';
import covidBedsImg from '../assets/projects/covid-beds.png';
import weatherAndroidImg from '../assets/projects/weather-android.png';
import hospitalMgmtImg from '../assets/projects/hospital-mgmt.png';

const projects = [

    {
        title: "Weather App (React)",
        description: "A responsive weather forecasting application developed using React.js and Material UI. Integrated the OpenWeatherAPI to fetch and display real-time weather data, providing users with accurate current conditions and forecasts.",
        tags: ["React", "Material UI", "OpenWeatherAPI", "REST API"],
        image: weatherReactImg,
        demoLink: "https://jayanthvishnu.github.io/weather-app/"
    },
    {
        title: "Multi-PDF Reader AI",
        description: "An intelligent document processing system that converts multiple PDFs into text chunks and stores them in a vector database. Utilizes LLMs (OpenAI/HuggingFace) via Streamlit to provide accurate, context-aware answers to user queries based on the document content.",
        tags: ["Python", "LangChain", "OpenAI", "Streamlit", "Vector DB"],
        image: pdfAiImg,
        demoLink: "https://github.com/JayanthVishnu/muti_pdf_reader_using_AI",
        linkText: "View Code"
    },
    {
        title: "Hospital Management System",
        description: "A full-stack hospital management system streamlining operations from patient records to billing. Built with Spring Boot REST APIs and a React frontend, featuring doctor management, appointment scheduling, and efficient MySQL data handling for comprehensive medical workflows.",
        tags: ["Spring Boot", "React", "MySQL", "REST API", "Healthcare"],
        image: hospitalMgmtImg,
        demoLink: "",
        linkText: "View Code"
    },
    {
        title: "Land Registration System",
        description: "A decentralized land registry system built on the Ethereum blockchain. Implemented smart contracts with Solidity to ensure immutable storage of land ownership data, eliminating fraud and manipulation. Utilized Ganache and Remix IDE for testing.",
        tags: ["Solidity", "Ethereum", "Ganache", "Blockchain"],
        image: landRegistryImg
    },
    {
        title: "COVID-19 Bed Booking",
        description: "A web application designed to help patients find and reserve hospital beds during the pandemic. Built with a robust SQL database to manage real-time bed availability and streamline the allocation process for critical patients.",
        tags: ["SQL", "Database", "Web Development", "Healthcare"],
        image: covidBedsImg,
        demoLink: "https://github.com/JayanthVishnu/Covid-19-DBMS-BED-SLOT-BOOKING",
        linkText: "View Code"
    },
    {
        title: "Android Weather App",
        description: "A native Android application that delivers real-time weather updates. Leveraged third-party APIs to retrieve accurate weather data and implemented a user-friendly interface for seamless navigation and information display.",
        tags: ["Android", "Java", "APIs", "Mobile Dev"],
        image: weatherAndroidImg
    }
];

const Projects = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section id="projects" className="py-32 px-6 bg-transparent">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white font-serif">
                        Featured <span className="gradient-text">Projects</span>
                    </h2>
                    <p className="text-xl text-gray-400 font-light">
                        Showcasing my technical capabilities
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
                            className="glass-dark rounded-2xl overflow-hidden group hover:shadow-[0_0_30px_rgba(59,130,246,0.2)] transition-all duration-500 flex flex-col"
                        >
                            {/* Project Image */}
                            <div className="h-48 overflow-hidden relative">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-60" />
                            </div>

                            <div className="p-8 flex flex-col flex-grow">
                                <div className="flex justify-between items-start mb-4">
                                    <h3 className="text-2xl font-bold text-white font-serif group-hover:text-blue-400 transition-colors">
                                        {project.title}
                                    </h3>
                                </div>

                                <p className="text-gray-400 mb-6 flex-grow font-light leading-relaxed text-sm">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tags.map((tag, tagIndex) => (
                                        <span
                                            key={tagIndex}
                                            className="px-3 py-1 text-xs font-medium bg-gray-800/50 text-gray-300 rounded-full border border-gray-700/50"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                {project.demoLink && (
                                    <a
                                        href={project.demoLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="mt-auto inline-flex items-center justify-center gap-2 px-4 py-2 bg-blue-600/20 hover:bg-blue-600/30 text-blue-400 rounded-lg border border-blue-500/30 hover:border-blue-500/50 transition-all duration-300 group/btn"
                                    >
                                        <span className="text-sm font-medium">{project.linkText || "View Demo"}</span>
                                        <svg
                                            className="w-4 h-4 transition-transform group-hover/btn:translate-x-1"
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
