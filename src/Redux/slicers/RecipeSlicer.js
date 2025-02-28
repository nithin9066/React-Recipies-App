import { createSlice } from "@reduxjs/toolkit"

const recipeSlicer = createSlice({
    name: "recipe",
    initialState: {
        recipes: [],
        selectedRecipe: {},
        isLoading: false
    },
    reducers: {
        fetchRecipies: (state, action) => {
            state.recipes = action.payload
            state.isLoading = false
        },
        getRecipies: (state) => {
            state.isLoading = true
        },
        fetchRecipe: (state, action) => {
            state.selectedRecipe = action.payload
            state.isLoading = false
        },
        loadRecipe: (state) => {
            state.isLoading = true
        }
    }
})
export const { fetchRecipies, getRecipies, getRecipe, loadRecipe, fetchRecipe } = recipeSlicer.actions
export default recipeSlicer.reducer