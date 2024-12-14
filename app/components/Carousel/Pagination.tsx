import {
  View,
  TouchableWithoutFeedback,
} from 'react-native';
import React from 'react';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function Pagination({
  data,
  currentIndex,
  onDotPress,
}: {
  data: any;
  currentIndex: number;
  onDotPress: any;
}) {
  return (
    <View className="flex-1 flex-row justify-end items-end">
      {data.map((_: any, index: number) => {
        return (
          <TouchableWithoutFeedback
            onPress={() => onDotPress(index)}
            key={index}>
            <MaterialIcon
              name="circle-small"
              size={30}
              className="-ml-4"
              color={index === currentIndex ? 'red' : 'white'}
              key={index}
            />
          </TouchableWithoutFeedback>
        );
      })}
    </View>
  );
}
