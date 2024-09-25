import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { View, Text, TouchableOpacity } from "react-native";
import { useSelector } from "react-redux";

export default function CartIcon() {

    const cartLength = useSelector(state => state.cart.length)

    return (
        <TouchableOpacity onPress={() => router.push("/cart")}>
            <Ionicons name="cart-outline" size={30} color="black" />
            <View className="absolute -top-1 -right-2 w-5 bg-red-500 rounded-full aspect-square items-center justify-center">
                <Text className="text-white font-bold">{cartLength}</Text>
            </View >
        </TouchableOpacity>
    )
}