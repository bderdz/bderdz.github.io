import { useState } from 'react';
import { motion } from 'framer-motion';

export const Contact = () => {
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSent, setIsSent] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        // Simulate sending
        setTimeout(() => {
            setIsSubmitting(false);
            setIsSent(true);
            setFormState({ name: '', email: '', message: '' });
            setTimeout(() => setIsSent(false), 3000);
        }, 1500);
    };

    const handleChange = (e) => {
        setFormState({ ...formState, [e.target.name]: e.target.value });
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
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem' }}>
                            <div>
                                <label style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formState.name}
                                    onChange={handleChange}
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
                                    value={formState.email}
                                    onChange={handleChange}
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
                                value={formState.message}
                                onChange={handleChange}
                                required
                                style={{ ...inputStyle, resize: 'vertical' }}
                                onFocus={(e) => e.target.style.borderColor = 'var(--accent-primary)'}
                                onBlur={(e) => e.target.style.borderColor = 'var(--card-border)'}
                            ></textarea>
                        </div>

                        <motion.button
                            type="submit"
                            disabled={isSubmitting}
                            whileHover={{ scale: 1.05, backgroundColor: 'rgba(59, 130, 246, 0.1)' }}
                            whileTap={{ scale: 0.95 }}
                            style={{
                                padding: '1.25rem',
                                backgroundColor: 'transparent',
                                border: '1px solid var(--accent-primary)',
                                color: 'var(--accent-primary)',
                                borderRadius: '4px',
                                fontSize: '1rem',
                                fontWeight: '600',
                                cursor: 'pointer',
                                marginTop: '1rem',
                                transition: 'all 0.3s'
                            }}
                        >
                            {isSubmitting ? 'Sending...' : isSent ? 'Message Sent!' : 'Send Message'}
                        </motion.button>
                    </form>
                </div>
            </motion.div>
        </section>
    );
};
