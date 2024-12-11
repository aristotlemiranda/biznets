import {View, Text} from 'react-native';
import React from 'react';
import FastImage from '@d11/react-native-fast-image';

function RenderItem({item}: any) {
  return (
    <View className="flex flex-row border-t p-1 border-gray-800">
      <FastImage
        style={{width: 38, height: 38}}
        source={require('../../../assets/images/Icon_DBSPayLah.png')}
        resizeMode={FastImage.resizeMode.contain}
        className="m-1"
      />
      <Text className="m-1">| {item.id} |</Text>
      <Text className="m-1">{item.title} |</Text>
      <Text className="m-1">{item.price}</Text>
    </View>
  );
}

export default React.memo(RenderItem);
// export default RenderItem;
