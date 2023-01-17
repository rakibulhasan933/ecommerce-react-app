import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	products: [],
};

export const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		addToCart: (state, action) => {
			const item = state.products.find((item) => item.id === action.payload.id);
			if (item) {
				item.quantity += action.payload.quantity;
			} else {
				state.products.push(action.payload);
			}
		},
		removedItem: (state, action) => {
			state.products = state.products.filter((item) => item.id !== action.payload);
		},
		incrementByAmount: (state, action) => {
			state.value += action.payload
		},
	},
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = cartSlice.actions

export default cartSlice.reducer;