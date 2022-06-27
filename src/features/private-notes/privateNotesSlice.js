import { api } from '../../app/services/api'

const extendedApi = api.injectEndpoints({
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

export const { useGetPrivateNotesQuery, useGetPrivateNoteQuery } = extendedApi
