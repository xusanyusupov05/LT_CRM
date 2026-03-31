import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const baseApi = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_SUPABASE_URL,
    prepareHeaders: (headers) => {
      headers.set('apiKey',import.meta.env.VITE_SUPABASE_ANON_KEY)
      headers.set('Authorization',`Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY}`)
      headers.set('Content-Type','application/json')
      return headers
    },
  }),
  tagTypes: ['users'],
  endpoints: () => ({})
})
