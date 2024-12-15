import {View, Text} from 'react-native';
import React from 'react';
import CalendarSelection from '../Calendar/CalendarSelection';

export default function TotalAmount() {
  return (
    <View className="min-h-[25%] p-2">
      <View className="bg-gray-200 rounded-xl p-4 m-2 flex-1 shadow-[0_10px_15px_-3px_rgba(0,0,0,0.3),0_4px_6px_-4px_rgba(0,0,0,0.2)]">
        <View className="space-y-4">
          {/* Amount Section */}
          <View className="h-[60%] flex flex-row items-center justify-center">
            <Text className="text-3xl text-red-600">S$</Text>
            <Text className="text-5xl font-semibold text-black">8,888</Text>
            <Text className="text-3xl text-black">.00</Text>
          </View>

          {/* Transactions Info Section */}
          <View className="h-[40%] w-full flex-row justify-end">
            {/* Left Section (40%) */}
            <View className="w-[40%] border-r flex justify-center mr-0 border-gray-400">
              <Text className="text-gray-600 text-3xl font-medium mr-3 text-right">188</Text>
            </View>

            {/* Right Section (60%) */}
            <View className="w-[60%] px-4 flex">
              <Text className="text-sm text-gray-500 text-left">
                Transactions received
              </Text>
              {/* Calendar Selection */}
              <View className="z-50">
                <CalendarSelection />
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}
