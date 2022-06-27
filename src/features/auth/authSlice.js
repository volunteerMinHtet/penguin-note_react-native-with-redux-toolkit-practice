import { createSlice, isAnyOf } from '@reduxjs/toolkit'
import { PURGE } from 'redux-persist'
import { api } from '../../app/services/api'

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
        builder.addCase(PURGE, (state) => {
            state = initialState
        })

        builder.addMatcher(
            isAnyOf(api.endpoints.login.matchFulfilled, api.endpoints.register.matchFulfilled),
            (state, { payload }) => {
                state.isAuthenticated = true
                state.user = payload.user
                state.token = payload.token
            }
        )
    },
})

const authReducer = authSlice.reducer

export default authReducer

export const selectIsAuthenticated = (state) => state.auth.isAuthenticated
export const selectCurrentUser = (state) => state.auth.user
