"use client";

import { useState } from "react";
import RevealOnScroll from "./RevealOnScroll";
import powerAutomateIcon from "../Assests/icons/microsoft-power-automate.svg";
import restApiIcon from "../Assests/icons/rest-api-icon.svg";

type Category = "All" | "Languages" | "Frameworks" | "Databases" | "Tools";

interface Skill {
    name: string;
    category: Exclude<Category, "All">;
    icon?: string;
}

const skills: Skill[] = [
    // Languages
    { name: "Python", category: "Languages", icon: "https://cdn.simpleicons.org/python/3776AB" },
    { name: "Java", category: "Languages", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg" },
    { name: "JavaScript", category: "Languages", icon: "https://cdn.simpleicons.org/javascript/F7DF1E" },
    { name: "C#", category: "Languages", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg" },
    { name: "HTML", category: "Languages", icon: "https://cdn.simpleicons.org/html5/E34F26" },
    { name: "CSS", category: "Languages", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" },

    // Frameworks
    { name: "ReactJS", category: "Frameworks", icon: "https://cdn.simpleicons.org/react/61DAFB" },
    { name: "NextJS", category: "Frameworks", icon: "https://cdn.simpleicons.org/nextdotjs/white" },
    { name: "NodeJS", category: "Frameworks", icon: "https://cdn.simpleicons.org/nodedotjs/339933" },
    { name: "ExpressJS", category: "Frameworks", icon: "https://cdn.simpleicons.org/express/eeeeee" },
    { name: "Tailwind CSS", category: "Frameworks", icon: "https://cdn.simpleicons.org/tailwindcss/06B6D4" },
    { name: "Laravel", category: "Frameworks", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg" },
    { name: "Rest API", category: "Frameworks", icon: typeof restApiIcon === "string" ? restApiIcon : restApiIcon.src },
    { name: "SpringBoot", category: "Frameworks", icon: "https://cdn.simpleicons.org/springboot/6DB33F" },

    // Databases
    { name: "MongoDB", category: "Databases", icon: "https://cdn.simpleicons.org/mongodb/47A248" },
    { name: "PostgreSQL", category: "Databases", icon: "https://cdn.simpleicons.org/postgresql/4169E1" },

    // Tools / Platforms
    { name: "Git", category: "Tools", icon: "https://cdn.simpleicons.org/git/F05032" },
    { name: "AWS", category: "Tools", icon: "https://www.vectorlogo.zone/logos/amazon_aws/amazon_aws-icon.svg" },
    { name: "Docker", category: "Tools", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg" },
    { name: "Linux", category: "Tools", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg" },
    { name: "Vercel", category: "Tools", icon: "https://cdn.simpleicons.org/vercel/white" },
    { name: "ViteJS", category: "Tools", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg" },
    { name: "Eclipse IDE", category: "Tools", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/eclipse/eclipse-original.svg" },
    { name: "Postman", category: "Tools", icon: "https://cdn.simpleicons.org/postman/FF6C37" },
    { name: "Firebase", category: "Tools", icon: "https://cdn.simpleicons.org/firebase/DD2C00" },
    { name: "Supabase", category: "Tools", icon: "https://cdn.simpleicons.org/supabase/3ECF8E" },
    { name: "Figma", category: "Tools", icon: "https://cdn.simpleicons.org/figma/F24E1E" },
    { name: "Unity", category: "Tools", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/unity/unity-original.svg" },
    { name: "Arduino", category: "Tools", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/arduino/arduino-original.svg" },
    { name: "Composer", category: "Tools", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/composer/composer-original.svg" },
    { name: "Power Automate", category: "Tools", icon: typeof powerAutomateIcon === "string" ? powerAutomateIcon : powerAutomateIcon.src },
    { name: "N8N", category: "Tools", icon: "https://cdn.simpleicons.org/n8n/EA4B71" },
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
                                <div
                                    className="arsenal-card-icon"
                                    style={{
                                        overflow: "hidden",
                                        background: skill.icon ? "transparent" : "",
                                        color: skill.icon ? "transparent" : ""
                                    }}
                                >
                                    {skill.icon ? (
                                        <img
                                            src={skill.icon}
                                            alt={skill.name}
                                            width="40"
                                            height="40"
                                            style={{ objectFit: "contain" }}
                                        />
                                    ) : (
                                        getInitials(skill.name)
                                    )}
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
