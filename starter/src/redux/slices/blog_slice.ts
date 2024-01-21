import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";




export const blogApi = createApi({
    reducerPath: 'blogApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://a2sv-backend.onrender.com/api/' }),
    endpoints: (builder) => ({
        getBlog: builder.query({
            query: () => 'blogs',
          
        }),
        getSingleBlog: builder.query({
            query: (id) => `blogs/${id}`,
        }),

    }),
});


export const {
    useGetBlogQuery,
    useGetSingleBlogQuery,
} = blogApi;