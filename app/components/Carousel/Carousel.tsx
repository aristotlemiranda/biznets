import React, {useEffect, useRef, useState} from 'react';
import {Alert, Dimensions, Text, TouchableOpacity, View} from 'react-native';
import Carousel, {ICarouselInstance} from 'react-native-reanimated-carousel';
import Pagination from './Pagination';
import MaterialIncons from 'react-native-vector-icons/MaterialCommunityIcons';

const loremData = [
  {
    id: 0,
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Excepteur vi.',
  },
  {
    id: 1,
    text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem.',
  },
  {
    id: 2,
    text: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco.',
  },
  {
    id: 3,
    text: 'Duis aute irure dolor in reprehenderit in voluptate velit esse.',
  },
  {
    id: 4,
    text: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa.',
  },
  {
    id: 5,
    text: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit.',
  },
];

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
    <View className="h-[14%]">
      <Carousel
        ref={ref}
        width={width}
        height={width / 4}
        data={loremData}
        autoPlay={true}
        scrollAnimationDuration={200}
        autoPlayInterval={10000}
        onSnapToItem={index => setCurrentIndex(index)}
        renderItem={({item}) => (
          <TouchableOpacity
            className="flex-1 bg-blue-800 px-4 relative"
            activeOpacity={1}
            onPress={() => {
              Alert.alert('Pressed', `Slide ${item.id}`);
            }}>
            {/* Bullhorn icon */}
            <View className="absolute left-4 top-2 z-10">
              <MaterialIncons name="bullhorn" size={25} color="yellow" />
            </View>
  
            {/* Text content */}
            <View className="flex-1 pt-4 ml-8">
              <Text className="text-xl text-white text-left px-1">
                {item.text}
              </Text>
            </View>
  
            {/* Pagination dots */}
            <View className="absolute bottom-1 left-0 right-0 z-20 items-center">
              <Pagination
                data={loremData}
                currentIndex={currentIndex}
                onDotPress={pagingPressHandler}
              />
            </View>
          </TouchableOpacity>
        )}
        pagingEnabled={true}
      />
    </View>
  );
}
