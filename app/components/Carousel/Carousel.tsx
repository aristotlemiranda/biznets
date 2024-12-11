import React, {useEffect, useRef, useState} from 'react';
import {Alert, Dimensions, Text, TouchableOpacity, View} from 'react-native';
import Carousel, {ICarouselInstance} from 'react-native-reanimated-carousel';
import Pagination from './Pagination';

const data = [...new Array(6).keys()];
const width = Dimensions.get('window').width;

export default function CarouselPage() {
  const ref = useRef<ICarouselInstance>(null);
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const pagingPressHandler = (index: number) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    if (ref) {
      ref.current?.scrollTo({index: currentIndex});
    }
  }, [currentIndex]);

  return (
    <View className="flex-1">
      <Carousel
        ref={ref}
        width={width}
        height={width / 3}
        data={data}
        autoPlay={true}
        scrollAnimationDuration={200}
        autoPlayInterval={10000}
        onSnapToItem={index => setCurrentIndex(index)}
        renderItem={({item}) => (
          <TouchableOpacity
            className="flex-1 items-center justify-center bg-blue-500 rounded-md m-2"
            activeOpacity={1}
            onPress={() => {
              Alert.alert('Pressed', item.toString());
            }}>
            <Text className="text-xl">{item}</Text>

            <Pagination
              data={data}
              currentIndex={currentIndex}
              onDotPress={pagingPressHandler}
            />
          </TouchableOpacity>
        )}
        pagingEnabled={true}
      />
    </View>
  );
}
