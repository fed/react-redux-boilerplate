import React from 'react';
import {Link} from 'react-router';
import styles from './header.css';
import reactLogo from './react.svg';
import reduxLogo from './redux.svg';

const Header = () => (
  <header className={styles.header}>
    <Link to="/">
      <img src={reactLogo} className={styles.headerImage} alt="React Boilerplate" />
      <img src={reduxLogo} className={styles.headerImage} alt="React Boilerplate" />
    </Link>
    <h1 className={styles.headerTitle}>React & Redux Boilerplate</h1>
  </header>
);

export default Header;
