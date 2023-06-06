import { configureStore } from '@reduxjs/toolkit'
import coctailReducer from './coctailSlice'

// export default configureStore({
//   reducer: {
//     coctail: coctailReducer,
//   },
// })

const store = configureStore({
  reducer: {
    coctail: coctailReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

export default store