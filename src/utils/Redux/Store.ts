import { configureStore } from '@reduxjs/toolkit'
import { SideSliceReducer } from './slices/SideBarSlice';

export const store= configureStore({
  reducer: {
    width:SideSliceReducer
  },
})



export type RootState = ReturnType<typeof store.getState>;
export type Dispatch = ReturnType<typeof store.dispatch>;