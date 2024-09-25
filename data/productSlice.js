import data from "./products.json"

const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
    products: data,
    selectedProduct: null
}

export default productSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        setSelectedProduct: (state, action) => {
            const productId = action.payload
            state.selectedProduct = state.products.find(p => p.id === productId)
        }
    },
})