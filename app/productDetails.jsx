import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { formatter } from "../data/currency";

import { router } from "expo-router";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import cartSlice from "../data/cartSlice";

export default function ItemDetails() {

    const item = useSelector(state => state.products.selectedProduct)
    const cartItems = useSelector(state => state.cart.items)
    const dispatch = useDispatch()

    const [selectedSize, setSelectedSize] = useState(item.sizes[0] || null)

    const handleAddItem = () => {
        dispatch(cartSlice.actions.addItem({ ...item, size: selectedSize }))
        router.push("/cart")
    }

    const alreadyInCart = cartItems.find(i => i.id === item.id)

    const SizeIcon = ({ value, selected }) => (
        <TouchableOpacity
            onPress={() => setSelectedSize(value)}
            className={`ml-4 rounded-full border border-black aspect-square items-center justify-center w-8 ${selected && 'bg-black'}`}>
            <Text className={`font-semibold ${selected && 'text-white'}`}>{value}</Text>
        </TouchableOpacity>
    )

    return (
        <>
            <ScrollView>
                <Image
                    src={item.mainImage}
                    style={{
                        width: '100%',
                        aspectRatio: 1,
                        objectFit: 'cover'
                    }}
                />

                <View className="px-2 gap-4 mt-1">
                    <Text className="text-xl font-semibold">{item.name}</Text>

                    <View>
                        <Text className="text-2xl font-bold">{formatter(
                            item.price.amount,
                            item.price.currency
                        )}</Text>
                        <Text className={`${item.stockStatus.includes("IN") ? 'text-green-700' : 'text-red-600'} text-lg`} >{item.stockStatus.toLowerCase()}</Text>
                    </View>

                    {item.sizes.length &&
                        <View className="flex-row">
                            <Text className="font-semibold text-lg mb-2">Sizes:</Text>
                            <View className="flex-row">
                                {
                                    item.sizes.map((size, i) => (
                                        <SizeIcon key={i} value={size} selected={selectedSize == size} />
                                    ))
                                }
                            </View>
                        </View>
                    }

                    <View>
                        {item.brandName && <Text>Brand: {item.brandName}</Text>}
                        <Text>SKU: {item.SKU}</Text>
                        <Text>Colour: {item.colour}</Text>
                    </View>

                    <Text className="mb-32 leading-5">{item.description}</Text>
                </View>

            </ScrollView>

            {
                item.stockStatus.includes("IN") &&
                <TouchableOpacity
                    disabled={alreadyInCart}
                    onPress={handleAddItem}
                    className="bg-black p-4 w-[90%] self-center items-center justify-center rounded-lg absolute bottom-10">
                    <Text className="text-white text-lg font-bold">{alreadyInCart ? 'Already in the cart' : 'Add to cart'}</Text>
                </TouchableOpacity>
            }

        </>
    )
}