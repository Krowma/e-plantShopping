import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Initialize items as an empty array
  },
  reducers: {
    addItem: (state, action) => {
        const { name, image, cost } = action.payload;
        const existingItem = state.items.find((e) => (e.name == name));
        if(existingItem) {
            existingItem.quatity++;
        }
        else {
            state.items.push({ name, image, cost, quantity: 1 });
        }
    },
    removeItem: (state, action) => {
        const { name } = action.payload;
        state.items = state.items.filter((e)=>(e.name !== name ));
    },
    updateQuantity: (state, action) => {
        const { name, amount } = action.payload;
        const existingItem = state.items.find((e) => (e.name == name));
        if(existingItem) {
            existingItem.quantity = amount;
        }
    },
  },
});

export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

export default CartSlice.reducer;
