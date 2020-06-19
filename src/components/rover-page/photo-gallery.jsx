import React, { useEffect } from 'react';
import { observer } from 'mobx-react';
import { Carousel } from 'react-responsive-carousel';
import { useStore } from 'infrastructure/context-stores';
import { Spinner } from 'shared/spinner';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import styles from './photo-gallery.module.scss';


const MIN_PRELOAD_PHOTOS = 3;

export const PhotoGallery = observer(() => {
  const { storeRoverPage } = useStore();
  const { isLoading, isError, photos, clearStore, updateSelectedIndex, selectedIdx } = storeRoverPage;

  useEffect(() => {
    return clearStore();
  }, []);

  if(isLoading) return <Spinner />;

  if(isError) return <h3>Error</h3>;

  if(!Array.isArray(photos) || photos.length < 1) {
    return <h3 className={styles.empty}>there are no photos for these filters..(</h3>;
  }



  return (
    <section className={styles.wrapper}>
      <Carousel
        infiniteLoop={false}
        showThumbs={false}
        showIndicators={photos.length < 10}
        onChange={updateSelectedIndex}
      >
        {photos.map((item, idx) => {
          const { img_src, camera } = item;

          /**
           * Unfortunately, we can't use pagination because the API does not give
           * us a particular field with count of total
           * photos (with selected!!! filters - sol and camera!)
           *
           * So, we should use lazy loading. It only works if browser-cache is enabled.
           * If you are a developer - then probably your browser-cache is disabled.
           * But for ordinary users - browser-cache is enabled.
           */
          const lazySrc = (idx > selectedIdx + MIN_PRELOAD_PHOTOS || idx < selectedIdx - MIN_PRELOAD_PHOTOS) ? null : img_src;

          return (
            <div key={idx} className={styles.imgWrapper}>
              <img
                src={lazySrc}
                alt={camera.full_name}
              />
              <span>loading this photo... please wait...</span>
            </div>
          )
        })}
      </Carousel>
    </section>
  );
});
