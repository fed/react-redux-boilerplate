import React from 'react';
import {Link} from 'react-router';
import styles from './header.css';
import siteLogo from './siteLogo.svg';

const Header = () => (
  <header className={styles.header}>
    <Link to="/">
      <img src={siteLogo} className={styles.headerImage} alt="React Boilerplate" />
    </Link>
    <h1 className={styles.headerTitle}>React Boilerplate</h1>
  </header>
);

export default Header;
