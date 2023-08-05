import { createSlice } from "@reduxjs/toolkit";

const userSclice= createSlice({
    name: 'user',
    initialState: {
        user: null
    },
    reducers:{
        login:(state,action)=>{
            state.user=action.payload;
        },
        logout:(state,action)=>{
            state.user=null;
        }
    }
})

export default userSclice.reducer;
export const {login,logout} = userSclice.actions;
export const selectUser=(state)=>state.user.user;