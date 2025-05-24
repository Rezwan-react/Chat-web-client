import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { authServices } from "../../services/api";

export const updateUserData = createAsyncThunk(
    "/auth/update",
    async (userData) => {
        const { fullName, password } = userData;
        try {
            const res = await authServices.updateUser(fullName, password);
            return res;
        } catch (error) {
            return Promise.reject(error);
        }
    }
);

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
    extraReducers: (builder) => {
        builder
            .addCase(updateUserData.fulfilled, (state, actions) => {
                 state.user = actions.payload;
                 localStorage.setItem("loggedUser", JSON.stringify(actions.payload));
            })
    },
});


export const { loggedUser, logOut } = authSlice.actions;
export default authSlice.reducer;