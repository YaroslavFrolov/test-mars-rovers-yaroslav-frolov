import React from 'react';
import { observer } from 'mobx-react';
import { useStore } from 'infrastructure/context-stores';
import { PhotoForm } from './photo-form';
import { PhotoGallery } from './photo-gallery';
import { Spinner } from 'shared/spinner';
import styles from './rover-page.module.scss';

export const RoverPage = observer(props => {
  const { storeRovers } = useStore();
  const { isLoading, isError, rovers } = storeRovers;

  if(isLoading) return <Spinner />;

  if(isError) return <h3>Error</h3>;

  if(!Array.isArray(rovers) || rovers.length < 1) {
    return <h3>there are no rovers..(</h3>;
  }

  const { match } = props;
  const name = match.params.roverName;
  const roverData = rovers.find(item => item.name.toLowerCase() === name);
  const { max_sol, total_photos, name: realName } = roverData;

  return (
    <React.Fragment>
      <section className={styles.wrapper}>
        <h2>{realName}</h2>
        <p>Max sol = {max_sol}</p>
        <p>Total photos = {total_photos}</p>
        <PhotoForm roverName={name} maxSol={max_sol} />
      </section>
      <PhotoGallery />
    </React.Fragment>
  );
});
