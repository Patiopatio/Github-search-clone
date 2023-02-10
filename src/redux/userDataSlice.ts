import { createSlice } from '@reduxjs/toolkit'

// Define a type for the slice state
interface UserDataState {
  favourite: Array<Record<string, unknown>>,
}

// default state
// Define the initial state using that type
const initialState: UserDataState = {
  favourite: [],
}

export const UserDataSlice = createSlice({
  name: 'userData',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    addFavourite(state, actions) {
      state.favourite.push(actions.payload)
      console.log(state.favourite,'s')
      return state
    },
    removeFavourite(state, actions) {
      state.favourite = state.favourite.filter((user) => user.id !== actions.payload.id)
      console.log(state, 'state')
      return state
    }
  },
})

export const { addFavourite, removeFavourite } = UserDataSlice.actions

// Other code such as selectors can use the imported `RootState` type
// export const selectCount = (state: RootState) => state.counter.value

export default UserDataSlice.reducer
