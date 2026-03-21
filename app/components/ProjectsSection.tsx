"use client";

import Image from "next/image";
import RevealOnScroll from "./RevealOnScroll";
import eventoneImg from "../Assests/eventone.png";
import cybersecurityImg from "../Assests/cybersecurity.png";
import lpuautoImg from "../Assests/lpuauto.png";
import dungeonImg from "../Assests/dungeon.png";

const projects = [
    {
        tag: "FULL STACK",
        subtitle: "EVENT MANAGEMENT | 2024",
        title: "EventOne",
        description:
            "Simplifying the chaos of event management. EventOne gives student clubs and communities a single, beautiful space to plan, promote, and host events without the headache.",
        image: eventoneImg,
        tech: ["REACT.JS", "POSTGRESQL", "EXPRESS", "TAILWIND"],
        live: "https://event0ne.xyz",
        source: "https://github.com/G4uravXDev/Event-management-system-main",
    },
    {
        tag: "CYBER SECURITY",
        subtitle: "AWARENESS PORTAL | 2024",
        title: "CS Portal",
        description:
            "A platform to raise awareness about cybercrime and promote safe online practices. Also enables users to report cyber incidents in a simple and accessible way.",
        image: cybersecurityImg,
        tech: ["REACT", "NODE.JS", "MONGODB", "EXPRESS"],
        live: "https://cybersecurity-awareness-portal-8sx2.onrender.com/",
        source: "https://github.com/G4uravXDev/Cybersecurity-Awareness-Portal",
    },
    {
        tag: "AUTOMATION",
        subtitle: "AUTOMATION | 2024",
        title: "LPU AutoLogin",
        description:
            "Automates LPU WiFi login by handling authentication in the background. Ensures fast, seamless, and uninterrupted internet access.",
        image: lpuautoImg,
        tech: ["PYTHON", "AUTOMATION", "SCRIPTING"],
        live: "",
        source: "https://github.com/G4uravXDev/LPU_Wireless_Login_Automation",
    },
    {
        tag: "GAME DEV",
        subtitle: "ROGUELIKE | 2023",
        title: "Crypt Of Carnage",
        description:
            "A Unity-based roguelike dungeon crawler where you explore procedurally generated dungeons, fight monsters, collect loot, and push deeper each run.",
        image: dungeonImg,
        tech: ["UNITY", "C#", "PROCEDURAL GEN"],
        live: "",
        source: "https://github.com/G4uravXDev/Crypt_of_Carnage",
    },
];

export default function ProjectsSection() {
    return (
        <section className="section" id="projects">
            <div className="section-container">
                <RevealOnScroll>
                    <p className="section-label">Selected Work</p>
                </RevealOnScroll>
                <RevealOnScroll delay={0.15}>
                    <h1 className="section-title">
                        Projects<em>.</em>
                    </h1>
                </RevealOnScroll>
            </div>

            <div className="proj-container">
                <div className="proj-grid">
                    {projects.map((project, i) => (
                        <RevealOnScroll key={i} delay={i * 0.1}>
                            <article className="proj-card">
                                {/* Image layer */}
                                <div className="proj-card-img">
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        fill
                                        sizes="(max-width: 900px) 100vw, 55vw"
                                        style={{ objectFit: "cover", objectPosition: "center top" }}
                                    />
                                    <div className="proj-card-img-dim" />
                                </div>

                                {/* Floating Solid Gray Overlay */}
                                <div className="proj-card-overlay">

                                    {/* Default Visible Header Row */}
                                    <div className="proj-card-header">
                                        <div className="proj-card-header-left">
                                            <div className="proj-card-title-row">
                                                <h2 className="proj-card-title">
                                                    {project.title}
                                                </h2>
                                                <span className="proj-card-tag">
                                                    {project.tag}
                                                </span>
                                            </div>
                                            <span className="proj-card-subtitle">
                                                {project.subtitle}
                                            </span>
                                        </div>

                                        {/* Circular Pink Arrow Button */}
                                        <a href={project.live || project.source || "#"} target="_blank" rel="noopener noreferrer" className="proj-card-btn">
                                            {/* Diagonal Arrow (Idle) */}
                                            <svg className="proj-card-btn-arrow proj-card-btn-arrow--up" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                                            </svg>
                                            {/* Right Arrow (Hover) */}
                                            <svg className="proj-card-btn-arrow proj-card-btn-arrow--right" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
                                            </svg>
                                        </a>
                                    </div>

                                    {/* Expanded Hidden Details */}
                                    <div className="proj-card-expanded">
                                        <p className="proj-card-desc">
                                            {project.description}
                                        </p>

                                        {/* Technologies */}
                                        <div className="proj-card-tech">
                                            {project.tech.map((t, j) => (
                                                <span key={j}>
                                                    {t}
                                                </span>
                                            ))}
                                        </div>

                                        {/* Call to Action Buttons */}
                                        <div className="proj-card-actions">
                                            {project.source && (
                                                <a href={project.source} target="_blank" rel="noopener noreferrer" className="proj-action-btn proj-action-btn--source">
                                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                                                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                                    </svg>
                                                    View Source Code
                                                </a>
                                            )}
                                            {project.live && (
                                                <a href={project.live} target="_blank" rel="noopener noreferrer" className="proj-action-btn proj-action-btn--live">
                                                    Live Demo
                                                </a>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </article>
                        </RevealOnScroll>
                    ))}
                </div>
            </div>
        </section>
    );
}
