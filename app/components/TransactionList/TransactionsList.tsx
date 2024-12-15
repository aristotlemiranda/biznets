import React, {useState, useEffect, useCallback, memo, useRef} from 'react';
import {
  View,
  FlatList,
  ListRenderItem,
  RefreshControl,
  Text,
  TouchableOpacity,
} from 'react-native';
import {ActivityIndicator} from 'react-native-paper';
import RenderItem from './RenderItem';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';

interface Product {
  id: number;
  title: string;
  price: number;
  rating: number;
  sku: string;
}

interface ApiResponse {
  products: Product[];
  total: number;
  skip: number;
  limit: number;
}

const MemoizedRenderItem = memo(
  RenderItem,
  (prevProps, nextProps) => prevProps.item.id === nextProps.item.id,
);

export default function TransactionsList() {
  const [data, setData] = useState<Product[]>([]);
  const [_page, setPage] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(false);
  const [hasMore, setHasMore] = useState<boolean>(true);
  const [refreshing, setRefreshing] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [initialLoad, setInitialLoad] = useState<boolean>(true);

  const flatListRef = useRef<FlatList<Product>>(null);
  const isLoadingRef = useRef<boolean>(false);

  // Fetch data from the API
  const fetchData = useCallback(
    async (pageNumber: number, isRefresh = false) => {
      if (isLoadingRef.current) return;
      if (!hasMore && !isRefresh) return;

      try {
        isLoadingRef.current = true;
        setLoading(true);
        setError(null);

        const skip = pageNumber * 20;
        const response = await fetch(
          `https://dummyjson.com/products?limit=20&skip=${skip}&select=title,price,rating,sku,id`,
        );

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const result: ApiResponse = await response.json();

        if (isRefresh) {
          setData(result.products);
          setInitialLoad(false); // Mark initial load as complete
        } else {
          setData(prevData => [...prevData, ...result.products]);
        }

        setHasMore(skip + result.products.length < result.total);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
      } finally {
        setLoading(false);
        setRefreshing(false);
        isLoadingRef.current = false;
      }
    },
    [hasMore],
  );

  // Initial load
  useEffect(() => {
    if (initialLoad) {
      fetchData(0, true);
    }
  }, [fetchData, initialLoad]);

  const handleLoadMore = useCallback(() => {
    if (loading || !hasMore || isLoadingRef.current) {
      return;
    }

    const nextPage = Math.floor(data.length / 20);
    setPage(nextPage);
    fetchData(nextPage, false);
  }, [loading, hasMore, data.length, fetchData]);

  const handleRefresh = useCallback(() => {
    setRefreshing(true);
    setPage(0);
    setHasMore(true);
    fetchData(0, true);
  }, [fetchData]);

  const renderItem: ListRenderItem<Product> = useCallback(
    ({item}) => <MemoizedRenderItem item={item} />,
    [],
  );

  const keyExtractor = useCallback((item: Product) => String(item.id), []);

  const ListFooterComponent = useCallback(() => {
    if (error) {
      return (
        <View className="pb-16">
          <Text className="color-red-800">{error}</Text>
        </View>
      );
    }
    if (loading) {
      return (
        <View className="p-16">
          <ActivityIndicator size="small" />
        </View>
      );
    }
    if (!hasMore && data.length > 0) {
      return (
        <View className="p-16 justify-center">
          <Text>No more items to load</Text>
        </View>
      );
    }
    return null;
  }, [loading, error, hasMore, data.length]);

  const ListEmptyComponent = useCallback(() => {
    if (loading && !refreshing) {
      return null;
    }
    return (
      <View className="flex-1 items-center justify-center pb-16">
        <Text>No items found</Text>
      </View>
    );
  }, [loading, refreshing]);

  const scrollToTop = () => {
    if (flatListRef.current) {
      flatListRef.current.scrollToOffset({offset: 0, animated: true});
    }
  };

  return (
    <View className="flex-1 border shadow-slate-50 border-gray-300">
      <View className="flex-row justify-between items-center p-2 mr-2 ml-2">
        <TouchableOpacity
          onPress={scrollToTop}
          className="flex-row items-center">
          <Text className="text-lg font-bold mr-2">Transaction</Text>
          <MaterialIcon name="arrow-up-bold-circle" size={24} color="#000" />
        </TouchableOpacity>
        <Text className="text-lg font-bold">Amount</Text>
      </View>
      <FlatList<Product>
        ref={flatListRef}
        data={data}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        onEndReached={handleLoadMore}
        onEndReachedThreshold={0.5}
        ListFooterComponent={ListFooterComponent}
        ListEmptyComponent={ListEmptyComponent}
        removeClippedSubviews={true}
        maxToRenderPerBatch={10}
        updateCellsBatchingPeriod={50}
        initialNumToRender={10}
        windowSize={21}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={handleRefresh} />
        }
        className="flex-1 flex-grow pb-16"
        decelerationRate={0.7}
      />
    </View>
  );
}
