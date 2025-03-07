import { createSlice } from "@reduxjs/toolkit";

export const cosmeticsSlice = createSlice({
    name: 'cosmetics',
    initialState: {
        selectedCategory: "all"
    },
    reducers: {
        filterCategory: (state, action) => {
            state.selectedCategory = action.payload;    
        }
    }
})

export const getSelectedCategory = state => state.cosmetics.selectedCategory;
export const { filterCategory } = cosmeticsSlice.actions;
export default cosmeticsSlice.reducer;