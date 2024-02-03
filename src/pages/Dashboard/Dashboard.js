"use client";

import React from 'react';
import styles from './dashboard.module.css';
import Topbar from '../../components/Topbar/Topbar';

const Dashboard = () => {
  return (
    <>
    <div className={styles.full}>
      <Topbar />
      <div className={styles.main}>
        <div className={styles.title}>
          Dashboard
        </div>
        <div className={styles.slide_container}>
          <div className={styles.bigslide}>
            <div className={styles.slide} style={{ backgroundImage: 'url(/1.svg)' }}>1
            </div>
            <div className={styles.slide} style={{ backgroundImage: 'url(/2.svg)' }}>2

            </div>
            <div className={styles.slide} style={{ backgroundImage: 'url(/3.svg)' }}>3

            </div>
            <div className={styles.slide} style={{ backgroundImage: 'url(/4.svg)' }}>4

            </div>
            <div className={styles.slide} style={{ backgroundImage: 'url(/5.svg)' }}>5

            </div>
            <div className={styles.slide} style={{ backgroundImage: 'url(/6.svg)' }}>6

            </div>
            <div className={styles.slide} style={{ backgroundImage: 'url(/7.svg)' }}>7

            </div>
          </div>
        </div>
      </div>
    </div>
  </>
  );
};

export default Dashboard;
