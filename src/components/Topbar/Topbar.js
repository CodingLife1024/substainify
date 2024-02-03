// Topbar.js
import React from 'react';
import styles from './topbar.module.css';
import { FaBars } from 'react-icons/fa';

const Topbar = () => {
  return (
    <div className={styles.full}>
      <div className={styles.header}>
        <a href="#intro" className={styles.header_item}>Home</a>
        <a href="#mission" className={styles.header_item}>Our Mission</a>
        <a href="#dashboard" className={styles.header_item}>Dashboard</a>
        <a href="#vision" className={styles.header_item}>Our Vision</a>
        <a href="#contact" className={styles.header_item}>Contact Us</a>
        <div className={styles.bars}><FaBars size={30} /></div>
      </div>
    </div>
  );
}

export default Topbar;
