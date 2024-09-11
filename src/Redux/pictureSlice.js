import { createSlice } from "@reduxjs/toolkit";


export const pictureSlice = createSlice({
    name : 'picture',
    initialState: {
        pictureUrl : null
    },

    reducers: {
        setProfilePicture : (state, action) => {

            state.pictureUrl = action.payload
        }
    }
})


export const { setProfilePicture } = pictureSlice.actions
export default pictureSlice.reducer