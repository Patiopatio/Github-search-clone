import { configureStore, combineReducers } from '@reduxjs/toolkit'
import searchReducers from './searchSlice'
import userDataReducers from './userDataSlice'
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
// ...

const persistConfig = {
  key: 'root',
  storage,
}

let combinedReducers = combineReducers({
  search: searchReducers,
  userData: userDataReducers
  // comments: commentsReducer,
  // users: usersReducer,
})
const persistedReducer = persistReducer(persistConfig, combinedReducers)


export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false
    }),
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
export const persistor = persistStore(store)