import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import { getBaseServerApiUrl } from '../../utils/index'

export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({ baseUrl: getBaseServerApiUrl() }),
    endpoints: (builder) => ({
        getPrivateNotes: builder.query({
            query: () => '/user/notes',
        }),
        getPrivateNote: builder.query({
            query: (privateNoteId) => `/user/notes/${privateNoteId}`,
        }),
    }),
})

export const { useGetPrivateNotesQuery, useGetPrivateNoteQuery } = apiSlice
