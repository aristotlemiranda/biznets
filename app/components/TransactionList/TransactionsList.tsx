/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState, useEffect} from 'react';
import {View, FlatList} from 'react-native';
import {ActivityIndicator} from 'react-native-paper';
import RenderItem from './RenderItem';

export default function TransactionsList() {
  const [data, setData] = useState<any[]>([]);
  const [page, setPage] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(false);
  const [hasMore, setHasMore] = useState<boolean>(true);

  const fetchData = async (page: number) => {
    if (loading || !hasMore) {
      return;
    }
    setLoading(true);
    try {
      const response = await fetch(
        `https://dummyjson.com/products?limit=20&skip=${
          page * 20
        }&select=title,price,rating,sku,id`,
      );
      const result = await response.json();
      if (result.products.length === 0) {
        setHasMore(false);
      } else {
        setData(prevData => [...prevData, ...result.products]);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const debounce = (func: (...args: any[]) => void, delay: number) => {
    let timeoutId: NodeJS.Timeout;
    return (...args: any[]) => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
      timeoutId = setTimeout(() => {
        func(...args);
      }, delay);
    };
  };

  useEffect(() => {
    fetchData(page);
  }, [page]);

  const renderItem = ({item}: any) => <RenderItem item={item} />;

  const handleLoadMore = debounce(() => {
    if (!loading && hasMore) {
      setPage(prevPage => prevPage + 1);
    }
  }, 500);

  return (
    <View className="flex-1 items-center justify-center pb-2">
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        numColumns={1}
        onEndReached={handleLoadMore}
        onEndReachedThreshold={0.5}
        ListFooterComponent={
          loading ? <ActivityIndicator size="large" color="#0000ff" /> : null
        }
      />
    </View>
  );
}
