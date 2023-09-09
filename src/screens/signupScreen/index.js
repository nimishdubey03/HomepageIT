import React, {useState} from 'react';
import {
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import auth from '@react-native-firebase/auth';

import styles from './style';
import ErrorMessage from '../../components/ErrorMessage';
import {useFocusEffect} from '@react-navigation/native';
import {onDisplayNotification} from '../../constants/firebaseFunctions';
import {RED_COLOR} from '../../constants/color';

const SignUpScreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [cnfmPassword, setCnfmPassword] = useState('');
  const [name, setName] = useState('');

  useFocusEffect(
    React.useCallback(() => {
      setPassword('');
      setEmail('');
      setCnfmPassword('');
      setName('');
      return () => {};
    }, [navigation]),
  );
  const validation = () => {
    let isError = true;
    let errorMessage = '';
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
    if (name == undefined || name == '') {
      isError = false;
      errorMessage = 'Please enter your name';
    } else if (reg.test(email) === false) {
      isError = false;
      errorMessage = 'Please enter correct email';
    } else if (password == undefined || password == '') {
      isError = false;
      errorMessage = 'Password is required';
    } else if (cnfmPassword == undefined || cnfmPassword == '') {
      isError = false;
      errorMessage = 'Enter confirm Password';
    } else if (password !== cnfmPassword) {
      isError = false;
      errorMessage = 'Password not matched';
    }
    if (errorMessage !== '') {
      ErrorMessage({
        msg: errorMessage,
        backgroundColor: RED_COLOR,
      });
    }
    return isError;
  };
  const createUser = async () => {
    if (validation()) {
      try {
        let response = await auth().createUserWithEmailAndPassword(
          email,
          password,
        );
        if (response) {
          navigation.navigate('HomeScreen');
          name;
          onDisplayNotification({
            title: `Hey !! ${name}`,
            body: 'Welcome to explore best coffee with us',
          });
        }
      } catch (e) {
        console.log(e);
        ErrorMessage({
          msg: e.message,
          backgroundColor: RED_COLOR,
        });
      }
    }
  };
  const navigateToSignIn = () => {
    navigation.navigate('LoginScreen');
  };
  const handleEmail = e => {
    setEmail(e);
  };
  const handlePassword = e => {
    setPassword(e);
  };
  const handleCnfmPassword = e => {
    setCnfmPassword(e);
  };
  const handleName = e => {
    setName(e);
  };
  return (
    <ScrollView style={styles.container}>
      <View>
        <View style={styles.one}>
          <View style={styles.heading}>
            <Text style={styles.headingText}>Welcome</Text>
          </View>
          <View style={styles.inputWrapper}>
            <TextInput
              style={styles.input}
              placeholderTextColor={'#7b7a7b'}
              placeholder="Full Name"
              onChangeText={e => handleName(e)}
              value={name}
            />
            <TextInput
              style={styles.input}
              placeholderTextColor={'#7b7a7b'}
              placeholder="Email"
              onChangeText={e => handleEmail(e)}
              value={email}
            />
            <TextInput
              style={styles.input}
              placeholderTextColor={'#7b7a7b'}
              placeholder="Password"
              onChangeText={e => handlePassword(e)}
              value={password}
            />
            <TextInput
              style={styles.input}
              placeholderTextColor={'#7b7a7b'}
              placeholder="Confirm Password"
              onChangeText={e => handleCnfmPassword(e)}
              value={cnfmPassword}
            />
          </View>

          <TouchableOpacity onPress={createUser}>
            <View style={styles.loginBtn}>
              <Text style={styles.loginBtnText}>SIGN UP</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.two}>
          <View style={styles.footerWrap}>
            <View style={styles.footer}>
              <Text style={styles.footerText}>Don't have an account? </Text>
              <TouchableOpacity onPress={navigateToSignIn}>
                <Text style={styles.footerSignText}> SignIn here</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default SignUpScreen;
