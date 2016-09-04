import React from 'react';
import {connect} from 'react-redux';
import actionCreators from '../../actions';
import Button from '../../components/button/button';
import styles from './dashboard.css';

class Dashboard extends React.Component {
  render() {
    return (
      <section className={styles.contentWrapper}>
        <h1>Lorem ipsum dolor sit amet</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore
          et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
          cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa
          qui officia deserunt mollit anim id est laborum.</p>
        <Button title="Click me" type="success" />
        <Button title="Click me" type="warning" />
        <Button title="Click me" type="danger" />
        <Button title="Click me" type="info" />
        <Button title="Click me" />
      </section>
    );
  }
}

Dashboard.propTypes = {
  showSpinner: React.PropTypes.func.isRequired,
  hideSpinner: React.PropTypes.func.isRequired
};

export default connect(null, actionCreators)(Dashboard);
