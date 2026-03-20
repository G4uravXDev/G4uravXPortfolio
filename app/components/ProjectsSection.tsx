"use client";

import Image from "next/image";
import RevealOnScroll from "./RevealOnScroll";
import eventoneImg from "../Assests/eventone.png";
import cybersecurityImg from "../Assests/cybersecurity.png";
import lpuautoImg from "../Assests/lpuauto.png";
import dungeonImg from "../Assests/dungeon.png";

const projects = [
    {
        tag: "Full-Stack",
        title: "EventOne — Event Management System",
        description:
            "Simplifying the chaos of event management. EventOne gives student clubs and communities a single, beautiful space to plan, promote, and host events without the headache.",
        image: eventoneImg,
        tech: ["React.js", "PostgreSQL", "Express", "Tailwind"],
        live: "https://eventone.com",
        source: "https://github.com/gaurav/eventone",
    },
    {
        tag: "Cyber Security",
        title: "Cyber Security Awareness Portal",
        description:
            "A platform to raise awareness about cybercrime and promote safe online practices. Also enables users to report cyber incidents in a simple and accessible way.",
        image: cybersecurityImg,
        tech: ["React", "Node.js", "MongoDB", "Express"],
        live: "https://cybersecurity-portal.com",
        source: "https://github.com/gaurav/cybersecurity-portal",
    },
    {
        tag: "Automation",
        title: "LPU Wireless Login Automation",
        description:
            "Automates LPU WiFi login by handling authentication in the background. Ensures fast, seamless, and uninterrupted internet access.",
        image: lpuautoImg,
        tech: ["Python", "Automation", "Scripting"],
        live: "",
        source: "https://github.com/gaurav/lpu-auto",
    },
    {
        tag: "Game Development",
        title: "Crypt Of Carnage",
        description:
            "A Unity-based roguelike dungeon crawler where you explore procedurally generated dungeons, fight monsters, collect loot, and push deeper each run.",
        image: dungeonImg,
        tech: ["Unity", "C#", "Procedural Gen"],
        live: "",
        source: "https://github.com/gaurav/crypt-of-carnage",
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
                                {/* Image */}
                                <div className="proj-card-img">
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        fill
                                        sizes="(max-width: 768px) 100vw, 55vw"
                                        style={{ objectFit: "cover" }}
                                    />
                                </div>

                                {/* Content */}
                                <div className="proj-card-body">
                                    <span className="proj-card-tag">{project.tag}</span>
                                    <h2 className="proj-card-title">{project.title}</h2>
                                    <p className="proj-card-desc">{project.description}</p>

                                    <div className="proj-card-tech">
                                        {project.tech.map((t, j) => (
                                            <span key={j}>{t}</span>
                                        ))}
                                    </div>

                                    <div className="proj-card-actions">
                                        {project.live && (
                                            <a
                                                href={project.live}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="proj-btn proj-btn--primary"
                                            >
                                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                                                    <polyline points="15 3 21 3 21 9" />
                                                    <line x1="10" y1="14" x2="21" y2="3" />
                                                </svg>
                                                Live Demo
                                            </a>
                                        )}
                                        {project.source && (
                                            <a
                                                href={project.source}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="proj-btn proj-btn--ghost"
                                            >
                                                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                                                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                                </svg>
                                                Source Code
                                            </a>
                                        )}
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
