"use client";

import Link from "next/link";
import { useState } from "react";

export default function ContactPage() {
    const [status, setStatus] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);
        setStatus("Sending message...");

        const form = e.target as HTMLFormElement;
        const formData = new FormData(form);
        const data = {
            name: formData.get("name"),
            email: formData.get("email"),
            message: formData.get("message"),
        };

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            });

            if (response.ok) {
                setStatus("Message sent successfully!");
                form.reset();
            } else {
                setStatus("Failed to send message. Please try again.");
            }
        } catch (error) {
            setStatus("An error occurred. Please try again later.");
        } finally {
            setIsSubmitting(false);
            setTimeout(() => {
                setStatus("");
            }, 4000);
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

                <div className="form-card">
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
                        
                        {status && <div className="form-status">{status}</div>}
                    </form>
                </div>
            </div>
        </main>
    );
}
