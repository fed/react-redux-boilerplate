import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {showAlert, hideAlert} from 'actions/alert';
import {showSpinner} from 'actions/spinner';
import Button from 'components/button';
import styles from './styles.css';

class Dashboard extends React.Component {
  render() {
    return (
      <section className={styles.wrapper}>
        <h1>Lorem ipsum dolor sit amet</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore
          et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
          cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa
          qui officia deserunt mollit anim id est laborum.</p>

        <Button
          title="Trigger a success alert"
          type="success"
          action={this.props.showAlert.bind(null, 'Hello world', 'success')} />

        <Button
          title="Trigger an error alert"
          type="danger"
          action={this.props.showAlert.bind(null, 'Hello world', 'error')} />

        <Button
          title="Trigger an info alert"
          type="info"
          action={this.props.showAlert.bind(null, 'Hello world', 'info')} />

        <Button
          title="Hide the alert"
          type="warning"
          action={this.props.hideAlert} />

        <Button
          title="Display the loading spinner"
          action={this.props.showSpinner} />
      </section>
    );
  }
}

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
