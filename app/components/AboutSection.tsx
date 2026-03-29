"use client";

import RevealOnScroll from "./RevealOnScroll";
import TechnicalArsenal from "./TechnicalArsenal";

const milestones = [
    { title: "Multiple Production APIs", desc: "Serving thousands of requests." },
    { title: "PostgreSQL Migration", desc: "From MongoDB to production-grade SQL." },
    { title: "Event Management Platform", desc: "Full-stack system built & deployed." },
    { title: "100+ DSA Problems Solved", desc: "Algorithm mastery on LeetCode." },
    { title: "Backend Architecture", desc: "Scalable microservices design." },
    { title: "Open Source Contributor", desc: "Active in developer community." },
];

export default function AboutSection() {
    return (
        <>
            {/* Fragments / Milestones Marquee */}
            <section className="marquee-section" id="milestones">
                <div className="section-container">
                    <RevealOnScroll>
                        <p className="section-label">Milestones</p>
                    </RevealOnScroll>
                    <RevealOnScroll delay={1}>
                        <h1 className="section-title">
                            Fragments <em>of me.</em>
                        </h1>
                    </RevealOnScroll>
                </div>

                <div className="marquee-wrapper">
                    {[...milestones, ...milestones].map((m, i) => (
                        <div className="marquee-item" key={i}>
                            <h4>{m.title}</h4>
                            <p>{m.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* About / Personal Story */}
            <section className="about-section" id="about">
                <div className="section-container">
                    <div className="about-grid">
                        <RevealOnScroll>
                            <div className="about-image-container">
                                <img src="/mee.jpg" alt="Gaurav portrait" />
                            </div>
                        </RevealOnScroll>

                        <div>
                            <div className="about-highlights">
                                <RevealOnScroll>
                                    <div className="about-highlight-item">
                                        <h3>Backend-first mindset</h3>
                                        <p>
                                            Building robust, scalable server-side architectures with a
                                            deep understanding of databases, APIs, and system design.
                                        </p>
                                    </div>
                                </RevealOnScroll>

                                <RevealOnScroll delay={1}>
                                    <div className="about-highlight-item">
                                        <h3>Full-stack capable</h3>
                                        <p>
                                            While my passion is the backend, I build complete products —
                                            from React.js frontends to PostgreSQL databases.
                                        </p>
                                    </div>
                                </RevealOnScroll>

                                <RevealOnScroll delay={2}>
                                    <div className="about-highlight-item">
                                        <h3>Problem solver at heart</h3>
                                        <p>
                                            Competitive programming enthusiast with 120+ LeetCode
                                            solutions. I love breaking down complex problems into
                                            elegant solutions.
                                        </p>
                                    </div>
                                </RevealOnScroll>

                                <RevealOnScroll delay={3}>
                                    <div className="about-highlight-item">
                                        <h3>Continuous learner</h3>
                                        <p>
                                            From migrating databases to architecting microservices, I
                                            thrive on learning new technologies and applying them to
                                            real-world challenges.
                                        </p>
                                    </div>
                                </RevealOnScroll>
                            </div>

                            <RevealOnScroll delay={4}>
                                <p className="about-bio">
                                    I&apos;m a Software Engineer with a deep passion for backend
                                    development and system architecture. My journey started with a
                                    curiosity for how things work under the hood — from data
                                    structures to database internals. I&apos;ve built and
                                    maintained production-grade APIs, migrated entire database
                                    systems (MongoDB → PostgreSQL), and designed scalable
                                    architectures. I believe great software is built not just with
                                    code, but with thoughtful design decisions that stand the test
                                    of scale.
                                </p>
                                <p className="about-love">I love what I build!</p>
                            </RevealOnScroll>
                        </div>
                    </div>
                </div>
            </section>
            {/* Technical Arsenal Section */}
            <TechnicalArsenal />

        </>
    );
}
