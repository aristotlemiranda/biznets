import {View, Text, Alert} from 'react-native';
import React, {useEffect} from 'react';
import messaging from '@react-native-firebase/messaging';

export default function PushNotification() {
  useEffect(() => {
    // Request user permission for notifications
    const requestPermission = async () => {
      const authStatus = await messaging().requestPermission();
      const enabled =
        authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
        authStatus === messaging.AuthorizationStatus.PROVISIONAL;

      if (enabled) {
        console.log('Authorization status:', authStatus);
        getToken();
      }
    };

    // Get Firebase token
    const getToken = async () => {
      const token = await messaging().getToken();
      console.log('Firebase Token:', token);
    };

    // Handle background and quit notifications
    messaging().onNotificationOpenedApp(remoteMessage => {
      console.log(
        'Notification caused app to open from background state:',
        remoteMessage.notification,
      );
    });

    // Handle notifications when the app is in the background
    messaging()
      .getInitialNotification()
      .then(remoteMessage => {
        if (remoteMessage) {
          console.log(
            'Notification caused app to open from quit state:',
            remoteMessage.notification,
          );
        }
      });

    // Listen for foreground notifications
    const unsubscribe = messaging().onMessage(async remoteMessage => {
      Alert.alert(
        'A new FCM message arrived!',
        JSON.stringify(remoteMessage.notification),
      );
    });

    requestPermission();

    return unsubscribe;
  }, []);
  return (
    <View>
      <Text>PushNotification</Text>
    </View>
  );
}
