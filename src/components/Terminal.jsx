import { useState, useRef, useEffect } from 'react';

const Terminal = () => {
    const [history, setHistory] = useState([
        { text: "SYSTEM UPLINK SECURED. INITIALIZING USER INTERFACE...", type: "system" },
        { text: "Type 'help' to view all available commands.", type: "hint" }
    ]);
    const [input, setInput] = useState("");
    const containerRef = useRef(null);
    const inputRef = useRef(null);

    const scrollToBottom = () => {
        if (containerRef.current) {
            containerRef.current.scrollTop = containerRef.current.scrollHeight;
        }
    };

    useEffect(() => {
        scrollToBottom();
    }, [history]);

    const focusInput = () => {
        // If visitor is highlighting/selecting text inside terminal to copy, do not force focus input
        const selection = window.getSelection().toString();
        if (!selection) {
            inputRef.current?.focus();
        }
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            const cmd = input.trim().toLowerCase();
            const newHistory = [...history, { text: `visitor@jsv-uplink:~$ ${input}`, type: "command" }];
            
            if (cmd) {
                const response = getCommandResponse(cmd);
                if (response === "CLEAR_SCREEN") {
                    setHistory([]);
                } else if (Array.isArray(response)) {
                    setHistory([...newHistory, ...response]);
                } else {
                    setHistory([...newHistory, { text: response, type: "output" }]);
                }
            } else {
                setHistory(newHistory);
            }
            
            setInput("");
        }
    };

    const getCommandResponse = (cmd) => {
        const parts = cmd.split(' ');
        const mainCmd = parts[0];

        switch (mainCmd) {
            case 'help':
                return [
                    { text: "==================================================", type: "divider" },
                    { text: "AVAILABLE COMMANDS:", type: "header" },
                    { text: "  about       - Load developer background bio.", type: "item" },
                    { text: "  skills      - Load core language, database & tools matrix.", type: "item" },
                    { text: "  experience  - Show professional log registry (Cymbeline).", type: "item" },
                    { text: "  projects    - Show modular personal applications.", type: "item" },
                    { text: "  contact     - Retrieve comms uplink details (Email, Phone, Loc).", type: "item" },
                    { text: "  socials     - Open LinkedIn & GitHub links.", type: "item" },
                    { text: "  clear       - Wipe terminal cache.", type: "item" },
                    { text: "==================================================", type: "divider" }
                ];
            case 'about':
                return [
                    { text: "--- DEVELOPER DATA REGISTER ---", type: "header" },
                    { text: "NAME: Jayanth Shree Vishnu", type: "output" },
                    { text: "ROLE: Software Engineer (SDE-1)", type: "output" },
                    { text: "LOC: Bengaluru, Karnataka, India", type: "output" },
                    { text: "BIO: Software Engineer (SDE-1) with 1+ years of experience designing and delivering distributed, high-performance backend systems, real-time data pipelines, and microservices in production environments. Proficient in Java, Node.js, Rust, and Python.", type: "output" }
                ];
            case 'skills':
                return [
                    { text: "--- CORE SKILL MATRIX ---", type: "header" },
                    { text: "LANGUAGES:  Java, JavaScript, TypeScript, Rust, Python, SQL", type: "output" },
                    { text: "FRAMEWORKS: Spring Boot, Express.js, React, Vue.js, Svelte, SvelteKit", type: "output" },
                    { text: "DATABASES:  MongoDB (Replica Sets, Change Streams), PostgreSQL, MySQL, Supabase, Redis", type: "output" },
                    { text: "PROTOCOLS:  WebSockets, MQTT, WAMP, REST APIs", type: "output" },
                    { text: "DEVOPS:     Git, Docker, Jest, PocketBase, Linux", type: "output" }
                ];
            case 'experience':
                return [
                    { text: "--- CYMBELINE INNOVATION PVT LTD (SDE-1) ---", type: "header" },
                    { text: "• Panasonic Jhajjar Dashboard: Replaced polling with WebSockets + MongoDB Change Streams, reducing dashboard load time by ~90% (3-5s to <500ms) and setting up automated failover (99.2% uptime).", type: "output" },
                    { text: "• HMSI Traceability System: Built tracking app from scratch, reducing errors by ~75% and audit speed by ~40%. Integrated PocketBase & Supabase auth (90% login issues fixed).", type: "output" },
                    { text: "• Panasonic IIC (WMS Backend): Optimized REST APIs (40% faster) and integrated MQTT Arbitration Sync (99.5% inter-system sync reliability).", type: "output" },
                    { text: "• SMT Driver Microservice: Created CSV schema-driven parsing engine & high-throughput async queue service in Rust handling 10+ concurrent streams.", type: "output" },
                    { text: "• Foxconn API Dev: Delivered robust REST API contracts.", type: "output" }
                ];
            case 'projects':
                return [
                    { text: "--- FEATURED APPLICATION MODULES ---", type: "header" },
                    { text: "1. Hospital Management System: Spring Boot, React, MySQL (Full-stack billing, scheduling, workflows)", type: "output" },
                    { text: "2. AI PDF Reader: Python, OpenAI, VectorDB, Streamlit (Intelligent chunking & vector search Q&A)", type: "output" },
                    { text: "3. Weather App: React, REST APIs, Material UI (Real-time forecasting with OpenWeatherAPI)", type: "output" },
                    { text: "4. Land Registration: Solidity, Ethereum (Smart-contract decentralized ledger)", type: "output" },
                    { text: "Type 'socials' to get codes/demos repositories.", type: "hint" }
                ];
            case 'contact':
                return [
                    { text: "--- COMMS CHANNEL ENCRYPTED ---", type: "header" },
                    { text: "EMAIL:    ", linkText: "jayanthvishnu56@gmail.com", url: "mailto:jayanthvishnu56@gmail.com", type: "link" },
                    { text: "PHONE:    +91 8618343931", type: "output" },
                    { text: "LOCATION: Bengaluru, Karnataka, India", type: "output" }
                ];
            case 'socials':
                return [
                    { text: "--- EXTRALINK REPOSITORY PATHS ---", type: "header" },
                    { text: "GITHUB:   ", linkText: "https://github.com/JayanthVishnu/", url: "https://github.com/JayanthVishnu/", type: "link" },
                    { text: "LINKEDIN: ", linkText: "https://www.linkedin.com/in/jayanth-shree-vishnu-a80858259/", url: "https://www.linkedin.com/in/jayanth-shree-vishnu-a80858259/", type: "link" }
                ];
            case 'clear':
                return "CLEAR_SCREEN";
            default:
                return [
                    { text: `Command not recognized: '${mainCmd}'`, type: "error" },
                    { text: "Type 'help' to display system diagnostics command set.", type: "hint" }
                ];
        }
    };

    const getLineStyle = (type) => {
        switch (type) {
            case 'command': return 'text-cyan-400 font-medium';
            case 'system': return 'text-emerald-400 font-bold';
            case 'hint': return 'text-purple-400 italic text-sm';
            case 'header': return 'text-purple-300 font-bold tracking-wider mt-2 border-b border-purple-500/30 pb-0.5';
            case 'divider': return 'text-blue-500/50';
            case 'item': return 'text-gray-300';
            case 'output': return 'text-gray-300 leading-relaxed pl-2';
            case 'link': return 'text-pink-400 underline cursor-pointer';
            case 'error': return 'text-rose-500 font-bold';
            default: return 'text-gray-200';
        }
    };

    return (
        <div 
            ref={containerRef}
            onClick={focusInput}
            className="w-full h-80 bg-black/85 border border-cyan-500/20 rounded-xl p-4 font-mono text-sm overflow-y-auto cursor-text shadow-[inset_0_0_20px_rgba(0,229,255,0.05)] scanlines relative group hover:border-cyan-500/40 transition-colors"
        >
            {/* Ambient terminal shine overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/5 to-transparent pointer-events-none" />
            <div className="absolute top-2 right-4 flex items-center gap-1.5 opacity-60">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-xs text-emerald-400 uppercase tracking-widest">CLI-UPLINK: LIVE</span>
            </div>
            
            <div className="space-y-1.5 relative z-10">
                {history.map((line, idx) => (
                    <div key={idx} className={getLineStyle(line.type)}>
                        {line.text}
                        {line.type === 'link' && (
                            <a 
                                href={line.url} 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="text-pink-400 underline hover:text-pink-300 transition-colors ml-1 font-mono"
                                onClick={(e) => e.stopPropagation()}
                            >
                                {line.linkText}
                            </a>
                        )}
                    </div>
                ))}
                
                <div className="flex items-center gap-2 text-cyan-400 font-medium pt-1">
                    <span>visitor@jsv-uplink:~$</span>
                    <input
                        ref={inputRef}
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyDown={handleKeyDown}
                        className="flex-grow bg-transparent outline-none text-gray-200 border-none p-0 focus:ring-0"
                        autoFocus
                    />
                </div>
            </div>
        </div>
    );
};

export default Terminal;
