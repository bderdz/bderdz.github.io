import { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaRobot, FaBrain, FaPalette, FaLaptopCode, FaImage } from 'react-icons/fa';

const projects = [
    {
        id: 1,
        title: 'Sentiment Analysis Bot',
        subtitle: 'Real-time NLP Pipeline',
        description: 'A comprehensive sentiment analysis solution for Twitter streams. It utilizes a fine-tuned BERT model served via FastAPI to process thousands of tweets per minute. The system includes a React dashboard for real-time visualization of sentiment trends and anomaly detection.',
        tags: ['NLP', 'Python', 'Docker', 'FastAPI', 'React'],
        links: { github: '#', external: '#' },
        icon: <FaRobot size={24} />,
        color: '#3b82f6',
        hasImage: true
    },
    {
        id: 2,
        title: 'AI Image Generator',
        subtitle: 'Stable Diffusion Web App',
        description: 'An artistic tool built on top of Stable Diffusion. Users can generate, variation, and upscale images using natural language prompts. Features include a gallery of community creations and prompt engineering helpers.',
        tags: ['GenAI', 'React', 'Node.js'],
        links: { github: '#', external: '#' },
        icon: <FaPalette size={24} />,
        color: '#8b5cf6',
        hasImage: true
    },
    {
        id: 3,
        title: 'Drone Pathing Sim',
        subtitle: 'Reinforcement Learning',
        description: 'A Unity-based simulation environment for training autonomous agents. Uses PyTorch and PPO (Proximal Policy Optimization) to teach drones how to navigate complex obstacle courses without collision.',
        tags: ['RL', 'PyTorch', 'Unity', 'C#'],
        links: { github: '#' },
        icon: <FaBrain size={24} />,
        color: '#10b981',
        hasImage: false
    },
    {
        id: 4,
        title: 'Smart Portfolio',
        subtitle: 'Modern Web Experience',
        description: 'This portfolio website itself! Built with React, Vite, and Framer Motion. It features performant animations, interactive canvas backgrounds, and a responsive glassmorphism design system.',
        tags: ['Web', 'React', 'Framer Motion'],
        links: { github: '#' },
        icon: <FaLaptopCode size={24} />,
        color: '#f43f5e',
        hasImage: true
    }
];

const Card = ({ project, index, range, targetScale, progress, isLast }) => {
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start end', 'start start']
    });

    const imageScale = useTransform(scrollYProgress, [0, 1], [1.2, 1]);
    const scale = useTransform(progress, range, [1, targetScale]);

    return (
        <div
            ref={container}
            className="card-container" // Hook for mobile override
            style={{
                height: '100vh',
                marginBottom: isLast ? '-15vh' : 0,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: isLast ? 'relative' : 'sticky',
                top: isLast ? 0 : 80,
            }}
        >
            <motion.div
                className="split-card card-inner" // Hooks for mobile override
                style={{
                    scale,
                    backgroundColor: 'var(--card-bg)', // Dynamic variable
                    backdropFilter: 'blur(10px)',      // Glassmorphism
                    width: '1000px',
                    maxWidth: '90vw',
                    height: '600px',
                    maxHeight: '80vh',
                    borderRadius: '30px',
                    border: '1px solid var(--card-border)',
                    overflow: 'hidden',
                    display: 'flex',
                    flexDirection: 'row',
                    // Smoother, lighter shadow for light mode
                    boxShadow: '0 20px 40px -5px rgba(0,0,0,0.1), 0 10px 10px -5px rgba(0,0,0,0.04)',
                    position: 'relative',
                    top: `calc(-10vh + ${index * 25}px)`
                }}
            >
                {/* Mobile Responsive Layout Override */}
                <style>{`
                    @media (max-width: 768px) {
                        .split-card { 
                            flex-direction: column !important; 
                            height: auto !important; 
                            max-height: none !important; 
                            width: 100% !important;
                            max-width: 100% !important;
                        }
                        .split-image { 
                            width: 100% !important; 
                            height: 250px !important; 
                            order: -1; 
                        }
                        .split-content { 
                            width: 100% !important; 
                            padding: 2rem 1.5rem !important; 
                        }
                        /* Disable Sticky Stacking on Mobile */
                        .card-container {
                            height: auto !important;
                            margin-bottom: 2rem !important;
                            position: relative !important;
                            top: 0 !important;
                        }
                        .card-inner {
                            width: 100% !important;
                            top: 0 !important;
                            transform: none !important; /* Disable scale effect */
                        }
                    }
                `}</style>

                {/* Left: Content */}
                <div className="split-content" style={{ width: '45%', padding: '3rem', display: 'flex', flexDirection: 'column', justifyContent: 'center', zIndex: 2 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                        <div style={{
                            color: project.color,
                            background: 'rgba(0,0,0,0.05)',
                            padding: '12px',
                            borderRadius: '12px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}>
                            {project.icon}
                        </div>
                        <h2 style={{ fontSize: '2rem', fontWeight: 'bold', fontFamily: 'var(--font-display)', margin: 0, color: 'var(--text-primary)' }}>{project.title}</h2>
                    </div>

                    <p style={{ color: project.color, fontSize: '1.1rem', marginBottom: '1rem', fontWeight: '600' }}>
                        {project.subtitle}
                    </p>

                    <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '2rem' }}>
                        {project.description}
                    </p>

                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem', marginBottom: '2.5rem' }}>
                        {project.tags.map(tag => (
                            <span key={tag} style={{
                                fontSize: '0.85rem',
                                padding: '6px 14px',
                                borderRadius: '20px',
                                background: 'rgba(0,0,0,0.05)',
                                border: '1px solid var(--card-border)',
                                color: 'var(--text-secondary)',
                                fontWeight: '500'
                            }}>
                                {tag}
                            </span>
                        ))}
                    </div>

                    <div style={{ display: 'flex', gap: '1rem' }}>
                        {project.links.github && (
                            <a href={project.links.github} className="button" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 'bold', color: 'var(--text-primary)' }}>
                                <FaGithub /> Code
                            </a>
                        )}
                        {project.links.external && (
                            <a href={project.links.external} className="button" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 'bold', color: project.color }}>
                                <FaExternalLinkAlt /> Live Demo
                            </a>
                        )}
                    </div>
                </div>

                {/* Right: Image */}
                <div className="split-image" style={{ width: '55%', position: 'relative', overflow: 'hidden', background: '#f1f5f9' }}>
                    <motion.div
                        style={{ width: '100%', height: '100%', scale: imageScale }}
                    >
                        {project.hasImage ? (
                            <div style={{
                                width: '100%',
                                height: '100%',
                                // Use white gradient for image overlay in light mode
                                background: `linear-gradient(135deg, ${project.color}10, #ffffff)`,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}>
                                <div style={{ textAlign: 'center', color: 'rgba(0,0,0,0.2)' }}>
                                    <FaImage size={60} style={{ marginBottom: '1rem' }} />
                                    <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem' }}>Preview</div>
                                </div>
                            </div>
                        ) : (
                            <div style={{
                                width: '100%',
                                height: '100%',
                                background: `radial-gradient(circle at center, ${project.color}10, #e2e8f0)`,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}>
                                <div style={{ opacity: 0.2, transform: 'scale(4)', color: project.color }}>{project.icon}</div>
                            </div>
                        )}
                    </motion.div>
                </div>

            </motion.div>
        </div>
    );
};

// HUD Counter Component
const ProjectCounter = ({ scrollProgress, total }) => {
    const [current, setCurrent] = useState(1);

    // Control opacity based on scroll progress: fade in at 2%, fade out at 95%
    const opacity = useTransform(scrollProgress, [0, 0.02, 0.95, 1], [0, 1, 1, 0]);

    useEffect(() => {
        return scrollProgress.on('change', (latest) => {
            const index = Math.min(Math.ceil(latest * total), total);
            setCurrent(index || 1);
        });
    }, [scrollProgress, total]);

    return (
        <motion.div
            style={{
                position: 'fixed',
                bottom: '50px',
                right: '50px',
                zIndex: 50,
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                pointerEvents: 'none',
                opacity
            }}
            className="project-counter" // Add class for hidden mobile
        >
            {/* Mobile Hide Style */}
            <style>{`
                @media (max-width: 768px) {
                    .project-counter { display: none !important; }
                }
            `}</style>
            <div style={{ textAlign: 'right', fontFamily: 'var(--font-display)' }}>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', fontWeight: '600', letterSpacing: '2px' }}>SYSTEM // PROJECT_VIEW</div>
                <div style={{ fontSize: '2rem', fontWeight: 'bold', color: 'var(--text-primary)' }}>
                    <span style={{ color: 'var(--accent-primary)' }}>{String(current).padStart(2, '0')}</span>
                    <span style={{ fontSize: '1rem', color: 'var(--text-secondary)', fontWeight: 'bold', margin: '0 0.5rem' }}>/</span>
                    {String(total).padStart(2, '0')}
                </div>
            </div>
            {/* Circular Progress Micro-interaction */}
            <svg width="50" height="50" style={{ transform: 'rotate(-90deg)' }}>
                <circle cx="25" cy="25" r="20" stroke="var(--card-border)" strokeWidth="4" fill="none" />
                <motion.circle
                    cx="25" cy="25" r="20"
                    stroke="var(--accent-primary)"
                    strokeWidth="4"
                    fill="none"
                    pathLength="1"
                    style={{ pathLength: scrollProgress }}
                />
            </svg>
        </motion.div>
    );
};

export const Projects = () => {
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start start', 'end end']
    });

    return (
        <section id="projects" style={{ marginTop: '0vh', marginBottom: '0' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '3rem' }}>
                <span style={{ color: 'var(--accent-primary)', fontSize: '1.5rem', fontWeight: 'bold' }}>03.</span>
                <h2 style={{ fontSize: '2rem', fontWeight: '700', color: 'var(--text-primary)' }}>Featured Work</h2>
                <div style={{ flex: 1, height: '1px', background: 'var(--card-border)', marginLeft: '1rem' }}></div>
            </div>

            <div ref={container}>
                {projects.map((project, i) => {
                    const targetScale = 1 - ((projects.length - i) * 0.05);
                    return (
                        <Card
                            key={project.id}
                            project={project}
                            index={i}
                            progress={scrollYProgress}
                            range={[i * 0.25, 1]}
                            targetScale={targetScale}
                            isLast={i === projects.length - 1}
                        />
                    );
                })}
            </div>

            <ProjectCounter scrollProgress={scrollYProgress} total={projects.length} />
        </section>
    );
};
