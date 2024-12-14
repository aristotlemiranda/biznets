/* eslint-disable react-native/no-inline-styles */
import { View, Text } from 'react-native';
import React from 'react';
import FastImage from '@d11/react-native-fast-image';

function RenderItem({ item }: any) {
  return (
    <View className="flex flex-row border-gray-500 border-t p-1">
      <FastImage
        style={{ width: 38, height: 38 }}
        source={require('../../../assets/images/Icon_Maybank.png')}
        resizeMode={FastImage.resizeMode.contain}
        className="m-1"
      />
      <View className="justify-between ml-2">
        <Text className="text-pretty font-bold">{item.id}</Text>
        <Text className="text-sm text-gray-500">SKU: {item.sku}</Text>
      </View>
      <View className="justify-center items-end ml-auto">
        <Text className="text-base font-bold">${item.price}</Text>
      </View>
    </View>
  );
}

export default React.memo(RenderItem);
