import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {showAlert, hideAlert} from 'actions/alert';
import {showSpinner} from 'actions/spinner';
import Button from 'components/button';
import styles from './styles.css';

const Dashboard = ({ showAlert, hideAlert, showSpinner }) => (
  <section className={styles.wrapper}>
    <h1>Lorem ipsum dolor sit amet</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

    <Button className={styles.button} type="success" onClick={() => showAlert('Hello world', 'success')}>
      Trigger a success alert
    </Button>

    <Button className={styles.button} type="danger" onClick={() => showAlert('Hello world', 'error')}>
      Trigger an error alert
    </Button>

    <Button className={styles.button} type="primary" onClick={() => showAlert('Hello world', 'info')}>
      Trigger an info alert
    </Button>

    <Button className={styles.button} onClick={hideAlert}>
      Hide the alert
    </Button>

    <Button className={styles.button} onClick={showSpinner}>
      Display the loading spinner
    </Button>
  </section>
);

Dashboard.propTypes = {
  // Redux actions
  showAlert: React.PropTypes.func.isRequired,
  hideAlert: React.PropTypes.func.isRequired,
  showSpinner: React.PropTypes.func.isRequired
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    showAlert,
    hideAlert,
    showSpinner
  }, dispatch);
}

export default connect(null, mapDispatchToProps)(Dashboard);
