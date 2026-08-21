import { motion } from 'framer-motion';

import pdfAiImg from '../assets/projects/pdf-ai.png';
import landRegistryImg from '../assets/projects/land-registry.png';
import covidBedsImg from '../assets/projects/covid-beds.png';
import weatherAndroidImg from '../assets/projects/weather-android.png';
import hospitalMgmtImg from '../assets/projects/hospital-mgmt.png';
import weatherReactImg from '../assets/projects/weather-react.png';

const featured = [
    {
        title: 'QRLayout',
        status: 'Open source',
        description: 'A drag-and-drop QR layout designer for teams that need to place QR codes on labels or packaging without hand-coding positions each time.',
        tags: ['Open Source', 'Drag & Drop', 'QR Codes'],
        link: 'https://github.com/JayanthVishnu',
        linkLabel: 'GitHub ↗',
        image: null,
        accent: '#6366f1',
    },
    {
        title: 'EnvDrift',
        status: 'Open source',
        description: 'CLI tool that scans a codebase for environment variables actually in use and flags any that are missing from your .env — built after one too many "works on my machine" bugs.',
        tags: ['CLI', 'Open Source', 'Node.js', 'Developer Tool'],
        link: 'https://github.com/JayanthVishnu',
        linkLabel: 'GitHub ↗',
        image: null,
        accent: '#8b5cf6',
    },
    {
        title: 'Hospital Management System',
        status: 'College project',
        description: 'Full-stack app covering doctors, patient records, appointments, and billing. One of the more complete solo builds.',
        tags: ['Spring Boot', 'React', 'MySQL', 'REST APIs'],
        link: 'https://github.com/JayanthVishnu/Hospital-Management-System',
        linkLabel: 'GitHub ↗',
        image: hospitalMgmtImg,
        accent: '#6366f1',
    },
    {
        title: 'AI PDF Reader',
        status: 'Weekend project',
        description: 'Chunk a PDF, embed it into a vector store, and ask questions against it via an LLM — built to actually understand RAG instead of just reading about it.',
        tags: ['Python', 'OpenAI', 'HuggingFace', 'Streamlit'],
        link: 'https://github.com/JayanthVishnu/muti_pdf_reader_using_AI',
        linkLabel: 'GitHub ↗',
        image: pdfAiImg,
        accent: '#8b5cf6',
    },
    {
        title: 'Weather App',
        status: 'Live',
        description: 'Responsive weather forecasting app integrated with OpenWeatherAPI for real-time conditions and 5-day forecasts.',
        tags: ['React', 'Material UI', 'OpenWeatherAPI'],
        link: 'https://jayanthvishnu.github.io/weather-app/',
        linkLabel: 'Live demo ↗',
        image: weatherReactImg,
        accent: '#06b6d4',
    },
    {
        title: 'Land Registry Ledger',
        status: 'Archived',
        description: 'Decentralized land registry on the Ethereum blockchain. Smart contracts with Solidity for immutable ownership records.',
        tags: ['Solidity', 'Ethereum', 'Ganache'],
        link: null,
        image: landRegistryImg,
        accent: '#f59e0b',
    },
];

const Projects = () => {
    const handleMouseMove = (e) => {
        const card = e.currentTarget;
        const rect = card.getBoundingClientRect();
        card.style.setProperty('--mouse-x', `${e.clientX - rect.left}px`);
        card.style.setProperty('--mouse-y', `${e.clientY - rect.top}px`);
    };

    return (
        <section id="projects" className="py-28 px-6">
            <div className="max-w-5xl mx-auto">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-80px' }}
                    transition={{ duration: 0.5 }}
                    className="mb-14"
                >
                    <span className="section-label">Projects</span>
                    <h2 className="text-3xl md:text-4xl font-bold text-white mt-2">
                        Things I've built
                    </h2>
                </motion.div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {featured.map((project, i) => (
                        <motion.div
                            key={project.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: '-40px' }}
                            transition={{ duration: 0.45, delay: i * 0.08 }}
                            onMouseMove={handleMouseMove}
                            className="glass-card flex flex-col overflow-hidden"
                        >
                            {/* Image or placeholder */}
                            <div className="h-40 flex-shrink-0 relative overflow-hidden">
                                {project.image ? (
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                ) : (
                                    <div className="w-full h-full flex items-center justify-center"
                                        style={{ background: `linear-gradient(135deg, ${project.accent}15, transparent)` }}>
                                        <span className="text-3xl opacity-40" style={{ color: project.accent }}>{ '{ }' }</span>
                                    </div>
                                )}
                                <div className="absolute inset-0 bg-gradient-to-t from-[#0d1221] via-[#0d1221]/20 to-transparent" />
                                <div className="absolute top-3 left-3">
                                    <span className="px-2 py-0.5 rounded-md text-xs font-medium"
                                        style={{ background: `${project.accent}20`, color: project.accent, border: `1px solid ${project.accent}35` }}>
                                        {project.status}
                                    </span>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="card-content flex flex-col flex-1 p-5 space-y-3">
                                <h3 className="text-base font-semibold text-white">{project.title}</h3>
                                <p className="text-xs text-slate-400 leading-relaxed flex-1">{project.description}</p>

                                {/* Tags */}
                                <div className="flex flex-wrap gap-1.5">
                                    {project.tags.map((t) => (
                                        <span key={t} className="tag-chip">{t}</span>
                                    ))}
                                </div>

                                {/* Link */}
                                {project.link && (
                                    <a
                                        href={project.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-1.5 text-xs font-medium text-indigo-400 hover:text-indigo-300 transition-colors mt-1"
                                    >
                                        {project.linkLabel}
                                    </a>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Other projects */}
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.3 }}
                    className="mt-8 pt-8 border-t border-slate-800"
                >
                    <p className="text-xs text-slate-500 mb-4 uppercase tracking-wider font-medium">Other archived work</p>
                    <div className="flex flex-wrap gap-3">
                        {[
                            { name: 'COVID-19 Beds Booking', tags: ['SQL', 'Web Dev'], link: 'https://github.com/JayanthVishnu/Covid-19-DBMS-BED-SLOT-BOOKING' },
                            { name: 'Android Weather Client', tags: ['Android', 'Java'] },
                        ].map((p) => (
                            <div key={p.name} className="flex items-center gap-3 px-4 py-2.5 rounded-xl glass-card border border-slate-800">
                                <div className="card-content flex items-center gap-3">
                                    <span className="text-sm text-slate-300">{p.name}</span>
                                    <div className="flex gap-1">
                                        {p.tags.map((t) => <span key={t} className="tag-chip">{t}</span>)}
                                    </div>
                                    {p.link && (
                                        <a href={p.link} target="_blank" rel="noopener noreferrer"
                                            className="text-xs text-indigo-400 hover:text-indigo-300 transition-colors">
                                            ↗
                                        </a>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Projects;
