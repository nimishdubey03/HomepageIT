import {Image, Text, Touchable, TouchableOpacity, View} from 'react-native';
import React from 'react';
import styles from './style';

const WelcomeScreen = ({navigation}) => {
  const navigateToLogin = () => {
    navigation.navigate('LoginScreen');
  };
  const navigateToSignUp = () => {
    navigation.navigate('SignUpScreen');
  };
  const navigateToPrivacy = () => {
    navigation.navigate('PrivacyScreen');
  };

  return (
    <View style={styles.container}>
      <View style={styles.topView}>
        <View style={styles.welcomeImgView}>
          <Image
            style={styles.welcomeImg}
            source={require('../../assets/welcomeimg.png')}
          />
        </View>
      </View>
      <View style={styles.bottomView}>
        <View style={styles.bottomWrap}>
          <View style={styles.headingView}>
            <Text style={styles.headingTxt}>Welcome</Text>
          </View>
          <View style={styles.loremView}>
            <Text style={styles.loremTxt}>
              lipsum as it is sometimes known, is dummy text used in laying out
              print, graphic or web designs. The passage is attributed to an
              unknown
            </Text>
          </View>
          <View style={styles.btnView}>
            <TouchableOpacity
              style={styles.btnWelcome}
              onPress={navigateToLogin}>
              <Text style={styles.welcomeBtnTxt}>Log In</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.btnWelcome}
              onPress={navigateToSignUp}>
              <Text style={styles.welcomeBtnTxt}>Sign Up</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default WelcomeScreen;
