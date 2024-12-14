/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../pages/Home';
import Login from '../pages/Login';
import {Image, StyleSheet, TouchableOpacity} from 'react-native';
import ScanQR from '../pages/ScanQR';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import Settings from '../pages/Settings';
import {useNavigation} from '@react-navigation/native';

const Stack = createNativeStackNavigator();

const ShopImage = () => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPressIn={() => {
        navigation.navigate('Login');
      }}>
      <MaterialIcon name="store-settings" size={20} />
    </TouchableOpacity>
  );
};

export default function AppNavigation() {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerTitle: () => (
          <Image
            source={require('../../assets/images/netspay_biz_logo.png')}
            style={styles.headerImage}
          />
        ),
        headerTitleAlign: 'center',
      }}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerRight: props => <ShopImage {...props} />,
        }}
      />
      <Stack.Screen name="Scanqr" component={ScanQR} />
      <Stack.Screen name="Settings" component={Settings} />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    width: 100,
    height: 40,
    resizeMode: 'contain', // Ensures the image fits within the header
  },
});
