const { createSlice } = require("@reduxjs/toolkit");

import data from "../data/products.json"

const initialState = {
    items: data.slice(0, 5),
    total : 0
}

export default cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {

    }
})