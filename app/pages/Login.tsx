import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function Login({navigation}: any) {
  return (
    <View className="flex-1 items-center justify-center">
      <TouchableOpacity onPress={() => navigation.navigate('Scanqr')} className="flex flex-row items-center p-4 bg-red-700 rounded-md">
        <MaterialIcon name="qrcode-scan" size={30} color="white" />
        <Text className="ml-2 color-white font-bold">Scan QR</Text>
      </TouchableOpacity>
    </View>
  );
}
