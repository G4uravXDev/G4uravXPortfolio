"use client";

import { useEffect, useRef, useState } from "react";

export default function NavBar() {
    const [inHero, setInHero] = useState(true);
    const [scrollingDown, setScrollingDown] = useState(true);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const lastYRef = useRef(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentY = window.scrollY || window.pageYOffset;
            const lastY = lastYRef.current;
            if (Math.abs(currentY - lastY) < 4) return;

            setScrollingDown(currentY > lastY);
            lastYRef.current = currentY;

            const hero = document.getElementById("hero");
            if (hero) {
                // Switch to "scrolled" state once hero is mostly out of view.
                const heroBottom = hero.getBoundingClientRect().bottom;
                setInHero(heroBottom > 120);
            } else {
                setInHero(false);
            }
        };

        handleScroll();
        window.addEventListener("scroll", handleScroll, { passive: true });
        window.addEventListener("resize", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
            window.removeEventListener("resize", handleScroll);
        };
    }, []);

    useEffect(() => {
        const closeMenu = () => setIsMenuOpen(false);
        window.addEventListener("resize", closeMenu);
        return () => window.removeEventListener("resize", closeMenu);
    }, []);

    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }

        return () => {
            document.body.style.overflow = "";
        };
    }, [isMenuOpen]);

    const stateClass = inHero ? "nav--hero" : "nav--scrolled";

    return (
        <header className={`nav ${stateClass}`}>
            <div className="nav-inner">
                <div className="nav-side nav-side-left">
                    <nav className="nav-links" aria-label="Primary navigation">
                        <a href="#about">About</a>
                        <a href="#technical-arsenal">Skills</a>
                        {/* <a href="#experience">Experience</a> */}
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

                <button
                    type="button"
                    className={`nav-hamburger ${isMenuOpen ? "is-open" : ""}`}
                    aria-label="Toggle navigation menu"
                    aria-expanded={isMenuOpen}
                    onClick={() => setIsMenuOpen((prev) => !prev)}
                >
                    <span />
                    <span />
                </button>
            </div>

            <div className={`nav-mobile-menu ${isMenuOpen ? "is-open" : ""}`}>
                <a href="#about" onClick={() => setIsMenuOpen(false)}>About</a>
                <a href="#technical-arsenal" onClick={() => setIsMenuOpen(false)}>Skills</a>
                <a href="#experience" onClick={() => setIsMenuOpen(false)}>Experience</a>
                <a href="#projects" onClick={() => setIsMenuOpen(false)}>Projects</a>
                <a href="#certifications" onClick={() => setIsMenuOpen(false)}>Certifications</a>
                <a href="#awards" onClick={() => setIsMenuOpen(false)}>Awards</a>
                <a href="#education" onClick={() => setIsMenuOpen(false)}>Education</a>
                <a href="/GauravNayyarResumeV1.pdf" download onClick={() => setIsMenuOpen(false)}>
                    Resume
                </a>
                <a href="#contact" onClick={() => setIsMenuOpen(false)}>Contact</a>
            </div>

            <button
                type="button"
                className={`nav-mobile-backdrop ${isMenuOpen ? "is-open" : ""}`}
                aria-hidden={!isMenuOpen}
                tabIndex={-1}
                onClick={() => setIsMenuOpen(false)}
            />
        </header>
    );
}

