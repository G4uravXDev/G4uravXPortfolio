"use client";

import { useEffect } from "react";
import Lenis from "lenis";

export default function SmoothScroll() {
    useEffect(() => {
        const lenis = new Lenis({
            duration: 1.2,
            easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            touchMultiplier: 2,
        });

        function raf(time: number) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);

        function onAnchorClick(e: MouseEvent) {
            const target = e.target as HTMLElement | null;
            const anchor = target?.closest?.("a") as HTMLAnchorElement | null;
            if (!anchor) return;

            // Only intercept same-page hash navigation.
            // Supports href="#about" and href="/#about".
            const rawHref = anchor.getAttribute("href") ?? "";
            if (!rawHref.includes("#")) return;

            let hash = "";
            try {
                const url = new URL(rawHref, window.location.href);
                const samePage =
                    url.origin === window.location.origin &&
                    url.pathname === window.location.pathname;
                if (!samePage) return;
                hash = url.hash;
            } catch {
                // If URL parsing fails, fall back to direct hash handling.
                hash = rawHref.startsWith("#") ? rawHref : "";
            }

            if (!hash.startsWith("#")) return;

            const id = hash.slice(1);
            if (!id) return;

            const el = document.getElementById(id);
            if (!el) return;

            e.preventDefault();

            const rect = el.getBoundingClientRect();
            const viewportHeight = window.innerHeight;
            // Instead of centering the whole section (often too tall),
            // frame the section heading nicely like your reference:
            // scroll a bit past the section start so the heading sits near
            // the top and the first content row is visible.
            const offset = Math.round(viewportHeight * 0.15);

            // Use element-based scrollTo (works better with Lenis).
            lenis.scrollTo(el, { offset, duration: 1.2 });
        }

        document.addEventListener("click", onAnchorClick, true);

        return () => {
            document.removeEventListener("click", onAnchorClick, true);
            lenis.destroy();
        };
    }, []);

    return null;
}
