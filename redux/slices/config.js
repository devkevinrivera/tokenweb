import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 0,
  showMenu: false
}

export const configSlice = createSlice({
  name: 'config',
  initialState,
  reducers: {
    handlerShowMenu: (state,action) => {
      state.showMenu = action.payload
    },
  },
})

export const { handlerShowMenu } = configSlice.actions

export default configSlice.reducer