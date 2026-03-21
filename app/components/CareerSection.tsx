"use client";

import RevealOnScroll from "./RevealOnScroll";

const experience = [
    {
        period: "2026 — Present",
        role: "Backend Developer",
        company: "Freelance / Projects",
        details: [
            "Full-stack web application development",
            "Database architecture & migrations",
            "REST API design & implementation",
        ],
    },
];

export default function CareerSection() {
    return (
        <section className="experience-section" id="experience">
            <div className="section-container">
                <RevealOnScroll>
                    <p className="section-label">Career</p>
                </RevealOnScroll>
                <RevealOnScroll delay={1}>
                    <h1 className="section-title">Experience.</h1>
                </RevealOnScroll>

                <div className="experience-items">
                    {experience.map((exp, i) => (
                        <RevealOnScroll key={i} delay={i}>
                            <div className="experience-item">
                                <div className="experience-period">{exp.period}</div>
                                <div className="experience-info">
                                    <h3>{exp.role}</h3>
                                    <p>{exp.company}</p>
                                </div>
                                <div className="experience-details">
                                    <ul>
                                        {exp.details.map((d, j) => (
                                            <li key={j}>{d}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </RevealOnScroll>
                    ))}
                </div>
            </div>
        </section>
    );
}
