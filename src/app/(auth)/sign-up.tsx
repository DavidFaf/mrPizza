import { View, Text, StyleSheet, TextInput } from "react-native";
import Button from "@/components/Button";
import { useState } from "react";
import Colors from "@/constants/Colors";
import { Link, Stack } from "expo-router";

const signUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState("");


  const validateInput = () => {
    setErrors("");
    if (!email) {
      setErrors("Name is required");
      return false;
    }
    if (!password) {
      setErrors("Price is required");
      return false;
    }
    return true;
  };

  const onCreateAccount = () => {
    if(!validateInput){
        return
    }

    console.warn("Creating Account")
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

      <Text style={{ color: "red" }}>{errors}</Text>
      <Button onPress={onCreateAccount} text="Create an account" />
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
