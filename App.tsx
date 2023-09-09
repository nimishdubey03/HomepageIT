import React, {useEffect} from 'react';
import AppNavigation from './src/AppNavigation';

import {Alert, StatusBar} from 'react-native';
import messaging from '@react-native-firebase/messaging';
import {
  getToken,
  notificationListner,
  requestUserPermission,
} from './src/constants/firebaseFunctions';
import notifee, {AndroidImportance, EventType} from '@notifee/react-native';

const App = () => {
  useEffect(() => {
    const unsubscribe = messaging().onMessage(async remoteMessage => {
      Alert.alert('A new FCM message arrived!', JSON.stringify(remoteMessage));
    });

    return unsubscribe;
  }, []);

  useEffect(() => {
    // To handle notification action in background

    return notifee.onBackgroundEvent(async ({type, detail}) => {
      switch (type) {
        case EventType.DISMISSED:
          console.log('User dismissed notification', detail.notification);
          break;
        case EventType.ACTION_PRESS:
          console.log('User pressed notification', detail.notification);
          // Here goes the action for pressing the notification
          break;
        case EventType.PRESS:
          console.log('User pressed in KILL', detail.notification);
          //
          break;
      }
    });
  }, []);

  useEffect(() => {
    // To handle notification action in foreground

    return notifee.onForegroundEvent(({type, detail}: any) => {
      switch (type) {
        case EventType.DISMISSED:
          console.log('User dismissed notification', detail.notification);
          break;
        case EventType.PRESS:
          console.log(
            'User pressed notification in onForegroundEvent',
            detail.notification,
          );
          break;
      }
    });
  }, []);

  useEffect(() => {
    requestUserPermission();
    notificationListner();
    getToken();
  }, []);
  return (
    <>
      <AppNavigation />
    </>
  );
};

export default App;
