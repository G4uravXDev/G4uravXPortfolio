"use client";

import { useState } from "react";
import Image from "next/image";
import RevealOnScroll from "./RevealOnScroll";

import sqlCert from "../Assests/certificates/ConceptsinSQL.png";
import uxCert from "../Assests/certificates/FoundationsofUserExperience(UX)Design.png";
import reactCert from "../Assests/certificates/WebDevelopmentinReact.jsDevelopmentBasics.png";
import cloudCert from "../Assests/certificates/cloudcomputing.png";



const education = [
    {
        school: "Lovely Professional University",
        degree: "Bachelor of Technology",
        major: "Computer Science and Engineering: CGPA: 7.3",
        location: "Punjab, India",
        duration: "Aug' 23 — Present",
    },
    {
        school: "Valley View School",
        degree: "Intermediate: PCM",
        major: "Percentage: 63%",
        location: "Jamshedpur, India",
        duration: "Apr' 22 — Mar' 23",
    },
    {
        school: "Valley View School",
        degree: "Matriculation",
        major: "Percentage: 83%",
        location: "Jamshedpur, India",
        duration: "Apr' 20 — Mar' 21",
    },
];

const tools = [
    "Java",
    "Node.js",
    "TypeScript",
    "Python",
    "React",
    "Next.js",
    "Express.js",
    "Laravel",
    "PostgreSQL",
    "MongoDB",
    "Redis",
    "Docker",
    "Git",
    "Linux",
    "REST APIs",
    "GraphQL",
    "AWS",
    "Nginx",
    "Sequelize",
    "Prisma",
    "Framer Motion",
    "Three.js",
    "Tailwind CSS",
    "Figma",
];

const awards = [
    {
        title: "Management Lead — AWS Cloud Community",
        org: "Delivering and managing 10+ technical sessions on AWS, cloud fundamentals, and modern web development.",
        year: "Aug 2025",
    },
    {
        title: "Core Member — Encrpty Edge",
        org: "Driving visual strategy and leading graphic design initiatives at Encrpty Edge, ensuring high-quality branding and engaging user experiences.",
        year: "Oct 2025",
    },
    {
        title: "AI/ML Track Winner — InnovateX Hackathon",
        org: "Organized by IIIT Kalyani, for building an innovative AI/ML solution as part of team LogicXDev, competing against top student developers.",
        year: "Hackathon",
    },
    {
        title: "120+ Algorithmic Problems on LeetCode",
        org: "Focusing on data structures, dynamic programming, graph algorithms, and optimization techniques.",
        year: "Ongoing",
    },
];


const certifications = [
    {
        title: "Cloud Computing",
        org: "Certificate",
        year: "October 2025",
        image: cloudCert,
        issuedBy: "NPTEL / Great Learning",
        monthYear: "October 2025",
        skills: ["Cloud Architecture", "Deployment Strategies", "Infrastructure as Code"],
        link: "https://archive.nptel.ac.in/noc/Ecertificate/?q=NPTEL25CS107S145870078310493199"
    },
    {
        title: "Web Development in React.js",
        org: "Certificate",
        year: "December 2025",
        image: reactCert,
        issuedBy: "Coursera",
        monthYear: "December 2025",
        skills: ["React.js", "Component Design", "State Management", "Hooks"],
        link: "https://www.coursera.org/account/accomplishments/verify/HKV9D6R76NJU"
    },
    {
        title: "Concepts in SQL",
        org: "Certificate",
        year: "November 2025",
        image: sqlCert,
        issuedBy: "HackerRank",
        monthYear: "November 2025",
        skills: ["Database Management", "SQL Join Types", "Query Optimization", "Data Modeling"],
        link: "https://www.coursera.org/account/accomplishments/verify/TC5SWNYI5W5D"
    },
    {
        title: "Foundations of UX Design",
        org: "Certificate",
        year: "November 2025",
        image: uxCert,
        issuedBy: "Google",
        monthYear: "November 2025",
        skills: ["UX Research", "Wireframing", "Figma", "User-Centered Design"],
        link: "https://www.coursera.org/account/accomplishments/verify/4ZZ15Q8CLXNL"
    },
];

const CertificateCard = ({ cert, index }: any) => {
    const [isFlipped, setIsFlipped] = useState(false);
    return (
        <RevealOnScroll delay={index * 0.12}>
            <div
                className={`cert-card ${isFlipped ? 'is-flipped' : ''}`}
                onClick={() => setIsFlipped(!isFlipped)}
            >
                <div className="cert-card-inner">
                    <div className="cert-card-front">
                        <div className="cert-card-img">
                            <Image
                                src={cert.image}
                                alt={cert.title}
                                fill
                                style={{ objectFit: "cover" }}
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            />
                        </div>
                        <div className="cert-card-content">
                            <div className="cert-card-header">
                                <h3 className="cert-card-title">{cert.title}</h3>
                                <span className="cert-card-year">{cert.year}</span>
                            </div>
                            <p className="cert-card-org">{cert.org}</p>
                        </div>
                    </div>
                    <div className="cert-card-back">
                        <h3 className="cert-card-back-title">{cert.title}</h3>
                        <p className="cert-card-back-issued">Issued by: {cert.issuedBy}</p>
                        <p className="cert-card-back-date">{cert.monthYear}</p>
                        <div className="cert-card-back-skills">
                            {cert.skills.map((skill: string, idx: number) => (
                                <span key={idx}>{skill}</span>
                            ))}
                        </div>
                        <a
                            href={cert.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="cert-card-btn"
                            onClick={(e) => {
                                e.stopPropagation();
                                // Optional: logic to open link if valid
                            }}
                        >
                            View Certificate
                        </a>
                    </div>
                </div>
            </div>
        </RevealOnScroll>
    );
};

export default function ExperienceSection() {
    return (
        <>
            {/* Certifications */}
            <section className="certs-section" id="certifications">
                <div className="section-container">
                    <RevealOnScroll>
                        <p className="section-label">Certifications</p>
                    </RevealOnScroll>
                    <RevealOnScroll delay={0.15}>
                        <h1 className="section-title">
                            Certifications.
                        </h1>
                    </RevealOnScroll>

                    <div className="certs-grid">
                        {certifications.map((cert, i) => (
                            <CertificateCard key={i} cert={cert} index={i} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Awards & Achievements */}
            <section className="awards-section" id="awards">
                <div className="section-container">
                    <RevealOnScroll>
                        <p className="section-label">Recognition</p>
                    </RevealOnScroll>
                    <RevealOnScroll delay={0.15}>
                        <h1 className="section-title">
                            Awards & <em>achievements.</em>
                        </h1>
                    </RevealOnScroll>

                    <div className="awards-list">
                        {awards.map((award, i) => (
                            <RevealOnScroll key={i} delay={i * 0.12}>
                                <div className="awards-row">
                                    <span className="awards-row-year">{award.year}</span>
                                    <div className="awards-row-body">
                                        <h3 className="awards-row-title">{award.title}</h3>
                                        <p className="awards-row-desc">{award.org}</p>
                                    </div>
                                </div>
                            </RevealOnScroll>
                        ))}
                    </div>
                </div>
            </section>
            {/* Education */}
            <section className="section" id="education">
                <div className="section-container">
                    <RevealOnScroll>
                        <p className="section-label">Learning</p>
                    </RevealOnScroll>
                    <RevealOnScroll delay={1}>
                        <h1 className="section-title">Education.</h1>
                    </RevealOnScroll>

                    <div className="edu-list">
                        {education.map((edu, i) => (
                            <RevealOnScroll key={i} delay={i * 0.1}>
                                <div className="edu-row">
                                    <div className="edu-row-left">
                                        <h3 className="edu-school">{edu.school}</h3>
                                        <div className="edu-degree">{edu.degree}</div>
                                        <div className="edu-major">{edu.major}</div>
                                    </div>
                                    <div className="edu-row-right">
                                        <div className="edu-location">{edu.location}</div>
                                        <div className="edu-duration">{edu.duration}</div>
                                    </div>
                                </div>
                            </RevealOnScroll>
                        ))}
                    </div>
                </div>
            </section>



            {/* <hr className="section-divider" /> */}

        </>
    );
}
