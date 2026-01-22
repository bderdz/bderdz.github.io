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
                            I’m a Junior AI Engineer and a third-year Computer Science student at Maria Curie-Skłodowska University (UMCS), passionate about building accessible and practical AI-powered solutions.
                        </p>
                        <p style={{ marginBottom: '1rem' }}>
                            My main focus is on <span style={{ color: 'var(--accent-primary)', fontWeight: '500' }}>Machine Learning</span>, <span style={{ color: 'var(--accent-secondary)', fontWeight: '500' }}>Deep Learning</span>, and <span style={{ color: '#0d9488', fontWeight: '500' }}>Large Language Models (LLMs)</span>. I enjoy turning ideas into working systems, from intelligent chatbots to RAG-based applications that combine language models with real data.
                        </p>
                        <p style={{ marginBottom: '1rem' }}>
                            I work primarily in Python and have hands-on experience with tools such as LangChain, Gemini API, and Hugging Face models, as well as automating AI workflows and integrations using n8n.
                        </p>
                        <p>
                            I care a lot about clean architecture, maintainable code, and practical problem-solving. I’m constantly learning, experimenting with new approaches, and keeping up with the latest developments in AI to build systems that are not only intelligent, but also reliable and easy to extend.
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
