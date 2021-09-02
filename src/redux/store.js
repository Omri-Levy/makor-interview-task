import { configureStore } from '@reduxjs/toolkit'
import isRatedReducer from './isRatedSlice';

const store = configureStore({
	reducer: {
		isRated: isRatedReducer
	}
})

export default store;
