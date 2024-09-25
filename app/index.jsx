import { FlatList, Text, View } from "react-native";
import ProductCard from "../components/ProductCard"

import data from "../data/products.json"

export default function Index() {
  return (
    <View>

      <FlatList
        className="w-screen p-2"
        data={data}
        renderItem={({ item }) => (
            <ProductCard {...item} />
        )}
        numColumns={2}
        
        contentContainerStyle={{gap : 10}}
        columnWrapperStyle={{justifyContent : "space-between"}}
      />

    </View>
  );
}
