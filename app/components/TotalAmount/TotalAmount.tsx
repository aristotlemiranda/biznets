import {View, Text} from 'react-native';
import React from 'react';

export default function TotalAmount() {
  return (
    <View className="h-[15%] justify-end p-1">
      <View className="items-center mb-0">
        <View className="flex flex-row">
          <Text className={`${true ? 'text-3xl' : 'text-6xl'} text-red-600`}>
            S$
          </Text>
          <Text className={`${true ? 'text-5xl' : 'text-6xl'} underline`}>89</Text>
          <Text className={true ? 'text-3xl' : 'text-6xl'}>.00</Text>
        </View>
        <Text className="text-2xl">123456789 Txn received (calender) </Text>
      </View>
    </View>
  );
}
