import { Image, StyleSheet, Text, View } from "react-native";

// import EditScreenInfo from "@/components/EditScreenInfo";
import Colors from "@/constants/Colors";
import products from "assets/data/products";

const product = products[0]

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <Image source={{uri: product.image}} style={styles.image}/>
      <Text style={styles.title}>{product.name}</Text>
      <Text style={styles.price}>{product.price}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 20
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  price : {
    color: Colors.light.tint,
    fontWeight: 'bold'
  },
  image :{
    aspectRatio: 1,
    width: '100%'
  }
});
