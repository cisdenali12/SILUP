import { configureStore } from '@reduxjs/toolkit'
import { userSlice } from './user/user'
import { categoriesSlice } from './categories/categories'
import { uiSlice } from './ui/slice'

export default configureStore({
  reducer: {
    [userSlice.name]: userSlice.reducer,
    [categoriesSlice.name]: categoriesSlice.reducer,
    [uiSlice.name]: uiSlice.reducer
  }
})