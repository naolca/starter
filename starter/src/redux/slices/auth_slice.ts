import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';


export const authApi = createApi({
    reducerPath: 'authApi',
    baseQuery: fetchBaseQuery({baseUrl: 'https://a2sv-backend.onrender.com/api/auth/'}),
    endpoints: (builder) => ({
        login: builder.mutation({
            query: (body) => ({
                url: 'login',
                method: 'POST',
                body,
            }),
        }),
        register: builder.mutation({
            query: (body) => ({
                url: 'register',
                method: 'POST',
                body,
            }),
        }),
        logout: builder.mutation({
            query: () => ({
                url: 'logout',
                method: 'POST',
            }),
        }),
        me: builder.mutation({
            query: () => ({
                url: 'me',
                method: 'GET',
            }),
        }),
        updateProfile: builder.mutation({
            query: (body) => ({
                url: 'update-profile',
                method: 'POST',
                body,
            }),
        }),
        updatePassword: builder.mutation({
            query: (body) => ({
                url: 'update-password',
                method: 'POST',
                body,
            }),
        }),
        forgotPassword: builder.mutation({
            query: (body) => ({
                url: 'forgot-password',
                method: 'POST',
                body,
            }),
        }),
        resetPassword: builder.mutation({
            query: (body) => ({
                url: 'reset-password',
                method: 'POST',
                body,
            }),
        }),
    }),
});


export const {
    useLoginMutation,
    useRegisterMutation,
    useLogoutMutation,
    useMeMutation,
    useUpdateProfileMutation,
    useUpdatePasswordMutation,
    useForgotPasswordMutation,
    useResetPasswordMutation,
} = authApi;