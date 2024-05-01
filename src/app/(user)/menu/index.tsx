import { ActivityIndicator, FlatList, View, Text } from "react-native";

import ProductListItem from "@/components/ProductListItem";

import { useProductList } from "@/api/products";

export default function MenuScreen() {
  const { data: products, error, isLoading } = useProductList();

  if (isLoading) {
    return <ActivityIndicator />;
  }

  if (error) {
    return <Text>Failed to retrieve product</Text>;
  }

  return (
    <View>
      <FlatList
        data={products}
        renderItem={({ item }) => <ProductListItem product={item} />}
        numColumns={2}
        contentContainerStyle={{ gap: 10, padding: 10 }} // Space within rows
        columnWrapperStyle={{ gap: 10 }} // Space between columns
      />
    </View>
  );
}
