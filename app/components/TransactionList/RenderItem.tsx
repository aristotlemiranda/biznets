import { View, Text, TouchableOpacity, Alert } from 'react-native';
import React from 'react';
import FastImage from '@d11/react-native-fast-image';

function RenderItem({ item }: any) {
  return (
<TouchableOpacity onPress={() => Alert.alert('Item:', item.sku)}>
    <View className="flex flex-row bg-white shadow-lg rounded-lg p-2 ml-1 mr-1 m-0.5 border border-gray-300">
      <FastImage
        style={{ width: 34, height: 34 }}
        source={require('../../../assets/images/Icon_Maybank.png')}
        resizeMode={FastImage.resizeMode.contain}
        className="m-1"
      />
      <View className="flex-1 justify-between ml-2">
        <Text className="text-lg font-normal">{item.title}</Text>
        <Text className="text-sm text-gray-500">SKU: {item.sku}</Text>
      </View>
      <View className="justify-center items-end ml-auto">
        <Text className="text-lg font-bold text-blue-600">${item.price}</Text>
      </View>
    </View> 
    </TouchableOpacity>
  );
}

export default React.memo(RenderItem);
