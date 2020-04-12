import React from 'react';
import {Router, Scene} from 'react-native-router-flux';
import OnBoarding from './screens/OnBoarding';
import Login from './screens/Signup/Signup';
const Routes = () => (
  <Router>
    <Scene key="root">
      <Scene
        key="onboarding"
        component={OnBoarding}
        hideNavBar={true}
        // title="Onboarding"
        initial={true}
      />
      <Scene key="signup" component={Login} hideNavBar={true} title="Signup" />
    </Scene>
  </Router>
);
export default Routes;
