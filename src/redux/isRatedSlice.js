import {createSlice} from '@reduxjs/toolkit';

const isRatedSlice = createSlice({
	name: 'rate',
	initialState: {
		value: false
	},
	reducers: {
		rate: (state) => {
			state.value = !state.value
		},
	}
})

export const { rate } = isRatedSlice.actions;

export default isRatedSlice.reducer;
