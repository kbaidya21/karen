import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  StatusBar,
  Route,
  Router,
  Switch,
} from 'react-native';
import {Block, Button, theme} from 'galio-framework';
import {toSignupURL} from '../../actions/login';

import axios from 'axios';
import * as EmailValidator from 'email-validator';
import {RESOLVE_EMAIL_URL} from '../../constants';
import {Actions} from 'react-native-router-flux';

const styles = (theme) => ({
  container: {
    paddingTop: 50,
    marginTop: '50px',
    minWidth: 150,
    minHight: 480,
    maxHight: 'auto',
    maxWidth: '100%',
    //backgroundColor:"#E2E0FB",
    // padding: 20,
    // maxWidth: 400
    paddingBottom: 40,
  },
  auth: {
    width: '320px',
    hight: '330px',
  },
  emailField: {
    width: '360px',
  },
});

class Login extends React.Component {
  state = {
    email: 'nomail',
    error: null,
    signup: 'google',
    existing_user: false,
  };

  handleChange = (key, value) => this.setState({[key]: value, error: false});
  handleKeyDown = (e) => {
    if (e.keyCode === 13) {
      this.handleEmail('email', this.state.email);
    }
  };

  handleEmail = () => {
    if (EmailValidator.validate(this.state.email)) {
      this.setState({error: false});
      axios
        .get(RESOLVE_EMAIL_URL + this.state.email)
        .then((resp) => {
          const {mx_record, existing_user} = resp.data;
          if (mx_record.includes('google')) {
            this.setState({signup: 'google', existing_user});
          } else {
            this.setState({signup: 'not-google', existing_user});
          }
        })
        .catch((err) => {});
    } else {
      this.setState({error: true});
    }
  };

  render() {
    const {classes} = this.props;
    const goToHome = () => {
      Actions.onboarding();
    };
    return (
      <Block>
        <Button onPress={toSignupURL(this.state.email)}>
          Signup with Google
        </Button>
        <Button onPress={goToHome}>Onboarding</Button>
      </Block>
    );
  }
}

export default Login;
