import { View, Text, FlatList } from 'react-native'
import React from 'react'
import orders from '@assets/data/orders'
import OrderListItem from '@/components/OrderListItem'

const index = () => {
  return (
    <FlatList
    data={orders}
    renderItem={({ item }) => <OrderListItem order={item} />}
    contentContainerStyle={{ gap: 10, padding: 10 }} // Space within rows
    
    />
  )
}

export default index