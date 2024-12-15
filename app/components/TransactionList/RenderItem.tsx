import {View, Text, TouchableOpacity, Alert} from 'react-native';
import React from 'react';
import FastImage from '@d11/react-native-fast-image';

function RenderItem({item}: any) {
  return (
    <TouchableOpacity onPress={() => Alert.alert('Item:', item.sku)}>
      <View className="flex flex-row bg-white rounded-lg p-2 mx-2 my-0.5 shadow-[0_15px_20px_-3px_rgba(0,0,0,0.4),0_8px_16px_-6px_rgba(0,0,0,0.25)]">
        <View className="w-[34px] h-[34px] m-1">
          <FastImage
            // eslint-disable-next-line react-native/no-inline-styles
            style={{
              width: '100%',
              height: '100%',
            }}
            source={require('../../../assets/images/Icon_DBSPayLah.png')}
            resizeMode={FastImage.resizeMode.contain}
          />
        </View>
        <View className="flex-1 justify-between ml-2">
          <Text className="text-lg font-normal">{item.title}</Text>
          <Text className="text-sm text-gray-500">SKU: {item.sku}</Text>
        </View>
        <View className="justify-center items-end ml-auto">
          <Text className="text-lg font-bold">${item.price}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

export default React.memo(RenderItem);
