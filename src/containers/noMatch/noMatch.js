import React from 'react';
import {Link} from 'react-router';
import styles from './noMatch.css';

export default class NoMatch extends React.Component {
  render() {
    return (
      <section className={styles.contentWrapper}>
        <h1 className={styles.title}>Lost?</h1>
        <p>The page you are looking for doesn't exist. <Link to="/">Click here</Link> to go back to the homepage.</p>
      </section>
    );
  }
}
