import { createSlice } from '@reduxjs/toolkit';

export const categorySlice = createSlice({
    name: 'category',
    initialState: {
        selectedCategory: 'SHOW ALL'
    },
    reducers: {
        filterCategory: (state, action) => {
            state.selectedCategory = action.payload;
        }
    },
})

export const getSelectedCategory = state => state.category.selectedCategory;
export const { filterCategory } = categorySlice.actions;
export default categorySlice.reducer;