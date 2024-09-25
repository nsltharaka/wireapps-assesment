import Ionicons from '@expo/vector-icons/Ionicons';
import { router, Stack } from "expo-router";
import { Provider } from "react-redux"
import { store } from "../data/store"
import CartIcon from "../components/CartIcon"

function AppLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{
        title: "Shop",
        headerRight: () => <CartIcon />
      }} />
      <Stack.Screen name="[id]" options={{
        headerTitle: "Product details",
        headerRight: () => <CartIcon />,
      }} />
      <Stack.Screen name="cart" options={{
        title: "Cart"
      }} />
    </Stack>
  );
}

export default function RootLayout() {
  return (
    <Provider store={store}>
      <AppLayout />
    </Provider>
  )
}
