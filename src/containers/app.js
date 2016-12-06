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

class App extends React.Component {
  render() {
    return (
      <section>
        <Header />
        {this.props.children}
        <Footer />

        <Alert
          isVisible={this.props.alert.isVisible}
          message={this.props.alert.message}
          type={this.props.alert.type}
          hideAlert={this.props.hideAlert.bind(this)} />

        <Spinner isVisible={this.props.loading} />
      </section>
    );
  }
}

App.propTypes = {
  // React & React Router (ownProps)
  children: React.PropTypes.node,
  location: React.PropTypes.object.isRequired,

  // Redux actions
  hideAlert: React.PropTypes.func.isRequired,

  // Redux state
  alert: React.PropTypes.object.isRequired,
  loading: React.PropTypes.bool.isRequired
};

function mapStateToProps(state) {
  return {
    alert: state.alert,
    loading: state.loading
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ hideAlert }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
