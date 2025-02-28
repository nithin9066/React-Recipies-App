import { createSlice } from "@reduxjs/toolkit";

const categorySlicer = createSlice({
    name: "category",
    initialState: {
        categories: [],
        isLoading: false
    },
    reducers: {
        getCategories: (state) => {            
            state.isLoading = true
        },
        fetchCategories: (state, action) => {            
            state.categories = action.payload
        },
        setLoading: (state, action) => {
            state.isLoading = action.payload
        }
    }
})
export const { getCategories, fetchCategories, setLoading } = categorySlicer.actions
export default categorySlicer.reducer;