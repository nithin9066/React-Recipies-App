import { createSlice } from "@reduxjs/toolkit";

const categorySlicer = createSlice({
    name: "category",
    initialState: {
        categories: [],
        isLoading: false,
        error: null
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
        },
        setError: (state, action) => {
            state.error = action.payload
        }
    }
})
export const { getCategories, fetchCategories, setLoading, setError } = categorySlicer.actions
export default categorySlicer.reducer;