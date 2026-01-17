import { Header } from './Header';
import { Footer } from './Footer';

// eslint-disable-next-line react/prop-types
export const Layout = ({ children }) => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', position: 'relative', zIndex: 1 }}>
            <Header />
            <main className="main-content" style={{ flex: 1, padding: '0 2rem', maxWidth: '1200px', margin: '0 auto', width: '100%' }}>
                {children}
            </main>
            <Footer />
            <style>{`
                @media (max-width: 768px) {
                    .main-content { padding: 0 1rem !important; }
                }
            `}</style>
        </div>
    );
};
