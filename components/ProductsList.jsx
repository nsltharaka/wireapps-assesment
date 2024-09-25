import { ActivityIndicator, FlatList, View } from "react-native";
import ProductCard from "../components/ProductCard";

import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchProducts } from "@/data/productSlice";

export default function ProductList() {

    const dispatch = useDispatch()
    const products = useSelector(state => state.products.products)
    const loading = useSelector(state => state.products.loading)

    useEffect(() => {
        dispatch(fetchProducts())
    }, [])

    return (
        <>
            {
                loading ?
                <View className="justify-center items-center h-[100%]">
                    <ActivityIndicator size="large" />
                </View>
                    :
                    <FlatList
                        className="w-screen p-2"
                        data={products}
                        renderItem={({ item }) => (
                            <ProductCard {...item} />
                        )}
                        numColumns={2}

                        contentContainerStyle={{ gap: 10 }}
                        columnWrapperStyle={{ justifyContent: "space-between" }}
                    />
            }
        </>
    )
}