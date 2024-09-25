import { FlatList, Text, TouchableOpacity, View } from "react-native";
import { useSelector } from "react-redux";
import CartItem from "../components/CartItem";
import { formatter } from "../data/currency";

export default function Cart() {

    const cartItems = useSelector(state => state.cart.items)

    const CartSummary = () => {
        const cartTotal = cartItems.length > 0 ? cartItems
            .map(i => i.price.amount * i.quantity)
            .reduce((p, c) => p + c) : 0

        return (
            <>
                <View className="flex-row gap-4 justify-end items-center p-8">
                    <Text className="font-bold text-3xl">Total:</Text>
                    <Text className="text-3xl">{formatter(cartTotal, "GBP")}</Text>
                </View>
                <TouchableOpacity className="bg-black rounded-lg items-center justify-center p-4 mb-14">
                    <Text className="text-white font-bold text-xl">Checkout</Text>
                </TouchableOpacity>
            </>
        )
    }

    const CartEmpty = () => (
        <View className="justify-center items-center h-[100%]">
            <Text>Your cart is empty.</Text>
        </View>
    )

    return (
        <>
            {cartItems.length ?
                <FlatList
                    data={cartItems}
                    renderItem={({ item }) => (
                        <CartItem {...item} />
                    )}
                    contentContainerStyle={{
                        gap: 10,
                        padding: 10
                    }}
                    ListFooterComponent={() => <CartSummary />}
                />
                :
                <CartEmpty />
            }
        </>

    )
}