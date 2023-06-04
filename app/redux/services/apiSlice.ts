import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const apiSlice = createApi({
  reducerPath: 'apiSlice',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://127.0.0.1:8000'
  }),
  tagTypes: ['Jobs'],
  endpoints: builder => ({
    addNewPost: builder.mutation({
      query: payload => ({
        url: '/jobs/page',
        method: 'POST',
        cache: 'no-store',
        headers: {
          'Content-Type': 'application/json'
        },
        body: payload
      }),
      invalidatesTags: ['Jobs']
    })
  })
})

export const { useAddNewPostMutation } = apiSlice
