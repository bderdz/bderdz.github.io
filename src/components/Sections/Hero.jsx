import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaArrowDown } from 'react-icons/fa';

export const Hero = () => {
    // Staggered variants for children
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: "easeOut" }
        }
    };

    return (
        <section id="hero" style={{
            minHeight: '100vh',
            width: '100%', // Ensure full width for centering
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'flex-start',
            paddingBottom: '4rem',
            position: 'relative' // Crucial for absolute positioning of arrow
        }}>
            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                <motion.span variants={itemVariants} style={{
                    color: 'var(--accent-primary)',
                    fontFamily: 'var(--font-display)',
                    fontSize: '1.2rem',
                    marginBottom: '1rem',
                    display: 'block',
                    fontWeight: '500'
                }}>
                    Hi, my name is
                </motion.span>

                <motion.h1 variants={itemVariants} style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: 'clamp(3.5rem, 9vw, 6rem)',
                    fontWeight: '700',
                    lineHeight: 1,
                    marginBottom: '1rem',
                    color: 'var(--text-primary)',
                    letterSpacing: '-0.02em'
                }}>
                    Bogdan Derdziak
                </motion.h1>

                <motion.h2 variants={itemVariants} style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: 'clamp(2rem, 5vw, 4rem)',
                    fontWeight: '600',
                    lineHeight: 1.1,
                    color: 'var(--text-secondary)',
                    marginBottom: '2rem'
                }}>
                    I build intelligent systems.
                </motion.h2>

                <motion.p variants={itemVariants} style={{
                    maxWidth: '600px',
                    color: 'var(--text-secondary)',
                    fontSize: '1.1rem',
                    lineHeight: 1.7,
                    marginBottom: '3rem'
                }}>
                    I'm a Junior AI Engineer specializing in building accessible AI solutions.
                    Focusing on <span style={{ color: 'var(--accent-primary)' }}>Machine Learning</span>, <span style={{ color: 'var(--accent-secondary)' }}>NLP</span>, and LLMs.
                </motion.p>

                <motion.div variants={itemVariants} style={{ display: 'flex', gap: '1.5rem', marginBottom: '4rem' }}>
                    <motion.a
                        href="#projects"
                        whileHover={{ scale: 1.05, backgroundColor: 'rgba(59, 130, 246, 0.1)' }}
                        whileTap={{ scale: 0.95 }}
                        style={{
                            padding: '1rem 2.5rem',
                            backgroundColor: 'transparent',
                            border: '1px solid var(--accent-primary)',
                            color: 'var(--accent-primary)',
                            borderRadius: '4px',
                            fontSize: '1rem',
                            fontWeight: '600',
                            cursor: 'pointer',
                            textDecoration: 'none',
                            transition: 'all 0.3s'
                        }}
                    >
                        Check out my work
                    </motion.a>
                    <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
                        <motion.a whileHover={{ y: -3, color: 'var(--accent-primary)' }} href="https://github.com/bderdz" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-secondary)', transition: 'color 0.3s' }}>
                            <FaGithub size={24} />
                        </motion.a>
                        <motion.a whileHover={{ y: -3, color: 'var(--accent-primary)' }} href="https://www.linkedin.com/in/bderdz/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-secondary)', transition: 'color 0.3s' }}>
                            <FaLinkedin size={24} />
                        </motion.a>
                    </div>
                </motion.div>
            </motion.div>

            {/* 
         Fixed: Arrow is now properly positioned relative to the section. 
         Using bottom: 40px to ensure it's visible above the fold.
         Restored: Simple circular border with bounce.
      */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, y: [0, 10, 0] }}
                transition={{
                    opacity: { delay: 1.5, duration: 1 },
                    y: { repeat: Infinity, duration: 2, ease: "easeInOut" }
                }}
                style={{
                    position: 'absolute',
                    bottom: '40px',
                    left: 0,
                    right: 0,
                    margin: '0 auto',
                    // transform: 'translateX(-50%)', // Removed transform centering
                    color: 'var(--text-secondary)',
                    cursor: 'pointer',
                    // Simple Circle Styles
                    width: '50px',
                    height: '50px',
                    borderRadius: '50%',
                    border: '1px solid var(--accent-primary)', // Blue border
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: 'var(--bg-color)' // Ensure readability
                }}
                onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })}
            >
                <FaArrowDown size={20} />
            </motion.div>
        </section>
    );
};
