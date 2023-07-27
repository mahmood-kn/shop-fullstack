import { ORDERS_URL, PAYPAL_URL } from '@/utils/constants';
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
    }),
    getOrderDetails: builder.query({
      query: (orderId) => ({
        url: `${ORDERS_URL}/${orderId}`,
        credentials: 'include',
      }),
      keepUnusedDataFor: 5,
    }),
    payOrder: builder.mutation({
      query: (orderId, details) => ({
        url: `${ORDERS_URL}/${orderId}/pay`,
        method: 'PUT',
        credentials: 'include',
        body: { ...details },
      }),
    }),
    getPayPalClientId: builder.query({
      query: () => ({
        url: `${PAYPAL_URL}`,
        credentials: 'include',
      }),
      keepUnusedDataFor: 5,
    }),
  }),
});

export const {
  useCreateOrderMutation,
  useGetOrderDetailsQuery,
  useGetPayPalClientIdQuery,
  usePayOrderMutation,
} = orderApiSlice;
