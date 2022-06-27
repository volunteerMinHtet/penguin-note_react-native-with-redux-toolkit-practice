import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { REHYDRATE } from 'redux-persist'
import { getBaseServerApiUrl } from '../../utils'

export const api = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
        baseUrl: getBaseServerApiUrl(),
        prepareHeaders: (headers, { getState }) => {
            const token = getState().auth.token
            if (token) headers.set('authorization', `Bearer ${token}`)

            headers.set('accept', 'application/json')
            headers.set('content-type', 'application/json')
            return headers
        },
    }),
    extractRehydrationInfo(action, { reducerPath }) {
        if (action.type === REHYDRATE) {
            return action.payload?.[reducerPath]
        }
    },
    endpoints: (builder) => ({
        login: builder.mutation({
            query: (loginCredential) => ({
                url: '/auth/login',
                method: 'POST',
                body: loginCredential,
            }),
            transformResponse: (response, meta, arg) => {
                console.log(meta)
                return response.data
            },
        }),
        register: builder.mutation({
            query: (createAccountData) => ({
                url: '/auth/register',
                method: 'POST',
                body: createAccountData,
            }),
            transformResponse: (response, meta, arg) => {
                return response.data
            },
        }),
    }),
})

export const { useLoginMutation, useRegisterMutation } = api
