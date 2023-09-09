import React, {useState} from 'react';
import {
  Alert,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import auth from '@react-native-firebase/auth';

import styles from './style';
import {useFocusEffect} from '@react-navigation/native';
import ErrorMessage from '../../components/ErrorMessage';
import {onDisplayNotification} from '../../constants/firebaseFunctions';
import {RED_COLOR} from '../../constants/color';

const LoginScreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigateToHome = () => {
    navigation.navigate('HomeScreen');
  };
  useFocusEffect(
    React.useCallback(() => {
      setPassword('');
      setEmail('');
      return () => {};
    }, [navigation]),
  );
  const validation = () => {
    let isError = true;
    let errorMessage = '';
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
    if (
      password == undefined ||
      (password == '' && email == undefined) ||
      email == ''
    ) {
      isError = false;
      errorMessage = 'Please enter details';
    } else if (reg.test(email) === false) {
      isError = false;
      errorMessage = 'Please enter correct email';
    } else if (password == undefined || password == '') {
      isError = false;
      errorMessage = 'Password is required';
    }
    if (errorMessage !== '') {
      ErrorMessage({
        msg: errorMessage,
        backgroundColor: RED_COLOR,
      });
    }
    return isError;
  };
  const handleSignIn = async () => {
    if (validation()) {
      try {
        let response = await auth().signInWithEmailAndPassword(email, password);
        if (response && response.user) {
          onDisplayNotification({
            title: 'Success',
            body: 'Authenticated successfully',
          });
          navigateToHome();
        }
      } catch (e) {
        console.log(e.message);
        ErrorMessage({
          msg: e.message,
          backgroundColor: RED_COLOR,
        });
      }
    }
  };
  const handleEmail = e => {
    setEmail(e);
  };
  const handlePassword = e => {
    setPassword(e);
  };
  const navigateToSignUp = () => {
    navigation.navigate('SignUpScreen');
  };
  const navigateToRecover = () => {
    navigation.navigate('RecoverScreen');
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.one}>
        <View style={styles.heading}>
          <Text style={styles.headingText}>Hello</Text>
        </View>
        <View style={styles.inputWrapper}>
          <TextInput
            style={styles.input}
            placeholderTextColor={'#7b7a7b'}
            placeholder="Email"
            value={email}
            onChangeText={e => handleEmail(e)}
          />
          <TextInput
            style={styles.input}
            placeholderTextColor={'#7b7a7b'}
            placeholder="Password"
            secureTextEntry={true}
            value={password}
            onChangeText={e => handlePassword(e)}
          />
        </View>
        <TouchableOpacity onPress={handleSignIn}>
          <View style={styles.loginBtn}>
            <Text style={styles.loginBtnText}>LOGIN</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.two}>
        <View style={styles.footerWrap}>
          <View style={styles.footer}>
            <Text style={styles.footerText}>Don't have an account? </Text>
            <TouchableOpacity onPress={navigateToSignUp}>
              <Text style={styles.footerSignText}> SignUp here</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default LoginScreen;
