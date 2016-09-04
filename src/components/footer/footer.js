import React from 'react';
import {Link} from 'react-router';
import styles from './footer.css';

const Footer = () => (
  <footer className={styles.footer}>
    <nav>
      <ul>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/features">Features</Link></li>
        <li><Link to="/pricing">Pricing</Link></li>
        <li>© 2016 React Boilerplate</li>
      </ul>
    </nav>
  </footer>
);

export default Footer;
