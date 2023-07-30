'use client';
import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'Cart',
  initialState: [],
  reducers: {
    add(state, action) {
      state.push(action.payload);
    },
    remove(state, action) {
      const itemIdToRemove = action.payload;
      const index = state.findIndex((item) => item.id === itemIdToRemove);
      if (index !== -1) {
        state.splice(index, 1);
      }
    }
  }
});

export const { add, remove } = cartSlice.actions;
export default cartSlice.reducer;
