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
import {View, Alert} from 'react-native';

const Stack = createNativeStackNavigator();

const ShopImage = () => {
  const navigation = useNavigation();
  return (
    <View className="flex-row items-center space-x-4">
      <TouchableOpacity
        className="px-2"
        onPressIn={() => navigation.navigate('Settings')}>
        <MaterialIcon name="cog-outline" size={25} color="#05598d" />
      </TouchableOpacity>
      <TouchableOpacity
        className="px-2"
        onPressIn={() => Alert.alert('Search')}>
        <MaterialIcon name="magnify" size={25} color="#05598d" />
      </TouchableOpacity>
      <TouchableOpacity
        onPressIn={() => {
          navigation.navigate('Login');
        }}>
        <MaterialIcon name="store-outline" size={25} color="#05598d" />
      </TouchableOpacity>
    </View>
  );
};

export default function AppNavigation() {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerLeft: () => (
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
          title: '',
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
    width: 130,
    height: 40,
    resizeMode: 'contain', // Ensures the image fits within the header
  },
});
