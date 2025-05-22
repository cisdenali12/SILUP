import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    loading:false
}

export const uiActions= {
    startLoading:()=>({type:'ui/startLoading'}),
    stopLoading:()=>({type:'ui/stopLoading'}),
}

export const uiSlice = createSlice({
    name:'ui',
    initialState,
    reducers:{
        startLoading:state=>{state.loading = true},
        stopLoading:state=>{state.loading = false},
    }
})