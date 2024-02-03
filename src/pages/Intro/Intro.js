import React from 'react'
import styles from './intro.module.css'
import { FaBars } from 'react-icons/fa'

const Intro = () => {
  return (
    <div className={styles.main}>
      <div className={styles.container}>
        <div className={styles.header}>
          <a href="#intro" className={styles.header_item}>Home</a>
          <a href="#mission" className={styles.header_item}>Our Mission</a>
          <a href="#dashboard" className={styles.header_item}>Dashboard</a>
          <a href="#vision" className={styles.header_item}>Our Vision</a>
          <a href="#contact" className={styles.header_item}>Contact Us</a>
          <div className={styles.bar}><FaBars /></div>
        </div>
        <div className={styles.title}>Substainify Hub</div>
        <div className={styles.subtitle}>“Mobilizing Sustainability, Empowering the World”</div>
        <div className={styles.writing}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>
        <div className={styles.button}>
          <div className={styles.button_top}>
            <a href="#mission" className={styles.button_bottom}>Know More</a>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Intro