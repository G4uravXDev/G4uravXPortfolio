"use client";

import { motion } from "framer-motion";

export default function HeroSection() {
    return (
        <section className="hero" id="hero">
            <div className="hero-inner">
                <div className="hero-content">
                    <motion.div
                        className="hero-location"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 1.2 }}
                    />

                    <motion.h1
                        className="hero-title"
                        initial={{ opacity: 0, y: 60 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 1.4, ease: [0.25, 0.46, 0.45, 0.94] }}
                    >
                        Backend Developer
                        <br />
                        <em>& Software Engineer</em>
                    </motion.h1>

                    <motion.p
                        className="hero-subtitle"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 1.8 }}
                    >
                        Hi, I&apos;m Gaurav, a Software Engineer with a passion for building
                        scalable systems, robust APIs, and modern web applications.
                    </motion.p>
                </div>

                <motion.div
                    className="hero-image"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.9, delay: 1.6 }}
                >
                    <div className="about-image-container">
                        <img src="/GauravNayyar.jpg" alt="Gaurav portrait" />
                    </div>
                </motion.div>
            </div>

            <motion.div
                className="hero-scroll-indicator"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 2.4 }}
            >
                <span>Scroll</span>
                <div className="scroll-line" />
            </motion.div>
        </section>
    );
}
