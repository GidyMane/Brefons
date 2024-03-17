import { createSlice } from "@reduxjs/toolkit";

interface Width {
    width: number;
}

const initialState = {
    width: 247
}



const SideSlice = createSlice({
    name: "sidebarslicewidth",
    initialState,
    reducers: {
        setWidth: (state, action) => {
            state.width = action.payload
        },
        removeWidth:(state)=>{
            state.width =80

        }

    }
})




export const {setWidth,removeWidth}=SideSlice.actions
export const SideSliceReducer = SideSlice.reducer