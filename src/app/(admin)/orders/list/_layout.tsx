import { View, Text } from "react-native";
import React from "react";
import { Tabs, withLayoutContext } from "expo-router";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { SafeAreaView } from "react-native-safe-area-context";

const TopTabs = withLayoutContext(createMaterialTopTabNavigator().Navigator);

const OrderListNavigator = () => {
  return (
    <SafeAreaView edges={["top"]} style={{ backgroundColor: "white", flex: 1 }}>
      <TopTabs>
        <TopTabs.Screen name="index" options={{ title: "active" }} />
      </TopTabs>
    </SafeAreaView>
  );
};

export default OrderListNavigator;
