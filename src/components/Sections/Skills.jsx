import { motion } from 'framer-motion';
import { FaPython, FaReact, FaDocker, FaGitAlt } from 'react-icons/fa';
import { SiTensorflow, SiPytorch, SiOpencv, SiFastapi, SiPostgresql, SiScikitlearn, SiPandas, SiNumpy } from 'react-icons/si';

const skills = [
    {
        category: 'AI & ML', items: [
            { name: 'PyTorch', icon: <SiPytorch /> },
            { name: 'TensorFlow', icon: <SiTensorflow /> },
            { name: 'Scikit-Learn', icon: <SiScikitlearn /> },
            { name: 'OpenCV', icon: <SiOpencv /> },
            { name: 'Pandas', icon: <SiPandas /> },
            { name: 'NumPy', icon: <SiNumpy /> },
        ]
    },
    {
        category: 'Development', items: [
            { name: 'Python', icon: <FaPython /> },
            { name: 'FastAPI', icon: <SiFastapi /> },
            { name: 'React', icon: <FaReact /> },
            { name: 'PostgreSQL', icon: <SiPostgresql /> },
            { name: 'Docker', icon: <FaDocker /> },
            { name: 'Git', icon: <FaGitAlt /> },
        ]
    }
];

export const Skills = () => {
    return (
        <section id="skills" style={{ padding: '6rem 0' }}>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '3rem' }}>
                    <span style={{ color: 'var(--accent-primary)', fontSize: '1.5rem', fontWeight: 'bold' }}>02.</span>
                    <h2 style={{ fontSize: '2rem', fontWeight: '700', color: 'var(--text-primary)' }}>Tech Stack</h2>
                    <div style={{ flex: 1, height: '1px', background: 'var(--card-border)', marginLeft: '1rem' }}></div>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
                    {skills.map((grp, i) => (
                        <div key={i}>
                            <h3 style={{ fontSize: '1.2rem', color: 'var(--accent-secondary)', marginBottom: '1.5rem' }}>{grp.category}</h3>
                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(140px, 1fr))', gap: '1rem' }}>
                                {grp.items.map((skill) => (
                                    <motion.div
                                        key={skill.name}
                                        whileHover={{ y: -5, borderColor: 'var(--accent-primary)' }}
                                        style={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '0.8rem',
                                            padding: '1rem',
                                            backgroundColor: 'var(--card-bg)',
                                            border: '1px solid rgba(0,0,0,0.1)', // Slightly darker border
                                            borderRadius: '4px',
                                            color: 'var(--text-primary)', // Darker text
                                            fontWeight: '600', // Bolder text
                                            boxShadow: '0 2px 4px rgba(0,0,0,0.05)', // Subtle shadow for pop
                                        }}
                                    >
                                        <span style={{ color: 'var(--accent-primary)', fontSize: '1.2rem' }}>{skill.icon}</span>
                                        <span style={{ fontSize: '0.9rem' }}>{skill.name}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
};
