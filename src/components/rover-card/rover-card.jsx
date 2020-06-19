import React from 'react';
import { Button } from 'shared/button';
import styles from './rover-card.module.scss';

export const RoverCard = props => {
  const { name, launch_date, landing_date } = props.data;

  return (
    <section className={styles.wrapper}>
      <h2>{name}</h2>
      <p>Launch date = {launch_date}</p>
      <p>Landing date = {landing_date}</p>
      <Button to={name.toLowerCase()}>view photos</Button>
    </section>
  );
};
