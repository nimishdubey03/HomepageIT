import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import LoginScreen from '../screens/LoginScreen';
import SignUpScreen from '../screens/signupScreen';
import WelcomeScreen from '../screens/welcomeScreen';
import PrivacyScreen from '../screens/PrivacyScreen';
import RecoverScreen from '../screens/RecoverScreen';
import HomeScreen from '../screens/HomeScreen';
import CoffeeScreen from '../screens/CoffeeScreen';

const Stack = createNativeStackNavigator();

function AppNavigation() {
  return (
    <>
      {/* <LoginScreen /> */}
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="WelcomeScreen"
            component={WelcomeScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="LoginScreen"
            component={LoginScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="SignUpScreen"
            component={SignUpScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="PrivacyScreen"
            component={PrivacyScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="RecoverScreen"
            component={RecoverScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="HomeScreen"
            component={HomeScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="CoffeeScreen"
            component={CoffeeScreen}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

export default AppNavigation;
