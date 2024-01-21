import { configureStore } from '@reduxjs/toolkit'
// Or from '@reduxjs/toolkit/query/react'
import { setupListeners } from '@reduxjs/toolkit/query'
import { successStoriesApi } from '../redux/slices/success_stories_slice'
import { authApi } from '../redux/slices/auth_slice'
import { blogApi } from './slices/blog_slice'


export const store = configureStore({
  reducer: {
    // Add the generated reducer as a specific top-level slice
    [successStoriesApi.reducerPath]: successStoriesApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
    [blogApi.reducerPath]: blogApi.reducer,


  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(successStoriesApi.middleware, authApi.middleware, blogApi.middleware),
  
})

// Infer the `RootState` and `AppDispatch` types from the store itselfse

setupListeners(store.dispatch);
export default store;