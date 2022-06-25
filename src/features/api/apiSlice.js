import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import { getBaseServerApiUrl } from '../../utils/index'

export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
        baseUrl: getBaseServerApiUrl(),
        prepareHeaders: (headers, { getState }) => {
            // const token = getState.auth.token
            const token = '19|kVZOee7iBlR3IkytXBNq7tW3CD8tYeg72GWgTVrE'
            if (token) headers.set('authorization', `Bearer ${token}`)

            headers.set('accept', 'application/json')
            headers.set('content-type', 'application/json')
            return headers
        },
    }),
    endpoints: (builder) => ({
        login: builder.mutation({
            query: ({ user_name, password }) => ({
                url: '/auth/login',
                method: 'POST',
                body: { user_name, password },
            }),
            transformResponse: (response, meta, arg) => {
                return response.data
            },
        }),
    }),
})

export const { useLoginMutation } = apiSlice
