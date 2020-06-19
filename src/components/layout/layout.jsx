import React from 'react';
import { Switch, Route, Link } from "react-router-dom";
import { RoversGrid } from 'components/rovers-grid';
import { Page404 } from 'components/page-404';
import { RoverPage } from 'components/rover-page';
import 'common-styles/index.scss';
import styles from './layout.module.scss';



export const Layout = () => {
  return (
    <div className={styles.wrapper}>
      <header className={styles.header}>
        <h1>
          <Link to='/'>Mars Rovers</Link>
        </h1>
      </header>

      <main className={styles.main}>
        <Switch>
          <Route path='/:roverName' component={RoverPage} />
          <Route exact path='/' component={RoversGrid} />
          <Route path='*' component={Page404} />
        </Switch>
      </main>

      <footer className={styles.footer}>
        <p>develop by <a href='https://www.facebook.com/profile.php?id=100001423921210' target='_blank' rel='noopener noreferrer'>Yaroslav Frolov</a></p>
        <p>all rights reserved ..)</p>
        <p>&copy; copyright</p>
      </footer>
    </div>
  );
};
