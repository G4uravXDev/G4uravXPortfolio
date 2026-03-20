"use client";

import { useState } from "react";
import RevealOnScroll from "./RevealOnScroll";

type Category = "All" | "Languages" | "Frameworks" | "Databases" | "Tools";

interface Skill {
    name: string;
    category: Exclude<Category, "All">;
}

const skills: Skill[] = [
    // Languages
    { name: "Python", category: "Languages" },
    { name: "Java", category: "Languages" },
    { name: "JavaScript", category: "Languages" },
    { name: "HTML", category: "Languages" },
    { name: "CSS", category: "Languages" },

    // Frameworks
    { name: "ReactJS", category: "Frameworks" },
    { name: "NodeJS", category: "Frameworks" },
    { name: "ExpressJS", category: "Frameworks" },
    { name: "Tailwind CSS", category: "Frameworks" },
    { name: "Rest API", category: "Frameworks" },
    { name: "SpringBoot", category: "Frameworks" },

    // Databases
    { name: "MongoDB", category: "Databases" },
    { name: "PostgreSQL", category: "Databases" },

    // Tools / Platforms
    { name: "Git", category: "Tools" },
    { name: "Postman", category: "Tools" },
    { name: "Firebase", category: "Tools" },
    { name: "Supabase", category: "Tools" },
    { name: "Figma", category: "Tools" },
    { name: "Power Automate", category: "Tools" },
    { name: "N8N", category: "Tools" },
];

const categories: Category[] = [
    "All",
    "Languages",
    "Frameworks",
    "Databases",
    "Tools",
];

/* Simple abbreviation for the avatar circle inside each card */
function getInitials(name: string) {
    return name.slice(0, 2).toUpperCase();
}

export default function TechnicalArsenal() {
    const [active, setActive] = useState<Category>("All");

    const filtered =
        active === "All" ? skills : skills.filter((s) => s.category === active);

    return (
        <section className="arsenal-section" id="technical-arsenal">
            <div className="section-container">
                <RevealOnScroll>
                    <p className="section-label">Skills</p>
                </RevealOnScroll>
                <RevealOnScroll delay={0.15}>
                    <h1 className="section-title">
                        Technical <em>Arsenal.</em>
                    </h1>
                </RevealOnScroll>

                {/* ── Filter bar ── */}
                <RevealOnScroll delay={0.25}>
                    <div className="arsenal-filters">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                className={`arsenal-filter-btn${active === cat ? " active" : ""}`}
                                onClick={() => setActive(cat)}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </RevealOnScroll>

                {/* ── Skill grid ── */}
                <div className="arsenal-grid" key={active}>
                    {filtered.map((skill, i) => (
                        <RevealOnScroll key={skill.name} delay={i * 0.04}>
                            <div className="arsenal-card">
                                <div className="arsenal-card-icon">
                                    {getInitials(skill.name)}
                                </div>
                                <span className="arsenal-card-name">{skill.name}</span>
                                <span className="arsenal-card-cat">{skill.category}</span>
                            </div>
                        </RevealOnScroll>
                    ))}
                </div>
            </div>
        </section>
    );
}
