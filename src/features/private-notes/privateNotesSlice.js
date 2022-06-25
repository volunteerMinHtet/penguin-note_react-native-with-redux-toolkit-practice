// import { createEntityAdapter } from '@reduxjs/toolkit'
import { apiSlice } from '../api/apiSlice'

// const privateNotesAdapter = createEntityAdapter()

// const initialState = privateNotesAdapter.getInitialState()

const extendedApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getPrivateNotes: builder.query({
            query: () => ({
                url: '/user/notes',
                method: 'GET',
            }),
            transformResponse: (res) => {
                return res.data
            },
        }),
        getPrivateNote: builder.query({
            query: (privateNoteId) => `/user/notes/${privateNoteId}`,
        }),
    }),
})

export const { useGetPrivateNotesQuery, useGetPrivateNoteQuery } = extendedApiSlice

// export const selectPrivateNotesResult = extendedApiSlice.endpoints.getPrivateNotes.select()
