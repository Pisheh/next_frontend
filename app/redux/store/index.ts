import { configureStore } from '@reduxjs/toolkit'
import jobSearchReducer from './jobSearchSlice'
import selectJobReducer from './selectJobSlice'
import userReducer from './userSlice'

export const store = configureStore({
  reducer: {
    jobSearch: jobSearchReducer,
    selectJob: selectJobReducer,
    user: userReducer
  },
  devTools: process.env.NODE_ENV !== 'production'
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
