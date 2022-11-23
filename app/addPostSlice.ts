import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    posts: []
}

export const addPostSlice = createSlice({
    name: 'addPost',
    initialState,
    reducers: {
        addPost:(state, action) => {
            state.posts = action.payload;
        }
    }
})

export const {addPost} = addPostSlice.actions

export default addPostSlice.reducer