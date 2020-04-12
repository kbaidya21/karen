import React from 'react';
import {View} from 'react-native';
import {toSignupURL} from '../../actions/login';

class IOSignup extends React.Component {
  componentWillMount() {
    toSignupURL('nomail');
  }

  render() {
    return (
      <View>
        <h4>Redirecting...</h4>
      </View>
    );
  }
}

export default IOSignup;
