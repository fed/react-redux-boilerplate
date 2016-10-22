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
        <li><Link to="/contact">Contact Us</Link></li>
        <li><a href="https://github.com/fknussel" target="_blank">React & Redux Boilerplate</a> by <a href="https://twitter.com/fknussel" target="_blank">@fknussel</a></li>
      </ul>
    </nav>
  </footer>
);

export default Footer;
