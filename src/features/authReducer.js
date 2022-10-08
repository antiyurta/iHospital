import { createSlice } from "@reduxjs/toolkit";

export const auth = createSlice({
    name: 'auth',
    initialState: {
        token: ''
    },
    reducers: {
        login: (state, action) => {
            state.token = action.payload;
        },
        logout: (state) => {
            state.token = null;
        }
    }
})

export const { login } = auth.actions;
export default auth.reducer;

export const selectCurrentToken = (state) => state.authReducer.token