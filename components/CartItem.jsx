import { Image, Text, View } from "react-native";
import EvilIcons from '@expo/vector-icons/EvilIcons';
import Ionicons from '@expo/vector-icons/Ionicons';
import { formatter } from "../data/currency"
import { TouchableOpacity } from "react-native";

export default function CartItem(item) {

    const handleAddQty = () => {}
    const handleSubtractQty = () => {}
    const handleRemoveItem = () => {}

    return (
        <View className="flex-row justify-between rounded-lg bg-white p-2">
            <Image src={item.mainImage}
                className="rounded-lg"
                style={{
                    width: 140,
                    aspectRatio: 1,
                    objectFit: 'cover'
                }} />

            <View className="flex-shrink w-[100%] px-2 justify-between">
                <Text className="text-lg leading-6" numberOfLines={2}>{item.name}</Text>

                <View className="flex-row items-center self-start gap-6">
                    <Ionicons name="remove" size={24} color="gray" onPress={handleAddQty}/>
                    <Text className="border border-black">{1}</Text>
                    <Ionicons name="add" size={24} color="gray" onPress={handleSubtractQty} />
                </View>

                <Text className="text-sm self-end text-neutral-500">{
                    formatter(
                        item.price.amount,
                        item.price.currency
                    )
                }</Text>

            </View>

            <TouchableOpacity className="self-start" onPress={handleRemoveItem}>
                <EvilIcons name="close" size={30} color="gray" />
            </TouchableOpacity>

        </View>

    )
}