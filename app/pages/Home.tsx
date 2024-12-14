import React from 'react';
import { View } from 'react-native';
import CarouselPage from '../components/Carousel/Carousel';
import TransactionsList from '../components/TransactionList/TransactionsList';
import TotalAmount from '../components/TotalAmount/TotalAmount';
import AppMenu from '../components/Menu/AppMenu'; // Ensure correct path to AppMenu

export default function Home() {
  return (
    <View className="flex-1">
      <TotalAmount />
      <CarouselPage />
      <AppMenu />
      <TransactionsList />
    </View>
  );
}
