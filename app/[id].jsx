import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { formatter } from "../data/currency";

import { useSelector } from "react-redux";

export default function ItemDetails() {

    const item = useSelector(state => state.products.selectedProduct)

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

                    <View>
                        {item.brandName && <Text>Brand: {item.brandName}</Text>}
                        <Text>SKU: {item.SKU}</Text>
                        <Text>Colour: {item.colour}</Text>
                    </View>

                    <Text className="mb-32 leading-5">{item.description}</Text>
                </View>

            </ScrollView>

            <TouchableOpacity className="bg-black p-4 w-[90%] self-center items-center justify-center rounded-lg absolute bottom-10">
                <Text className="text-white text-lg font-bold">Add to cart</Text>
            </TouchableOpacity>

        </>
    )
}