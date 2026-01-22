import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MdMenu, MdClose } from 'react-icons/md';

const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
];

export const Header = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Lock Scroll when Mobile Menu is open
    useEffect(() => {
        if (mobileOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
        return () => { document.body.style.overflow = 'auto'; };
    }, [mobileOpen]);

    return (
        <header style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            padding: scrolled ? '1rem 2rem' : '2rem 3rem',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            zIndex: 100,
            transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
            background: scrolled ? 'rgba(255, 255, 255, 0.75)' : 'transparent',
            backdropFilter: scrolled ? 'blur(12px)' : 'none',
            borderBottom: scrolled ? '1px solid var(--card-border)' : '1px solid transparent',
        }}>
            <motion.div
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                whileHover={{
                    x: [0, -2, 2, -1, 1, 0],
                    color: '#3b82f6', // Shift to accent color on hover
                    textShadow: '2px 0px 4px rgba(59, 130, 246, 0.5)'
                }}
                transition={{ duration: 0.4 }}
                style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '1.5rem',
                    fontWeight: '700',
                    color: 'var(--text-primary)',
                    letterSpacing: '-0.05em',
                    cursor: 'pointer'
                }}
            >
                B<span style={{ color: 'var(--accent-primary)' }}>.</span>DERDZ
            </motion.div>

            {/* Desktop Nav */}
            <nav className="desktop-nav">
                <ul style={{ display: 'flex', listStyle: 'none', gap: '2.5rem' }}>
                    {navLinks.map((link) => (
                        <motion.li key={link.name} whileHover={{ y: -2 }}>
                            <a
                                href={link.href}
                                style={{
                                    fontFamily: 'var(--font-main)',
                                    fontSize: '0.95rem',
                                    fontWeight: '600',
                                    color: 'var(--text-secondary)',
                                    letterSpacing: '0.05em',
                                    textTransform: 'uppercase',
                                    position: 'relative',
                                    display: 'inline-block',
                                    paddingBottom: '2px',
                                    transition: 'color 0.3s'
                                }}
                                onMouseEnter={(e) => e.target.style.color = 'var(--accent-primary)'}
                                onMouseLeave={(e) => e.target.style.color = 'var(--text-secondary)'}
                            >
                                {link.name}
                                <motion.span
                                    style={{
                                        position: 'absolute',
                                        bottom: 0,
                                        left: 0,
                                        width: '100%',
                                        height: '1px',
                                        background: 'var(--accent-primary)',
                                        originX: 0
                                    }}
                                    initial={{ scaleX: 0 }}
                                    whileHover={{ scaleX: 1 }}
                                    transition={{ duration: 0.3 }}
                                />
                            </a>
                        </motion.li>
                    ))}
                </ul>
            </nav>

            {/* Mobile Menu Toggle */}
            <div className="mobile-toggle" onClick={() => setMobileOpen(!mobileOpen)}>
                {mobileOpen ? <MdClose size={32} color="var(--text-primary)" /> : <MdMenu size={32} color="var(--text-primary)" />}
            </div>

            {/* Mobile Fullscreen Menu */}
            <AnimatePresence>
                {mobileOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        style={{
                            position: 'fixed',
                            top: 0,
                            left: 0,
                            width: '100vw',
                            height: '100vh',
                            background: 'var(--bg-color)',
                            zIndex: 99,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: '2rem'
                        }}
                    >
                        {navLinks.map((link) => (
                            <motion.a
                                key={link.name}
                                href={link.href}
                                onClick={() => setMobileOpen(false)}
                                whileTap={{ scale: 0.95 }}
                                style={{
                                    fontSize: '2rem',
                                    fontWeight: '700',
                                    color: 'var(--text-primary)',
                                    fontFamily: 'var(--font-display)',
                                    textDecoration: 'none'
                                }}
                            >
                                {link.name}
                            </motion.a>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Responsive Styles */}
            <style>{`
                @media (max-width: 768px) {
                    .desktop-nav { display: none; }
                    .mobile-toggle { display: block; cursor: pointer; z-index: 101; }
                }
                @media (min-width: 769px) {
                    .mobile-toggle { display: none; }
                }
            `}</style>
        </header>
    );
};
