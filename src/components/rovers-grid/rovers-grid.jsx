import React from 'react';
import { observer } from 'mobx-react';
import { useStore } from 'infrastructure/context-stores';
import { RoverCard } from 'components/rover-card';
import { Spinner } from 'shared/spinner';
import styles from './rovers-grid.module.scss';

export const RoversGrid = observer(() => {
  const { storeRovers } = useStore();
  const { isLoading, isError, rovers } = storeRovers;

  if(isLoading) return <Spinner />;

  if(isError) return <h2>Error</h2>;

  if(!Array.isArray(rovers) || rovers.length < 1) {
    return <h2>there are no rovers..(</h2>
  }

  return (
    <div className={styles.wrapper}>
      {rovers.map(rover => {
        return <RoverCard data={rover} key={rover.name} />
      })}
    </div>
  );
});
