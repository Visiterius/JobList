import { configureStore } from '@reduxjs/toolkit'
import addPost from "./addPostSlice";


export const store = configureStore({
    reducer: {
        addPost: addPost,
    }
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch