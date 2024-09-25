import { useLocalSearchParams } from "expo-router";
import { Text } from "react-native";

export default function Item() {

    const  {itemId}  = useLocalSearchParams()

    return (
        <Text>{itemId}</Text>
    )
}