import { motion } from 'framer-motion';
import profileImg from '../../assets/profile.jpg';

export const About = () => {
    return (
        <section id="about" style={{ padding: '6rem 0' }}>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
                    <span style={{ color: 'var(--accent-primary)', fontSize: '1.5rem', fontWeight: 'bold' }}>01.</span>
                    <h2 style={{ fontSize: '2rem', fontWeight: '700', color: 'var(--text-primary)' }}>About Me</h2>
                    <div style={{ flex: 1, height: '1px', background: 'var(--card-border)', marginLeft: '1rem' }}></div>
                </div>

                <div className="about-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '4rem' }}>
                    <style>{`
                        @media (max-width: 768px) {
                            .about-grid { gap: 3rem !important; }
                        }
                    `}</style>
                    <div style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', lineHeight: 1.7 }}>
                        <p style={{ marginBottom: '1rem' }}>
                            Hello! My name is Bogdan and I enjoy creating things that live on the internet and in the cloud.
                            My interest in AI started back in college when I decided to try training a simple neural network to play a game —
                            turns out hacking together custom models taught me a lot about both data and software engineering.
                        </p>
                        <p style={{ marginBottom: '1rem' }}>
                            Fast-forward to today, I've had the privilege of working on various projects involving
                            <span style={{ color: 'var(--accent-primary)' }}> Natural Language Processing</span>,
                            <span style={{ color: 'var(--accent-primary)' }}> Computer Vision</span>, and
                            <span style={{ color: 'var(--accent-primary)' }}> Generative AI</span>.
                        </p>
                        <p>
                            I am constantly learning and keeping up with the latest advancements in the field to build
                            smarter and more efficient systems.
                        </p>
                    </div>

                    <div style={{ position: 'relative' }}>
                        <div style={{
                            width: '100%',
                            maxWidth: '300px',
                            aspectRatio: '1/1',
                            margin: '0 auto',
                            position: 'relative',
                        }}>
                            <div style={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                width: '100%',
                                height: '100%',
                                border: '2px solid var(--accent-primary)',
                                borderRadius: '4px',
                                transform: 'translate(20px, 20px)',
                                zIndex: 0
                            }}></div>
                            <div style={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                width: '100%',
                                height: '100%',
                                background: '#dbeafe', // Solid Blue Tint (looks like accent-glow but opaque)
                                borderRadius: '4px',
                                zIndex: 1,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                overflow: 'hidden',
                                border: '1px solid rgba(0,0,0,0.1)'
                            }}>
                                <img
                                    src={profileImg}
                                    alt="Bogdan"
                                    style={{
                                        width: '100%',
                                        height: '100%',
                                        objectFit: 'cover',
                                        transform: 'scale(2.5)',
                                        transformOrigin: '35% 50%'
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </section>
    );
};
