import { configureStore } from '@reduxjs/toolkit';
import { baseApi } from '../../shared/api/baseApi';
import { authBaseApi } from '../../widgets/auth/api/baseApi';

export const store = configureStore({
  reducer: {
    [baseApi.reducerPath]: baseApi.reducer,
    [authBaseApi.reducerPath]: authBaseApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(baseApi.middleware, authBaseApi.middleware),
});
