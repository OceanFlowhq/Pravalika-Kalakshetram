// src/layouts/MainLayout.jsx
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const pageVariants = {
  initial: { opacity: 0, y: 16 },
  enter: { opacity: 1, y: 0 },
};

export default function MainLayout({ children }) {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [location.pathname]);

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navbar />
      <motion.main
        key={location.pathname}
        variants={pageVariants}
        initial="initial"
        animate="enter"
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        style={{ flex: 1 }}
      >
        {children}
      </motion.main>
      <Footer />
    </div>
  );
}
