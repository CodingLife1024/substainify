// Topbar.js
"use client";
import React, { useState, useEffect } from 'react';
import styles from './topbar.module.css';
import { FaBars } from 'react-icons/fa';

const Topbar = () => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const isSticky = scrollPosition > window.innerHeight; // Check if scrolled past the first 100vh

      setIsSticky(isSticky);
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`${styles.full} ${isSticky ? styles.sticky : ''}`}>
      <div className={styles.header}>
        <a href="#intro" className={styles.header_item}>Home</a>
        <a href="#mission" className={styles.header_item}>Our Mission</a>
        <a href="#dashboard" className={styles.header_item}>Dashboard</a>
        <a href="#vision" className={styles.header_item}>Our Vision</a>
        <a href="#contact" className={styles.header_item}>Contact Us</a>
        <div className={styles.dropdown}>
          <div className={styles.bars}><FaBars size={30} /></div>
          <div className={styles.dropdown_content}>
            <a href="#intro" className={styles.header_item}>Home</a>
            <a href="#mission" className={styles.header_item}>Our Mission</a>
            <a href="#dashboard" className={styles.header_item}>Dashboard</a>
            <a href="#vision" className={styles.header_item}>Our Vision</a>
            <a href="#contact" className={styles.header_item}>Contact Us</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Topbar;
