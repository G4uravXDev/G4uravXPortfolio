"use client";

import { useEffect, useRef, useState } from "react";

export default function NavBar() {
    const [inHero, setInHero] = useState(true);
    const [scrollingDown, setScrollingDown] = useState(true);
    const lastYRef = useRef(0);

    useEffect(() => {
        const hero = document.getElementById("hero");
        if (!hero) {
            setInHero(false);
            return;
        }

        const observer = new IntersectionObserver(
            ([entry]) => {
                // While hero is visible: keep nav blended/transparent.
                // Once user scrolls past hero: make nav opaque.
                setInHero(entry.isIntersecting);
            },
            {
                root: null,
                threshold: 0.15,
            }
        );

        observer.observe(hero);
        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            const currentY = window.scrollY || window.pageYOffset;
            const lastY = lastYRef.current;
            if (Math.abs(currentY - lastY) < 4) return;

            setScrollingDown(currentY > lastY);
            lastYRef.current = currentY;
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const stateClass = inHero ? "nav--hero" : "nav--scrolled";
    const motionClass = !inHero
        ? scrollingDown
            ? "nav--slide-hidden"
            : "nav--slide-visible"
        : "";

    return (
        <header className={`nav ${stateClass} ${motionClass}`}>
            <div className="nav-inner">
                <div className="nav-side nav-side-left">
                    <nav className="nav-links" aria-label="Primary navigation">
                        <a href="#about">About</a>
                        <a href="#technical-arsenal">Skills</a>
                        <a href="#experience">Experience</a>
                        <a href="#projects">Projects</a>
                        <a href="#certifications">Certifications</a>
                    </nav>
                </div>

                <div className="nav-center">
                    <a href="#hero" className="nav-brand" aria-label="Go to top">
                        GAURAV
                    </a>
                </div>

                <div className="nav-side nav-side-right">
                    <div><nav className="nav-links" aria-label="Primary navigation">
                        <a href="#awards">Awards</a>
                        <a href="#education">Education</a>

                    </nav>
                    </div>
                    <a href="/GauravNayyarResumeV1.pdf" download className="nav-cta nav-cta--resume">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                            <polyline points="7 10 12 15 17 10" />
                            <line x1="12" y1="15" x2="12" y2="3" />
                        </svg>
                        Resume
                    </a>
                    <a href="#contact" className="nav-cta">
                        Contact
                    </a>
                </div>
            </div>
        </header>
    );
}

