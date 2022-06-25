// import { apiSlice } from '../api/apiSlice'

// const extendedApiSlice = apiSlice.injectEndpoints({
//     endpoints: (builder) => ({
//         getUser: builder.query({
//             query: () => ({
//                 url: '/user/show/by-token',
//                 method: 'GET',
//             }),
//         }),
//         userLogin: builder.mutation({
//             query: ({ userName, password }) => ({
//                 url: '/user/login',
//                 method: 'POST',
//                 body: { username: userName, password },
//             }),
//         }),
//     }),
// })

// export const { useGetUserQuery, useGetPrivateNoteQuery, useUserLoginMutation } = extendedApiSlice
