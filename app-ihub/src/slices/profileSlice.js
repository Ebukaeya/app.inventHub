import { createSlice } from "@reduxjs/toolkit";



const profileSlice = createSlice({
    name: "profile",
    initialState: {
        profile: null,
    },

    reducers: {
        setProfile: (state, action) => {
            return {
                ...state,
                profile: action.payload,
            };
        },
        updateProfile:(state, action)=>{
            return {
                ...state,
                profile: {...state.profile, ...action.payload}
            };
        }
    }
})


export const { setProfile, updateProfile } = profileSlice.actions;
export default profileSlice.reducer;