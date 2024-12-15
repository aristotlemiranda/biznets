import React from 'react';
import { View, TouchableOpacity, Alert } from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';

type RootStackParamList = {
  Settings: undefined;
  // add other screens here
};

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

const AppMenu = () => {
  const navigation = useNavigation<NavigationProp>();

  return (
    <View className="items-center justify-center p-2 drop-shadow-2xl android:elevation-5">
      <View className="flex-row justify-around items-center w-2/3 space-x-4">
        <TouchableOpacity
          onPress={() => navigation.navigate('Settings')}
          className="p-3 bg-blue-500 rounded-full shadow-lg"
        >
          <MaterialIcon name="cog" size={25} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => Alert.alert('Refresh')}
          className="p-3 bg-green-500 rounded-full shadow-lg"
        >
          <MaterialIcon name="refresh" size={25} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => Alert.alert('Search')}
          className="p-3 bg-red-500 rounded-full shadow-lg"
        >
          <MaterialIcon name="magnify" size={25} color="#fff" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AppMenu;
