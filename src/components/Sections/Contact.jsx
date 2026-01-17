import { useState } from 'react';
import { motion } from 'framer-motion';

export const Contact = () => {
    // idle, sending, success, error
    const [status, setStatus] = useState("idle");

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus("sending");

        const form = e.target;
        const data = new FormData(form);

        try {
            const res = await fetch("https://formspree.io/f/xaqqqzwo", {
                method: "POST",
                body: data,
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (res.ok) {
                setStatus("success");
                form.reset();
                // Reset success message after 5 seconds to allow sending another
                setTimeout(() => setStatus("idle"), 5000);
            } else {
                setStatus("error");
            }
        } catch (error) {
            setStatus("error");
        }
    };

    const inputStyle = {
        width: '100%',
        padding: '1rem',
        backgroundColor: '#ffffff', // Pure white input
        border: '1px solid rgba(0, 0, 0, 0.15)', // Visible border
        borderRadius: '4px',
        color: 'var(--text-primary)',
        fontFamily: 'var(--font-main)',
        fontSize: '1rem',
        outline: 'none',
        marginTop: '0.5rem',
        transition: 'border-color 0.3s'
    };

    return (
        <section id="contact" style={{
            padding: '6rem 0',
            minHeight: '80vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            position: 'relative'
        }}>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                style={{ width: '100%' }} // Full width container
            >
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '4rem' }}>
                    <span style={{ color: 'var(--accent-primary)', fontSize: '1.5rem', fontWeight: 'bold' }}>04.</span>
                    <h2 style={{ fontSize: '2rem', fontWeight: '700', color: 'var(--text-primary)' }}>What's Next?</h2>
                    <div style={{ flex: 1, height: '1px', background: 'var(--card-border)', marginLeft: '1rem' }}></div>
                </div>

                <div style={{ maxWidth: '600px', margin: '0 auto', padding: '0 1rem' }}>
                    <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                        <h2 style={{ fontSize: '3rem', fontWeight: '700', color: 'var(--text-primary)', marginBottom: '1rem' }}>Get In Touch</h2>
                        <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem' }}>
                            Have a question or want to work together? Drop me a message!
                        </p>
                    </div>

                    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                        {/* Hidden Gotcha for Spam Protection */}
                        <input type="text" name="_gotcha" style={{ display: "none" }} />

                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem' }}>
                            <div>
                                <label style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    required
                                    style={inputStyle}
                                    onFocus={(e) => e.target.style.borderColor = 'var(--accent-primary)'}
                                    onBlur={(e) => e.target.style.borderColor = 'var(--card-border)'}
                                />
                            </div>
                            <div>
                                <label style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    required
                                    style={inputStyle}
                                    onFocus={(e) => e.target.style.borderColor = 'var(--accent-primary)'}
                                    onBlur={(e) => e.target.style.borderColor = 'var(--card-border)'}
                                />
                            </div>
                        </div>
                        <div>
                            <label style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Message</label>
                            <textarea
                                name="message"
                                rows="5"
                                required
                                style={{ ...inputStyle, resize: 'vertical' }}
                                onFocus={(e) => e.target.style.borderColor = 'var(--accent-primary)'}
                                onBlur={(e) => e.target.style.borderColor = 'var(--card-border)'}
                            ></textarea>
                        </div>

                        <motion.button
                            type="submit"
                            disabled={status === "sending"}
                            whileHover={{ scale: 1.05, backgroundColor: 'rgba(59, 130, 246, 0.1)' }}
                            whileTap={{ scale: 0.95 }}
                            style={{
                                padding: '1.25rem',
                                backgroundColor: status === "success" ? '#10b981' : 'transparent', // Green if success
                                border: status === "success" ? '1px solid #10b981' : '1px solid var(--accent-primary)',
                                color: status === "success" ? '#ffffff' : 'var(--accent-primary)',
                                borderRadius: '4px',
                                fontSize: '1rem',
                                fontWeight: '600',
                                cursor: status === "sending" ? 'not-allowed' : 'pointer',
                                marginTop: '1rem',
                                transition: 'all 0.3s'
                            }}
                        >
                            {status === "sending" ? "Wysyłanie..." : status === "success" ? "Wiadomość wysłana" : "Wyślij"}
                        </motion.button>

                        {status === "error" && (
                            <p style={{ color: '#ef4444', textAlign: 'center', marginTop: '1rem' }}>
                                Błąd wysyłki. Spróbuj ponownie.
                            </p>
                        )}
                    </form>
                </div>
            </motion.div>
        </section>
    );
};
