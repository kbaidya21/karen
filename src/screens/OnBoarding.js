import React, {Component} from 'react';
import {
  ImageBackground,
  Image,
  StyleSheet,
  StatusBar,
  Dimensions,
} from 'react-native';
import {Block, Button, Text, theme} from 'galio-framework';
import argonTheme from '../constants/Theme';
import {Actions} from 'react-native-router-flux';

const {height, width} = Dimensions.get('screen');

const goToLogin = () => {
  Actions.login();
};

const goToSignup = () => {
  Actions.signup();
};
class OnBoarding extends Component {
  render() {
    return (
      <Block flex style={styles.container}>
        <StatusBar hidden />
        <Block flex center>
          <ImageBackground
            source={require('../assets/img/bg.png')}
            style={{height, width, zIndex: 1}}
          />
        </Block>
        <Block flex space="between" style={styles.padded}>
          <Block
            flex
            space="around"
            style={{zIndex: 4}}
            style={{marginBottom: '-28%'}}>
            <Block style={styles.title}>
              <Block>
                <Text color="white" size={22} style={{textAlign: 'center'}}>
                  Schedule More
                </Text>
                <Text color="white" size={22} style={{textAlign: 'center'}}>
                  Appointments
                </Text>
                <Text color="white" size={22} style={{textAlign: 'center'}}>
                  Make More Money
                </Text>
              </Block>
            </Block>
          </Block>
          <Block center style={{marginBottom: '3%'}}>
            <Button
              style={styles.buttonLogin}
              color={argonTheme.COLORS.SECONDARY}
              onPress={() => navigation.navigate('Home')}
              textStyle={{color: argonTheme.COLORS.WHITE}}>
              Login In with Google
            </Button>
          </Block>
          <Block center style={{marginBottom: '2%'}}>
            <Button
              style={styles.buttonSignup}
              color={argonTheme.COLORS.SECONDARY}
              onPress={goToSignup}
              textStyle={{color: argonTheme.COLORS.WHITE}}>
              Sign Up with Google
            </Button>
          </Block>
        </Block>
      </Block>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.COLORS.BLACK,
  },
  padded: {
    paddingHorizontal: theme.SIZES.BASE * 2,
    position: 'relative',
    bottom: theme.SIZES.BASE,
    zIndex: 2,
  },
  buttonSignup: {
    width: width - theme.SIZES.BASE * 7,
    height: theme.SIZES.BASE * 3,
    backgroundColor: '#279186',
    shadowRadius: 0,
    shadowOpacity: 0,
    borderColor: 'black',
    borderRadius: 5,
    bottom: '10%',
  },
  buttonLogin: {
    width: width - theme.SIZES.BASE * 7,
    height: theme.SIZES.BASE * 3,
    backgroundColor: '#7f19b8',
    shadowRadius: 0,
    shadowOpacity: 0,
    borderColor: 'black',
    borderRadius: 5,
    bottom: '10%',
  },
  logo: {
    width: 200,
    height: 60,
    zIndex: 2,
    position: 'relative',
    marginTop: '-50%',
  },
  title: {
    marginTop: '-250%',
    padding: '20%',
    // marginLeft: '8%'
  },
});

export default OnBoarding;
