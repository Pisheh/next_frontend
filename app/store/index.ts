import { configureStore } from '@reduxjs/toolkit'
import jobSearchReducer from './jobSearchSlice'
import selectJobReducer from './selectJobSlice'

export const store = configureStore({
  reducer: {
    jobSearch: jobSearchReducer,
    selectJob: selectJobReducer
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
