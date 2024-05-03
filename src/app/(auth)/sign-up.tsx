import { View, Text, StyleSheet, TextInput, Alert } from "react-native";
import Button from "@/components/Button";
import { useState } from "react";
import Colors from "@/constants/Colors";
import { Link, Stack, router } from "expo-router";
import { supabase } from "@/lib/supabase";

const signUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  async function onCreateAccount() {
    setLoading(true);
    const { error } = await supabase.auth.signUp({ email, password });

    if (error) Alert.alert(error.message);
    // await new Promise(resolve => setTimeout(resolve, 600));
    router.push("/")

    setLoading(false);
  }

  return (
    <View style={styles.container}>
      <Stack.Screen options={{ title: "Sign Up" }} />
      <Text style={styles.label}>Email</Text>
      <TextInput
        value={email}
        onChangeText={setEmail}
        placeholder="jon@gmail.com"
        style={styles.input}
      />

      <Text style={styles.label}>Password</Text>
      <TextInput
        value={password}
        onChangeText={setPassword}
        style={styles.input}
        secureTextEntry={true}
      />

      <Button
        onPress={onCreateAccount}
        disabled={loading}
        text={loading ? "Creating account....." : "Create an account"}
      />
      <Link href={"/sign-in"} asChild>
        <Text style={styles.textButton}>Sign In</Text>
      </Link>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 10,
  },
  label: {
    color: "grey",
    fontSize: 16,
  },
  input: {
    backgroundColor: "white",
    padding: 10,
    borderRadius: 5,
    marginTop: 5,
    marginBottom: 20,
  },
  textButton: {
    alignSelf: "center",
    fontWeight: "bold",
    color: Colors.light.tint,
    marginVertical: 10,
  },
});
export default signUp;
