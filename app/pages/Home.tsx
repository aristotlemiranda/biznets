import React from 'react';
import {View} from 'react-native';
import CarouselPage from '../components/Carousel/Carousel';
import TransactionsList from '../components/TransactionList/TransactionsList';
import TotalAmount from '../components/TotalAmount/TotalAmount';

export default function Home() {
  return (
    <View className="flex-1">
      <TotalAmount />
      <CarouselPage />
      <TransactionsList />
    </View>
  );
}
