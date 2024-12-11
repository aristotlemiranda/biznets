import {View, Text} from 'react-native';
import React from 'react';

export default function TotalAmount() {
  return (
    <View className="p-3">
      <View className="justify-center items-center">
        <View className="flex flex-row">
          <Text className={`${true ? 'text-5xl' : 'text-6xl'} text-red-600`}>
            S$
          </Text>
          <Text className={true ? 'text-5xl' : 'text-6xl'}>1234567890.00</Text>
        </View>
        <Text className="text-2xl">123456789 Txn received (calender) </Text>
      </View>
    </View>
  );
}
