const { createSlice } = require("@reduxjs/toolkit");


const initialState = {
    items: []
}

export default cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addItem: (state, action) => {
            const item = action.payload
            state.items = [...state.items, { ...item, quantity: 1 }]
        },
        removeItem: (state, action) => {
            state.items = state.items.filter(i => i.id !== action.payload)
        },
        incrementQuantity: (state, action) => {
            state.items = state.items.map(i => i.id === action.payload ? { ...i, quantity: i.quantity + 1 } : i)
        },
        decrementQuantity: (state, action) => {
            state.items = state.items.map(i => i.id === action.payload ? { ...i, quantity: i.quantity - 1 } : i)
        },
    }
})