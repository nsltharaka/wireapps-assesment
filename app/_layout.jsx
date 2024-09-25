import Ionicons from '@expo/vector-icons/Ionicons';
import { router, Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{
        title: "Shop",
        headerRight: () => (
          <Ionicons name="cart-outline" size={30} color="black"  onPress={() => router.push("/cart")}/>
        )
      }} />
      <Stack.Screen name="[id]"  options={{
        headerTitle : "Product details",
        headerRight: () => (
          <Ionicons name="cart-outline" size={30} color="black"  onPress={() => router.push("/cart")}/>
        )
      }}/>
      <Stack.Screen name="cart" options={{
        title: "Cart"
      }} />
    </Stack>
  );
}
