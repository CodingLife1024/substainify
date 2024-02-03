import React from 'react';
import styles from './contact.module.css'; // Import the styles here

const DynamicButton = ({ onClick, children }) => {
  return (
    <div className={styles.button} onClick={onClick}>
      {children}
    </div>
  );
};

export default DynamicButton;
