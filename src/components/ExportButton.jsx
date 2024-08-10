import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './ExportButtons.css'; // Create corresponding CSS file

const ExportButtons = () => {
  const [loading, setLoading] = useState(false);

  const handleExport = (type) => {
    setLoading(true);
    // Simulate an export function with a timeout
    setTimeout(() => {
      setLoading(false);
      alert(`Exported to ${type}`);
    }, 2000);
  };

  return (
    <motion.div 
      className="export-buttons"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.button 
        className="export-btn"
        onClick={() => handleExport('PDF')}
        disabled={loading}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        {loading ? 'Loading...' : 'Export to PDF'}
      </motion.button>
      
      <motion.button 
        className="export-btn"
        onClick={() => handleExport('CSV')}
        disabled={loading}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        {loading ? 'Loading...' : 'Export to CSV'}
      </motion.button>
    </motion.div>
  );
};

export default ExportButtons;
