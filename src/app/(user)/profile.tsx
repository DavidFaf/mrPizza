import { View, Text } from "react-native";
import React from "react";
import { Button } from "react-native";
import { supabase } from "@/lib/supabase";

const ProfileScreen = () => {
  return (
    <View>
      <Text>Profile</Text>
      <Button onPress={() => supabase.auth.signOut()} title="Sign out" />
    </View>
  );
};

export default ProfileScreen;
