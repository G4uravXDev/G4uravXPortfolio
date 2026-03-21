"use client";

import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ContactPage() {
    const [status, setStatus] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);
        setStatus("Sending message...");

        const form = e.target as HTMLFormElement;
        const formData = new FormData(form);
        const data = {
            access_key: process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY,
            name: formData.get("name"),
            email: formData.get("email"),
            message: formData.get("message"),
            subject: `New Portfolio Contact: ${formData.get("name")}`,
        };

        if (!data.access_key) {
            setStatus("Server misconfiguration. Missing API key.");
            setIsSubmitting(false);
            return;
        }

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json"
                },
                body: JSON.stringify(data),
            });

            if (response.ok) {
                setIsSuccess(true);
                form.reset();
            } else {
                const errData = await response.json().catch(() => ({}));
                setStatus(errData.message || "Failed to send message. Please try again.");
            }
        } catch (error) {
            setStatus("An error occurred. Please try again later.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <main className="contact-page">

            <div className="contact-form-container">
                <Link href="/#contact" className="back-link">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="19" y1="12" x2="5" y2="12"></line>
                        <polyline points="12 19 5 12 12 5"></polyline>
                    </svg>
                    Back to Portfolio
                </Link>

                <div className="contact-layout">
                    <div className="form-card" style={{ position: "relative", minHeight: "500px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
                        <AnimatePresence mode="wait">
                            {isSuccess ? (
                                <motion.div
                                    key="success"
                                    initial={{ opacity: 0, scale: 0.95, y: 10 }}
                                    animate={{ opacity: 1, scale: 1, y: 0 }}
                                    exit={{ opacity: 0, scale: 0.95, y: -10 }}
                                    transition={{ duration: 0.4, ease: "easeOut" }}
                                    style={{ textAlign: "center", padding: "40px 0", width: "100%" }}
                                >
                                    <div style={{
                                        width: "64px", height: "64px", background: "rgba(200, 255, 0, 0.1)",
                                        borderRadius: "50%", display: "flex", alignItems: "center",
                                        justifyContent: "center", margin: "0 auto 24px", color: "var(--accent)"
                                    }}>
                                        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                                            <polyline points="22 4 12 14.01 9 11.01"></polyline>
                                        </svg>
                                    </div>
                                    <h1 className="form-title" style={{ marginBottom: "16px" }}>Message Sent!</h1>
                                    <p className="form-subtitle" style={{ marginBottom: "32px", fontSize: "15px" }}>
                                        Thank you for reaching out. I have received your message and will get back to you as soon as possible.
                                    </p>
                                    <button onClick={() => { setIsSuccess(false); setStatus(""); }} className="form-submit-btn" style={{ width: "100%" }}>
                                        Send Another Message
                                    </button>
                                </motion.div>
                            ) : (
                                <motion.div
                                    key="form"
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    transition={{ duration: 0.4, ease: "easeOut" }}
                                    style={{ width: "100%" }}
                                >
                                    <h1 className="form-title">Get in Touch</h1>
                                    <p className="form-subtitle">Fill out the form below and I&apos;ll get back to you as soon as possible.</p>

                                    <form onSubmit={handleSubmit} className="contact-form">
                                        <div className="form-group">
                                            <label htmlFor="name" className="form-label">Name</label>
                                            <input
                                                type="text"
                                                id="name"
                                                name="name"
                                                className="form-input"
                                                placeholder="Your name"
                                                required
                                            />
                                        </div>

                                        <div className="form-group">
                                            <label htmlFor="email" className="form-label">Email</label>
                                            <input
                                                type="email"
                                                id="email"
                                                name="email"
                                                className="form-input"
                                                placeholder="your.email@example.com"
                                                required
                                            />
                                        </div>

                                        <div className="form-group">
                                            <label htmlFor="message" className="form-label">Message</label>
                                            <textarea
                                                id="message"
                                                name="message"
                                                className="form-input form-textarea"
                                                placeholder="Your message..."
                                                rows={5}
                                                required
                                            ></textarea>
                                        </div>

                                        <button type="submit" className="form-submit-btn" disabled={isSubmitting}>
                                            {isSubmitting ? "Sending..." : "Send Message"}
                                        </button>

                                        {status && (
                                            <motion.div
                                                initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                                                className="form-status"
                                                style={{ color: status.toLowerCase().includes("fail") || status.toLowerCase().includes("error") || status.includes("misconfiguration") ? "#ff4444" : "var(--accent)" }}
                                            >
                                                {status}
                                            </motion.div>
                                        )}
                                    </form>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

                    <div className="contact-info-card">
                        <h2 className="info-title">Contact Information</h2>

                        <div className="info-list">
                            <div className="info-item-row">
                                <div className="info-icon">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                                </div>
                                <div className="info-text">
                                    <h3>Email</h3>
                                    <p><a href="mailto:gauravnayyar8603@gmail.com">gauravnayyar8603@gmail.com</a></p>
                                </div>
                            </div>

                            <div className="info-item-row">
                                <div className="info-icon">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                                </div>
                                <div className="info-text">
                                    <h3>Phone</h3>
                                    <p><a href="tel:+916287231231">+91 62872 31231</a></p>
                                </div>
                            </div>

                            <div className="info-item-row">
                                <div className="info-icon">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg>
                                </div>
                                <div className="info-text">
                                    <h3>LinkedIn</h3>
                                    <p><a href="https://www.linkedin.com/in/nayyar-gaurav/" target="_blank" rel="noopener noreferrer">linkedin.com/in/nayyar-gaurav/</a></p>
                                </div>
                            </div>

                            <div className="info-item-row">
                                <div className="info-icon">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>
                                </div>
                                <div className="info-text">
                                    <h3>GitHub</h3>
                                    <p><a href="https://github.com/G4uravXDev" target="_blank" rel="noopener noreferrer">github.com/G4uravXDev</a></p>
                                </div>
                            </div>
                        </div>

                        {/* <hr className="info-divider" /> */}

                        <div className="info-follow">
                            {/* <h3>Follow Me</h3>
                            <div className="info-socials">
                                <a href="#" className="social-circle">T</a>
                                <a href="#" className="social-circle">I</a>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
