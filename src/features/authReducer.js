import { createSlice } from "@reduxjs/toolkit";

export const auth = createSlice({
    name: 'auth',
    initialState: {
        token: '',
        depId: '',
        appId: '',
    },
    reducers: {
        login: (state, action) => {
            state.token = action.payload;
        },
        logout: (state) => {
            state.token = null;
        },
        setDepId: (state, action) => {
            state.depId = action.payload;
        },
        DelDepId: (state) => {
            state.depId = null;
        },
        setAppId: (state, action) => {
            state.appId = action.payload;
        },
        DelAppId: (state) => {
            state.appId = null;
        }
    }
})

export const { login, logout, setDepId, DelDepId, setAppId, DelAppId } = auth.actions;
export default auth.reducer;

export const selectCurrentToken = (state) => state.authReducer.token;
export const selectCurrentDepId = (state) => state.authReducer.depId;
export const selectCurrentAppId = (state) => state.authReducer.appId;