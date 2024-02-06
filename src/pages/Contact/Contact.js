"use client";

import React from 'react';
import dynamic from 'next/dynamic';
import styles from './contact.module.css';
import Topbar from '../../components/Topbar/Topbar';
import { FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Contact = () => {
  const handleSendMessage = () => {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const company = document.getElementById('company').value;
    const message = document.getElementById('message').value;

    const mailtoLink = `mailto:ashmitb2005@gmail.com?subject=${encodeURIComponent('New Message from ' + name + " from company " + company)}&body=${encodeURIComponent(`${message}`)}`;

    window.location.href = mailtoLink;
  };

  const DynamicButton = dynamic(() => import('./DynamicButton'), { ssr: false });

  return (
    <>
      <div className={styles.full}>
        <div className={styles.topMargin}></div>
        <Topbar />
        <div className={styles.main}>
          <div className=''>
            <div className={styles.title}>
              Contact Us
            </div>
            <div className={styles.title2}>
              Let's Work Together
            </div>
            <div className={styles.title3}>
              Leave us a message, we will get back as soon as we can!
            </div>
          </div>

          <div className={styles.right}>
            <div className={styles.inputcontainer}>
              <label htmlFor="name"></label>
              <input type="text" id="name" name="name" placeholder="Name" />
            </div>

            <div className={styles.inputcontainer}>
              <label htmlFor="email"></label>
              <input type="text" id="email" name="email" placeholder="Email" />
            </div>

            <div className={styles.inputcontainer}>
              <label htmlFor="company"></label>
              <input type="text" id="company" name="company" placeholder="Company" />
            </div>

            <div className={styles.inputcontainer}>
              <label htmlFor="message"></label>
              <input type="text" id="message" name="message" placeholder="Message" />
            </div>

            <DynamicButton onClick={handleSendMessage}>Send Message</DynamicButton>
            <div className={styles.social}>
              <FaLinkedin />
              <FaInstagram />
              <FaTwitter />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
