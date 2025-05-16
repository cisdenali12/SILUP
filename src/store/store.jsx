import { configureStore } from '@reduxjs/toolkit'
import { userSlice } from './user/user'
import { categoriesSlice } from './categories/categories'

export default configureStore({
  reducer: {
    [userSlice.name]: userSlice.reducer,
    [categoriesSlice.name]: categoriesSlice.reducer
  }
})