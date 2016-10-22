import React from 'react';
import {Link} from 'react-router';
import {wrapper} from './noMatch.css';
import notFoundIcon from './404.svg';

export default class NoMatch extends React.Component {
  render() {
    return (
      <section className={wrapper}>
        <header>
          <img src={notFoundIcon} alt="404 Not Found" />
        </header>

        <p><strong>Lost?</strong> The page you are looking for doesn't exist. <Link to="/">Click here</Link> to go back to the homepage.</p>
      </section>
    );
  }
}
