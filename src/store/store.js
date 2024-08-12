import { configureStore } from "@reduxjs/toolkit";
import userReducers from './user.slice'

export const store = configureStore({
    reducer: userReducers
})