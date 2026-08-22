import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const workItems = [
    {
        id: 'panasonic-jhajjar',
        client: 'Panasonic Jhajjar',
        tag: 'Real-time dashboard',
        tags: ['WebSockets', 'MongoDB', 'Node.js'],
        metric: '< 500ms load',
        metricNote: 'was 3–5s',
        summary: 'Replaced 5-second API polling with WebSockets backed by MongoDB change streams. Set up MongoDB replica sets with automatic failover.',
        points: [
            'Plant dashboard was polling an API every 5 seconds and still felt laggy. Swapped it for WebSockets + MongoDB change streams — page load went from 3–5s to under 500ms.',
            'Set up MongoDB replica sets with automatic failover so a single node dropping out doesn\'t take the dashboard down mid-shift.',
        ],
    },
    {
        id: 'hmsi',
        client: 'HMSI',
        tag: 'Traceability system',
        tags: ['Node.js', 'PocketBase', 'Supabase'],
        metric: '−75% data errors',
        metricNote: 'vs manual process',
        summary: 'Built the traceability app front to back — before this, production-stage tracking was manual and error-prone.',
        points: [
            'Built their traceability app front to back — designed the UI operators use on the floor and the backend that automates metadata capture at each stage, cutting data-entry mistakes and making audits noticeably faster.',
            'Set up login with PocketBase and Supabase so onboarding new operators didn\'t require IT tickets every time.',
        ],
    },
    {
        id: 'panasonic-iic',
        client: 'Panasonic IIC',
        tag: 'WMS backend',
        tags: ['MQTT', 'REST APIs', 'Cron'],
        metric: '99.5% sync reliability',
        metricNote: 'MQTT inter-system',
        summary: 'Reworked REST APIs and built an MQTT sync layer for the warehouse management system.',
        points: [
            'Reworked the REST APIs behind their warehouse management system — response times and stability both improved significantly after the rewrite.',
            'Built an MQTT-based sync layer so distributed nodes could reliably pass stock/arbitration data between each other, plus cron jobs to keep everything in sync overnight.',
        ],
    },
    {
        id: 'smt-driver',
        client: 'Uno Minda Ketolec · Ikio · Minda Khed',
        tag: 'SMT driver microservice',
        tags: ['Rust', 'WebSockets', 'WAMP', 'XML/CSV'],
        metric: '10+ concurrent streams',
        metricNote: 'Rust async processor',
        summary: 'Config-driven CSV parser for SMT machines and a Rust service for concurrent file processing.',
        points: [
            'Every SMT machine (LMM, SPI, AOI, FCR) exports its own flavor of CSV. Built a driver service that reads machine metadata and parses each format dynamically — onboarding a new machine is a config change, not a code change.',
            'Also wrote a WebSocket listener for PanaCIM\'s XML output and a small Rust service (SMT-FileProcess) that moves and archives CSVs from 10+ machines at once without falling behind.',
        ],
    },
    {
        id: 'denso',
        client: 'DENSO',
        tag: 'Traceability & shop-floor inventory',
        tags: ['Tauri 2', 'Svelte 5', 'Node.js', 'RFID', 'QR', 'Inno Setup', 'NSSM'],
        metric: '6 production stations',
        metricNote: 'replaced spreadsheets',
        summary: 'Full desktop traceability app with RFID/QR integration across six production stations, packaged as a self-deployable Windows installer.',
        points: [
            'Built a desktop app (Tauri 2 + Svelte 5) covering six production stations, OP6 consumable tracking, and a live monitoring dashboard — replaced spreadsheet-based tracking.',
            'Node.js/Express backend ties together RFID readers, QR scanners, and an external ETB API into one traceability pipeline.',
            'Handled edge cases that matter on a real line: duplicate scans, wrong scan order, depleted stock, multi-part and multi-lot QR labels — so the system holds up in practice, not just on paper.',
            'Owned deployment end to end: packaged it as a Windows installer (Inno Setup) with the backend and PocketBase running as NSSM-managed services, so the client\'s team could install and update it themselves without needing us on a call.',
        ],
    },
    {
        id: 'foxconn',
        client: 'Foxconn',
        tag: 'PanaCIM integration',
        tags: ['TCP', 'XML', 'MSSQL', 'MongoDB'],
        metric: 'Dual-source ingestion',
        metricNote: 'TCP + MSSQL → unified API',
        summary: 'TCP listener converting PanaCIM XML output into MongoDB defect records, plus an MSSQL watcher for machines that bypass TCP.',
        points: [
            'Wrote a TCP listener that takes PanaCIM\'s raw XML output for a panel and its components, and turns it into queryable defect records in MongoDB.',
            'Some machines only write to MSSQL, so added a watcher for new rows there too — both paths feed the same database, single API regardless of source.',
        ],
    },
];

const Experience = () => {
    const [selected, setSelected] = useState('panasonic-jhajjar');
    const activeItem = workItems.find((w) => w.id === selected);

    return (
        <section id="experience" className="py-28 px-6">
            <div className="max-w-5xl mx-auto">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-80px' }}
                    transition={{ duration: 0.5 }}
                    className="mb-14"
                >
                    <span className="section-label">Experience</span>
                    <h2 className="text-3xl md:text-4xl font-bold text-white mt-2">
                        Professional work
                    </h2>
                </motion.div>

                {/* Company banner */}
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="mb-8 p-5 rounded-2xl glass-card border border-indigo-500/20"
                >
                    <div className="card-content flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                        <div>
                            <div className="text-base font-semibold text-white">Software Development Engineer I</div>
                            <div className="text-sm text-indigo-300 font-medium mt-0.5">Cymbeline Innovation Pvt Ltd</div>
                            <div className="text-xs text-slate-500 mt-1">Bengaluru, Karnataka · On-site</div>
                        </div>
                        <span className="self-start sm:self-center px-3 py-1.5 rounded-lg bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs font-medium whitespace-nowrap">
                            Mar 2025 – Present
                        </span>
                    </div>
                </motion.div>

                {/* Two-panel layout */}
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 items-start">
                    {/* Left: Project list */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.15 }}
                        className="lg:col-span-2 space-y-2"
                    >
                        {workItems.map((item) => (
                            <button
                                key={item.id}
                                onClick={() => setSelected(item.id)}
                                className={`w-full text-left p-4 rounded-xl border transition-all duration-200 ${
                                    selected === item.id
                                        ? 'bg-indigo-500/10 border-indigo-500/35 text-white'
                                        : 'bg-white/3 border-slate-800 text-slate-400 hover:text-slate-200 hover:border-slate-700 hover:bg-white/5'
                                }`}
                            >
                                <div className="flex items-start gap-3">
                                    <div className={`w-2 h-2 rounded-full mt-1.5 flex-shrink-0 transition-colors ${
                                        selected === item.id ? 'bg-indigo-400' : 'bg-slate-700'
                                    }`} />
                                    <div>
                                        <div className="text-sm font-semibold leading-tight">{item.client}</div>
                                        <div className={`text-xs mt-0.5 ${selected === item.id ? 'text-indigo-300' : 'text-slate-600'}`}>
                                            {item.tag}
                                        </div>
                                    </div>
                                </div>
                            </button>
                        ))}
                    </motion.div>

                    {/* Right: Detail panel */}
                    <div className="lg:col-span-3">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={selected}
                                initial={{ opacity: 0, y: 12 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -8 }}
                                transition={{ duration: 0.25 }}
                                className="glass-card p-7"
                            >
                                <div className="card-content space-y-5">
                                    {/* Header */}
                                    <div>
                                        <div className="flex items-start justify-between gap-4 mb-2">
                                            <h3 className="text-lg font-bold text-white leading-tight">
                                                {activeItem.client}
                                            </h3>
                                            <div className="text-right flex-shrink-0">
                                                <div className="text-base font-bold text-indigo-300">{activeItem.metric}</div>
                                                <div className="text-xs text-slate-500">{activeItem.metricNote}</div>
                                            </div>
                                        </div>
                                        <p className="text-sm text-slate-400 leading-relaxed">{activeItem.summary}</p>
                                    </div>

                                    {/* Tags */}
                                    <div className="flex flex-wrap gap-1.5">
                                        {activeItem.tags.map((t) => (
                                            <span key={t} className="tag-chip">{t}</span>
                                        ))}
                                    </div>

                                    {/* Points */}
                                    <ul className="space-y-3 pt-1 border-t border-slate-800">
                                        {activeItem.points.map((p, i) => (
                                            <li key={i} className="flex items-start gap-3 text-sm text-slate-300 leading-relaxed">
                                                <span className="mt-2 w-1.5 h-1.5 rounded-full bg-indigo-400/70 flex-shrink-0" />
                                                {p}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
