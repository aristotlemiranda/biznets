import {
  View,
  StyleSheet,
  TouchableOpacity,
  Button,
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
              color={index === currentIndex ? 'red' : 'black'}
              key={index}
            />
          </TouchableWithoutFeedback>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  pagind: {
    margin: 0,
    padding: 0,
    opacity: 1,
  },
  paginationDot: {
    width: 10,
    height: 10,
    borderRadius: 4,
    marginHorizontal: 4,
    zIndex: 1000,
  },
  activeDot: {
    backgroundColor: '#007AFF',
  },
  inactiveDot: {
    backgroundColor: '#C0C0C0',
  },
});
