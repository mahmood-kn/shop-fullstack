import { USERS_URL } from '@/utils/constants';
import { apiSlice } from './apiSlice';

export const authApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (data) => ({
        url: `${USERS_URL}/auth`,
        method: 'POST',
        credentials: 'include',
        body: data,
      }),
      keepUnusedDataFor: 5,
    }),
    logout: builder.mutation({
      query: () => ({
        url: `${USERS_URL}/logout`,
        method: 'POST',
      }),
      keepUnusedDataFor: 5,
    }),
  }),
});

export const { useLoginMutation, useLogoutMutation } = authApiSlice;
