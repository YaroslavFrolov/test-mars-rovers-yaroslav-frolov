import React from 'react';
import { Link } from "react-router-dom";
import styles from './button.module.scss';

export const Button = props => {
  const { to, children, ...other } = props;

  if (to) {
    return <Link to={to} className={styles.link} {...other}>{children}</Link>
  }

  return (
    <button className={styles.button} {...other}>{children}</button>
  );
};
