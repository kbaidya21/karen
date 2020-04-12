import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Route,
  Router,
  Switch,
} from 'react-native';
import OnBoarding from './screens/OnBoarding';
import Routes from './Routes';
class App extends Component {
  render() {
    return <Routes />;
  }
}

export default App;
