"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function LoadingScreen() {
    const [progress, setProgress] = useState(0);
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const timer = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) {
                    clearInterval(timer);
                    setTimeout(() => setIsVisible(false), 400);
                    return 100;
                }
                return prev + Math.random() * 15 + 5;
            });
        }, 100);

        return () => clearInterval(timer);
    }, []);

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    className="loading-screen"
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
                >
                    <motion.div
                        className="loading-text"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                    >
                        Loading amazing data...
                    </motion.div>
                    <div className="loading-bar">
                        <div
                            className="loading-bar-fill"
                            style={{ width: `${Math.min(progress, 100)}%` }}
                        />
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
