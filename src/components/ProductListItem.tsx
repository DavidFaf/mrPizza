import { Image, StyleSheet, Text, Pressable } from "react-native";
import { Link, useSegments } from "expo-router";

// import EditScreenInfo from "@/components/EditScreenInfo";
import Colors from "@/constants/Colors";
import { Tables } from "@/types";
import RemoteImage from "./RemoteImage";

export const defaultPizzaImage =
  "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/food/default.png";

type ProductListItemProps = {
  product: Tables<"products">;
};

export function ProductListItem({ product }: ProductListItemProps) {
  const segments = useSegments();
  return (
    <Link href={`/${segments[0]}/menu/${product.id}`} asChild>
      <Pressable style={styles.container}>
        <RemoteImage
          path={product.image}
          fallback={defaultPizzaImage}
          style={styles.image}
          resizeMode="contain"
        />
        <Text style={styles.title}>{product.name}</Text>
        <Text style={styles.price}>{product.price}</Text>
      </Pressable>
    </Link>
  );
}

export default ProductListItem;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    padding: 10,
    borderRadius: 20,
    flex: 1,
    maxWidth: "50%",
  },
  title: {
    fontSize: 15,
    fontWeight: "bold",
    marginBottom: 5,
  },
  price: {
    color: Colors.light.tint,
    fontWeight: "bold",
  },
  image: {
    aspectRatio: 1,
    width: "100%",
  },
});
