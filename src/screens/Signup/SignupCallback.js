import React from 'react';
import * as actions from '../../actions/login';
import {connect} from 'react-redux';
import {View} from 'react-native';

class Signup extends React.Component {
  componentWillMount() {
    this.props.loginCallback(this.props.history, true);
  }
  render() {
    return (
      <View>
        ><h4>Redirecting...</h4>
      </View>
    );
  }
}

export default connect(null, actions)(Signup);
