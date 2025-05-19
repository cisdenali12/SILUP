import { configureStore } from '@reduxjs/toolkit'
import { initialState as userInitialState, userSlice } from './user'

const initialState = {
    user:{...userInitialState}
}

export default configureStore({
  reducer: {
    [userSlice.name]: userSlice.reducer
  }
})