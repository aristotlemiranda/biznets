import React from 'react';
import {View, TouchableOpacity, Alert} from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useNavigation} from '@react-navigation/native';
import type {NativeStackNavigationProp} from '@react-navigation/native-stack';

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
        <TouchableOpacity onPress={() => navigation.navigate('Settings')}>
          <MaterialIcon name="cog" size={34} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => Alert.alert('Refresh')}>
          <MaterialIcon name="refresh" size={34} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => Alert.alert('Search')}>
            <MaterialIcon name="magnify" size={34} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AppMenu;
