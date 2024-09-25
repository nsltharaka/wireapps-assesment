import { Stack } from "expo-router";
import { Text } from "react-native";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{
        title: "Shop",
        headerRight: () => (
          <Text>cart icon here</Text>
        )
      }} />
      <Stack.Screen name="[id]" />
    </Stack>
  );
}
