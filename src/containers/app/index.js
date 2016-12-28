import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

// Redux Actions
import {hideAlert} from 'actions/alert';

// Components
import Header from 'components/header';
import Footer from 'components/footer';
import Alert from 'components/alert';
import Spinner from 'components/spinner';

const App = ({ children, spinner, alert, hideAlert }) => (
  <section>
    <Header />

    {children}

    <Footer />

    <Alert
      isVisible={alert.get('isVisible')}
      message={alert.get('message')}
      type={alert.get('type')}
      hideAlert={hideAlert.bind(this)} />

    <Spinner isVisible={spinner.get('isVisible')} />
  </section>
);

App.propTypes = {
  // React & React Router (ownProps)
  children: React.PropTypes.node,

  // Redux actions
  hideAlert: React.PropTypes.func.isRequired,

  // Redux state
  alert: React.PropTypes.object.isRequired,
  spinner: React.PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    alert: state.alert,
    spinner: state.spinner
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ hideAlert }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
