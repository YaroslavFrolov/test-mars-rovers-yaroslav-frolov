import React from 'react';
import styles from './spinner.module.scss';

export const Spinner = () => {
  return (
    <div className={styles.wrapper}>
      <span>loading...</span>
      <div className={styles.spinner}>
        <div className={styles.dot1}></div>
        <div className={styles.dot2}></div>
      </div>
    </div>
  );
};
