import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: "auth",
    initialState: {
        user: JSON.parse(localStorage.getItem("loggedUser")) || null,
    },
    reducers: {
        loggedUser: (state, actions) => {
            state.user = actions.payload;
        },
        logOut: (state) => {
            console.log(state.value);
        },
    },
});

export const { loggedUser, logOut } = authSlice.actions;
export default authSlice.reducer;