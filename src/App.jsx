// src/App.jsx
import { Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Home    from './pages/Home';
import About   from './pages/About';
import History from './pages/History';
import Courses from './pages/Courses';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';

export default function App() {
  return (
    <MainLayout>
      <Routes>
        <Route path="/"        element={<Home />} />
        <Route path="/about"   element={<About />} />
        <Route path="/history" element={<History />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
        {/* 404 fallback */}
        <Route path="*" element={
          <div style={{
            minHeight: '80vh',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            padding: '2rem',
            paddingTop: '100px',
            background: 'var(--ivory)',
          }}>
            <p style={{ fontFamily: 'var(--font-cinzel)', fontSize: '5rem', color: 'var(--gold)', fontWeight: 900 }}>404</p>
            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '2rem', color: 'var(--dark)', marginBottom: '1rem' }}>Page Not Found</h2>
            <p style={{ fontFamily: 'var(--font-body)', color: 'var(--secondary)', marginBottom: '2rem' }}>
              The page you're looking for doesn't exist.
            </p>
            <a href="/" className="btn-luxury"><span>Return Home</span></a>
          </div>
        } />
      </Routes>
    </MainLayout>
  );
}
