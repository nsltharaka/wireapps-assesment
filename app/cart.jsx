import { FlatList, Text, View } from "react-native";
import { useSelector } from "react-redux";
import CartItem from "../components/CartItem";
import { formatter } from "../data/currency";
import { TouchableOpacity } from "react-native";

export default function Cart() {

    const cart = useSelector(state => state.cart)

    const CartSummary = () => (
        <>
            <View className="flex-row gap-4 justify-end items-center p-8">
                <Text className="font-bold text-3xl">Total:</Text>
                <Text className="text-3xl">{formatter(cart.total, "GBP")}</Text>
            </View>
            <TouchableOpacity className="bg-black rounded-lg items-center justify-center p-4 mb-14">
                <Text className="text-white font-bold text-xl">Checkout</Text>
            </TouchableOpacity>
        </>
    )

    return (
        <FlatList
            data={cart.items}
            renderItem={({ item }) => (
                <CartItem {...item} />
            )}
            contentContainerStyle={{
                gap: 10,
                padding: 10
            }}
            ListFooterComponent={() => <CartSummary />}
        />
    )
}