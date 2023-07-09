import { Job, Jobs } from '@/app/types/job'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { headers } from 'next/dist/client/components/headers'

export const jobsApi = createApi({
  reducerPath: 'jobsApi',
  refetchOnFocus: true,
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://199.231.235.83:8923/',
    prepareHeaders: headers => {
      headers.set('Content-Type', 'application/json')
      return headers
    }
  }),
  endpoints: builder => ({
    getJobs: builder.mutation({
      query: payload => ({
        url: 'jobs/page',
        method: 'POST',
        mode: 'no-cors',
        cache: 'no-store',
        // headers: {
        //   'Content-type': 'application/json'
        // },
        body: JSON.stringify(payload)
      })
    })
  })
})

export const userApi = createApi({
  reducerPath: 'userApi',
  refetchOnFocus: true,
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://jsonplaceholder.typicode.com/'
  }),
  endpoints: builder => ({
    getUsers: builder.query({
      query: () => 'users'
    }),
    getUserById: builder.query({
      query: ({ id }) => `users/${id}`
    })
  })
})

export const { useGetUsersQuery, useGetUserByIdQuery } = userApi

// export const { useGetJobsMutation } = jobsApi
