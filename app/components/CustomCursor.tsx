"use client";

import { useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
    const cursorRef = useRef<HTMLDivElement>(null);
    const cursorX = useMotionValue(-100);
    const cursorY = useMotionValue(-100);

    const springConfig = { damping: 25, stiffness: 300 };
    const cursorXSpring = useSpring(cursorX, springConfig);
    const cursorYSpring = useSpring(cursorY, springConfig);

    useEffect(() => {
        const isTouchDevice = "ontouchstart" in window;
        if (isTouchDevice) return;

        const moveCursor = (e: MouseEvent) => {
            cursorX.set(e.clientX - 8);
            cursorY.set(e.clientY - 8);
        };

        window.addEventListener("mousemove", moveCursor);
        return () => window.removeEventListener("mousemove", moveCursor);
    }, [cursorX, cursorY]);

    return (
        <motion.div
            ref={cursorRef}
            style={{
                x: cursorXSpring,
                y: cursorYSpring,
                position: "fixed",
                width: 16,
                height: 16,
                borderRadius: "50%",
                border: "1px solid rgba(200, 255, 0, 0.5)",
                pointerEvents: "none",
                zIndex: 99999,
                mixBlendMode: "difference",
            }}
        />
    );
}
