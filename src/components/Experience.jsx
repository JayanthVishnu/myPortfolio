import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Experience = () => {
    const [selectedLog, setSelectedLog] = useState(0);

    const experiences = [
        {
            company: "Cymbeline Innovation Pvt Ltd",
            role: "Software Developer Engineer – 1",
            period: "Mar 2025 – Present",
            location: "Bengaluru, Karnataka (On-site)",
            description: "Designing and delivering distributed, high-performance backend systems, real-time data pipelines, and microservices in production environments. Taking end-to-end ownership of scalable services aligned with enterprise technology standards.",
            projects: [
                {
                    id: "LOG_001",
                    title: "Panasonic Jhajjar – Dashboard Optimization",
                    role: "Lead Performance Engineer",
                    metrics: { latency: "< 500ms (90% reduction)", uptime: "99.2%", tech: "WebSockets, MongoDB Replica Sets" },
                    highlights: [
                        "Replaced 5-second API polling with WebSockets + MongoDB Change Streams, eliminating dashboard latency.",
                        "Reduced dashboard load time from 3–5s to under 500ms (~90% improvement), directly accelerating operator response speed on the production floor.",
                        "Configured MongoDB replica sets with automated failover, increasing system uptime to 99.2% and ensuring high availability."
                    ]
                },
                {
                    id: "LOG_002",
                    title: "HMSI Traceability System – Full-Stack",
                    role: "Full-Stack Developer",
                    metrics: { manual_errors: "-75% reduction", audit_speed: "+40% efficiency", tech: "Supabase, PocketBase, Node.js" },
                    highlights: [
                        "Engineered a Traceability Application from scratch, automating tracking and eliminating manual processes across the assembly line.",
                        "Reduced manual data entry errors by ~75% and improved audit efficiency by ~40% through automated metadata capture.",
                        "Built unified authentication using PocketBase & Supabase, reducing login issues by ~90% and improving onboarding speed."
                    ]
                },
                {
                    id: "LOG_003",
                    title: "Panasonic IIC – WMS Backend & Sync",
                    role: "Backend Architect",
                    metrics: { api_response: "+40% speed", stability: "+70% reliability", tech: "MQTT, REST, Cron Scheduler" },
                    highlights: [
                        "Optimized backend REST APIs handling warehouse management workflows, improving response time by ~40% and stability by ~70%.",
                        "Executed MQTT-based Arbitration Sync with message forwarding, achieving 99.5% inter-system communication reliability.",
                        "Added cron-based scheduled sync jobs ensuring consistent cross-system data propagation and eliminating stale-data."
                    ]
                },
                {
                    id: "LOG_004",
                    title: "SMT Driver Microservice – SMT Factories",
                    role: "Systems Engineer (Rust/Node)",
                    metrics: { throughput: "10+ concurrent streams", parser: "Dynamic metadata-driven", tech: "Rust, WAMP, WebSockets, XML" },
                    highlights: [
                        "Architected a configurable CSV driver microservice using machine metadata to dynamically parse schemas, eliminating hardcoded parsers.",
                        "Built a WebSocket listener consuming PanaCIM XML data, using class-based parsing for multiple message types and WAMP forwarding.",
                        "Constructed SMT-FileProcess in Rust – a high-throughput file management service using async queues for 10+ concurrent streams."
                    ]
                },
                {
                    id: "LOG_005",
                    title: "Foxconn – Backend API Development",
                    role: "Backend API Engineer",
                    metrics: { design: "Scalable REST contracts", code_quality: "Enterprise standard", tech: "REST APIs, OpenAPI" },
                    highlights: [
                        "Planned and delivered backend REST APIs supporting Foxconn operational workflows, ensuring scalable, well-structured API contracts."
                    ]
                }
            ]
        }
    ];

    const handleMouseMove = (e) => {
        const card = e.currentTarget;
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        card.style.setProperty('--mouse-x', `${x}px`);
        card.style.setProperty('--mouse-y', `${y}px`);
    };

    const exp = experiences[0]; // Cymbeline

    return (
        <section id="experience" className="py-32 px-6 bg-transparent">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-black text-white uppercase font-serif tracking-wide mb-4">
                        [system<span className="text-cyan-400">_logs</span>]
                    </h2>
                    <div className="h-1 w-20 bg-cyan-400/50 mx-auto shadow-[0_0_10px_rgba(0,229,255,0.5)] mb-4" />
                    <p className="text-lg text-gray-400 max-w-xl mx-auto font-light font-mono">
                        // Decrypted professional registry at Cymbeline Innovation. Click on logs to view telemetry.
                    </p>
                </motion.div>

                {/* Sub-header of Cymbeline */}
                <div className="mb-10 p-6 rounded-xl bg-cyan-500/5 border border-cyan-500/10 flex flex-col md:flex-row md:items-center justify-between gap-4 font-mono text-sm">
                    <div>
                        <div className="text-lg font-bold text-white uppercase">{exp.role}</div>
                        <div className="text-cyan-400 font-semibold">{exp.company}</div>
                        <div className="text-gray-500 text-xs mt-1">{exp.location}</div>
                    </div>
                    <span className="self-start md:self-center text-cyan-400 font-bold px-3 py-1.5 rounded-lg bg-cyan-500/10 border border-cyan-500/25">
                        {exp.period}
                    </span>
                </div>

                {/* Log Dashboard */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                    {/* Left: Log Registry Selector (5 cols) */}
                    <div className="lg:col-span-5 space-y-4">
                        <span className="text-xs font-mono text-gray-500 block px-1">[REGISTRY_DIRECTORY_FILES]</span>
                        
                        {exp.projects.map((proj, idx) => (
                            <button
                                key={proj.id}
                                onClick={() => setSelectedLog(idx)}
                                className={`w-full text-left p-4 rounded-xl font-mono text-xs border transition-all duration-300 flex items-center justify-between group ${
                                    selectedLog === idx 
                                    ? 'bg-cyan-500/10 border-cyan-400 text-cyan-400 shadow-[0_0_15px_rgba(0,229,255,0.1)]' 
                                    : 'bg-black/45 border-cyan-500/10 hover:border-cyan-500/30 text-gray-400 hover:text-gray-200'
                                }`}
                            >
                                <div className="flex items-center gap-3">
                                    <span className={`w-1.5 h-1.5 rounded-full ${selectedLog === idx ? 'bg-cyan-400 animate-pulse' : 'bg-gray-600'}`} />
                                    <div>
                                        <span className="text-[10px] text-gray-500 block">{proj.id}</span>
                                        <span className="font-bold tracking-wide">{proj.title.split(' – ')[0]}</span>
                                    </div>
                                </div>
                                <span className={`text-[10px] px-2 py-0.5 rounded border transition-colors ${
                                    selectedLog === idx ? 'border-cyan-400/50' : 'border-gray-800'
                                }`}>
                                    OPEN
                                </span>
                            </button>
                        ))}
                    </div>

                    {/* Right: Telemetry Screen (7 cols) */}
                    <div className="lg:col-span-7">
                        <span className="text-xs font-mono text-gray-500 block px-1 mb-1">
                            [TELEMETRY_READER: {exp.projects[selectedLog].id}]
                        </span>
                        
                        <div 
                            onMouseMove={handleMouseMove}
                            className="cyber-card p-8 rounded-2xl border border-cyan-500/15 min-h-[350px] flex flex-col justify-between cyber-corners"
                        >
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={selectedLog}
                                    initial={{ opacity: 0, y: 15 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -15 }}
                                    transition={{ duration: 0.3 }}
                                    className="space-y-6"
                                >
                                    {/* Header info */}
                                    <div className="border-b border-cyan-500/10 pb-4 space-y-2">
                                        <div className="flex items-center justify-between">
                                            <span className="text-xs font-mono text-emerald-400 uppercase tracking-widest font-bold flex items-center gap-1.5">
                                                <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-ping" />
                                                LOG_DECRYPTED: SUCCESS
                                            </span>
                                            <span className="text-xs font-mono text-gray-500">{exp.projects[selectedLog].role}</span>
                                        </div>
                                        <h3 className="text-xl font-bold text-white font-mono tracking-wide">
                                            {exp.projects[selectedLog].title}
                                        </h3>
                                    </div>

                                    {/* Metrics parameters */}
                                    <div className="bg-cyan-500/5 border border-cyan-500/10 rounded-lg p-4 font-mono text-xs grid grid-cols-1 sm:grid-cols-2 gap-3 text-gray-400">
                                        {Object.entries(exp.projects[selectedLog].metrics).map(([key, val]) => (
                                            <div key={key}>
                                                <span className="text-cyan-400 font-bold uppercase block">{"> " + key.replace('_', ' ')}</span>
                                                <span className="text-gray-200">{val}</span>
                                            </div>
                                        ))}
                                    </div>

                                    {/* Highlights list */}
                                    <div className="space-y-3">
                                        <span className="text-[10px] font-mono text-gray-500 block uppercase">Log Entries:</span>
                                        <ul className="space-y-3">
                                            {exp.projects[selectedLog].highlights.map((h, i) => (
                                                <li key={i} className="flex items-start gap-3 text-sm font-light text-gray-300 leading-relaxed">
                                                    <span className="text-cyan-400 font-mono font-bold mt-0.5">=&gt;</span>
                                                    <span>{h}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </motion.div>
                            </AnimatePresence>

                            <div className="mt-8 pt-4 border-t border-cyan-500/10 font-mono text-[9px] text-gray-600 flex justify-between">
                                <span>SESSION_LOG: SECURE_LINK</span>
                                <span>Cymbeline SDE Core Register</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
