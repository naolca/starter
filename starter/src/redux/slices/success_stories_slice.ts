import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const successStoriesApi = createApi({
    reducerPath: 'successStoriesApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://a2sv-backend.onrender.com/api/' }),
    endpoints: (builder) => ({
        getSuccessStories: builder.query({
            query: () => 'success-stories',
          
        }),

    }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetSuccessStoriesQuery } = successStoriesApi;