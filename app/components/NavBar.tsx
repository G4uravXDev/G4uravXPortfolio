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

                    </nav>
                </div>

                <div className="nav-center">
                    <a href="#hero" className="nav-brand" aria-label="Go to top">
                        GAURAV
                    </a>
                </div>

                <div className="nav-side nav-side-right">
                    <div><nav className="nav-links" aria-label="Primary navigation">
                        <a href="#certifications">Certifications</a>
                        <a href="#awards">Awards</a>
                        <a href="#education">Education</a>

                    </nav>
                    </div>
                    <a href="#contact" className="nav-cta">
                        Contact
                    </a>
                </div>
            </div>
        </header>
    );
}

