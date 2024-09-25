import { Stack } from "expo-router";
import { Provider } from "react-redux";
import CartIcon from "../components/CartIcon";
import { store } from "../data/store";

function AppLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{
        title: "Shop",
        headerRight: () => <CartIcon />
      }} />
      <Stack.Screen name="productDetails" options={{
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
