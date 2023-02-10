import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from './store'
import {getUserByUserName} from '../api'

// Define a type for the slice state
interface SearchState {
  value: number,
  user: Array<any>
}

// default state
// Define the initial state using that type
const initialState: SearchState = {
  value: 0,
  user: []
}


const fetchUsersByUserName = createAsyncThunk('search/fetchUsersByUserName', getUserByUserName)

export const SearchSlice = createSlice({
  name: 'search',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    clear(state) {
      state.user = []
    }
  },
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(fetchUsersByUserName.fulfilled, (state, action) => {
      // Add user to the state array
      state.user = action.payload.items
    })
    builder.addCase(fetchUsersByUserName.rejected, (state, action) => {
      state.user = []
    })
  },
})

export const { clear} = SearchSlice.actions

// Other code such as selectors can use the imported `RootState` type
// export const selectCount = (state: RootState) => state.counter.value

export default SearchSlice.reducer

export {fetchUsersByUserName};