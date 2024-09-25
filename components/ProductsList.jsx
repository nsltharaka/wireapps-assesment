import { FlatList } from "react-native";
import ProductCard from "../components/ProductCard";

import { useSelector } from "react-redux";

export default function ProductList() {

    const products = useSelector(state => state.products.products)

    return (
        <FlatList
            className="w-screen p-2"
            data={products}
            renderItem={({ item }) => (
                <ProductCard {...item} />
            )}
            numColumns={2}

            contentContainerStyle={{ gap: 10}}
            columnWrapperStyle={{ justifyContent: "space-between" }}
        />
    )
}