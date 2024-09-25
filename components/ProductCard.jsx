import { Image, Text, TouchableOpacity } from "react-native";
import {formatter} from "../data/currency"
import { router } from "expo-router";
import { useDispatch } from "react-redux";
import productSlice from "@/data/productSlice";

export default function ProductCard(props) {

    const dispatch = useDispatch()

    const handleOnPress = () => {
        dispatch(productSlice.actions.setSelectedProduct(props.id))
        router.push("/productDetails")
    }

    return (
        <TouchableOpacity onPress={handleOnPress}
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
                    formatter(
                        props.price.amount,
                        props.price.currency
                    )
                }</Text>
                <Text className={props.stockStatus.includes("IN") ? 'text-green-700' : 'text-red-600'} >{props.stockStatus.toLowerCase()}</Text>
            </TouchableOpacity>
        </TouchableOpacity>
    )

}