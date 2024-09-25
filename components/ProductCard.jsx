import { Image, Text, TouchableOpacity } from "react-native";
import formatCurrency from "../data/currency"
import { router } from "expo-router";

export default function ProductCard(props) {

    return (
        <TouchableOpacity onPress={() => router.push(`/${props.id}`)}
        className="bg-white w-[49%] rounded-lg p-4">
            <Image src={props.mainImage} style={{
                width: "100%",
                aspectRatio: 1,
                objectFit: "cover",
            }} />
            <Text className="text-md leading-4" numberOfLines={2}>{props.name}</Text>

            <Text className="mt-2">Colour: {props.colour}</Text>

            <TouchableOpacity className="flex-row items-center justify-between mt-2">
                <Text className="text-lg font-semibold">{
                    formatCurrency(
                        props.price.amount,
                        props.price.currency
                    )
                }</Text>
                <Text className={props.stockStatus.includes("IN") ? 'text-green-700' : 'text-red-600'} >{props.stockStatus.toLowerCase()}</Text>
            </TouchableOpacity>
        </TouchableOpacity>
    )

}