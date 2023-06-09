import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

import { Job } from '../../types/job'

export interface SearchState {
  search?: any
  // CHANGE TYPE LATER
  jobs: any
}

const initialState: SearchState = {
  search: {
    title: '',
    city: ''
  },
  jobs: []
}

const jobSearchSlice = createSlice({
  name: 'jobSearch',
  initialState,
  reducers: {
    setSearch: (state, action: PayloadAction<string[]>) => {
      state.search = action.payload
    },
    setStartupJobs: (state, action: PayloadAction<Job[]>) => {
      state.jobs = action.payload
    }
  }
})

export const { setSearch, setStartupJobs } = jobSearchSlice.actions
export default jobSearchSlice.reducer
