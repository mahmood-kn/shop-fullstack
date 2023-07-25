import { ORDERS_URL } from '@/utils/constants';
import { apiSlice } from './apiSlice';

export const orderApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    createOrder: builder.mutation({
      query: (order) => ({
        url: `${ORDERS_URL}`,
        method: 'POST',
        credentials: 'include',
        body: order,
      }),
      keepUnusedDataFor: 5,
    }),
  }),
});

export const { useCreateOrderMutation } = orderApiSlice;
