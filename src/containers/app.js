import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import actionCreators from '../actions';

import Header from '../components/header/header';
import Footer from '../components/footer/footer';
import Alert from '../components/alert/alert';
import Spinner from '../components/spinner/spinner';

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        {this.props.children}
        <Footer />

        <Alert
          isVisible={this.props.alert.isVisible}
          message={this.props.alert.message}
          type={this.props.alert.alertType}
          hideAlert={this.props.actions.hideAlert.bind(this)} />

        <Spinner
          {...this.props.spinner}
          hideSpinner={this.props.actions.hideSpinner.bind(this)} />
      </div>
    );
  }
}

App.propTypes = {
  children: React.PropTypes.node,
  actions: React.PropTypes.object.isRequired,
  location: React.PropTypes.object,
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
  return {
    actions: bindActionCreators(actionCreators, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
