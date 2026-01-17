export const Footer = () => {
    return (
        <footer style={{
            padding: '2rem',
            textAlign: 'center',
            color: 'var(--text-secondary)',
            fontSize: '0.9rem',
            borderTop: '1px solid var(--card-border)'
        }}>
            <p>&copy; {new Date().getFullYear()} Junior AI Engineer. Built with React & AI.</p>
        </footer>
    );
};
