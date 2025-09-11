import React from 'react';
import styles from './LoadingSpinner.module.css';

interface LoadingSpinnerProps {}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = () => {
  return (
    <div className={styles.container} role="status" aria-label="Loading more content">
      <div className={styles.spinner}></div>
      <span className={styles.text}>Loading...</span>
    </div>
  );
};

export default LoadingSpinner;