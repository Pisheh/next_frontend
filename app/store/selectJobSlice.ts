import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { Job } from '../types/job'

export interface selectedJob {
  isSelected: boolean
  job: Job
}

const initialState: selectedJob = {
  isSelected: false,
  job: {}
}

const selectJobSlice = createSlice({
  name: 'selectJob',
  initialState,
  reducers: {
    setSelectedJob: (state, action: PayloadAction<Job>) => {
      state.job = action.payload
    },
    setIsSelected: (state, action: PayloadAction<boolean>) => {
      state.isSelected = action.payload
    }
  }
})

export const { setSelectedJob, setIsSelected } = selectJobSlice.actions
export default selectJobSlice.reducer
