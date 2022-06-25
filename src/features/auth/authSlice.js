import { createSlice } from '@reduxjs/toolkit'
import { apiSlice } from '../api/apiSlice'

const initialState = {
    isAuthenticated: false,
    user: null,
    token: null,
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addMatcher(apiSlice.endpoints.login.matchFulfilled, (state, { payload }) => {
            state.isAuthenticated = true
            state.user = payload.user
            state.token = payload.token
        })
    },
})

const authReducer = authSlice.reducer

export default authReducer

export const selectIsAuthenticated = (state) => state.auth.isAuthenticated
export const selectCurrentUser = (state) => state.auth.user
