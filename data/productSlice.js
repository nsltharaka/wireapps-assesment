
const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

export const fetchProducts = createAsyncThunk("products/get", async () => {
    const response = await fetch("https://s3-eu-west-1.amazonaws.com/api.themeshplatform.com/products.json");
    const json = await response.json();
    return json.data;
})

const initialState = {
    loading: false,
    products: [],
    selectedProduct: null
}

export const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        setSelectedProduct: (state, action) => {
            const productId = action.payload
            state.selectedProduct = state.products.find(p => p.id === productId)
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchProducts.pending, (state) => {
            state.loading = true
        })
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.loading = false
                state.products = action.payload
            })
            .addCase(fetchProducts.rejected, (state) => {
                state.loading = false
            })
    }
})