import { createSlice } from "@reduxjs/toolkit"

const initialStateValue = { title: "", body: "" }

export const postSlice = createSlice({
    name: "post",
    initialState: {
        value: initialStateValue
    },
    reducers: {
        newPost: (state, action) => {
            state.value = action.payload
        }
    }
})

export const { newPost } = postSlice.actions

export default postSlice.reducer