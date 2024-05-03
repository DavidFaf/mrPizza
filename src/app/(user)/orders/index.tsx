import { View, Text, FlatList, ActivityIndicator } from "react-native";
import React from "react";
import orders from "@assets/data/orders";
import OrderListItem from "@/components/OrderListItem";
import { useMyOrderList } from "@/api/orders";

const index = () => {
  const { data: orders, error, isLoading } = useMyOrderList();

  if (isLoading) {
    return <ActivityIndicator />;
  }
  if (error) {
    return <Text>Failed to fetch</Text>;
  }
  return (
    <FlatList
      data={orders}
      renderItem={({ item }) => <OrderListItem order={item} />}
      contentContainerStyle={{ gap: 10, padding: 10 }} // Space within rows
    />
  );
};

export default index;
