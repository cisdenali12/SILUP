import { createSlice } from '@reduxjs/toolkit'
import * as UserAPI from './UserAPI'
import { useSelector } from 'react-redux'

const initialState = {
    name:'Temporal',
    email:'temp@gmail.com',
    id:'',
    loginError:false,
    registerError:false
}

/**
 * Actions that can be dispatched
 * Eg. dispatch( userActions.<action>({params}) )
 */
export const userActions = {
    received:({email,name, id})=>({type:'user/received', payload:{email, name, id}}),
    login:({email, password})=>UserAPI.login({email, password}),
    loginError:()=>({type: 'user/loginError'}),
    loginNoError:()=>({type: 'user/loginSuccess'}),
    loginSuccess:()=>({type: 'user/loginSuccess'}),
    register:({name, email, password})=>UserAPI.register({name, email, password}),
    registerError:()=>({type: 'user/registerError'}),
    registerNoError:()=>({type: 'user/registerSuccess'}),
    registerSuccess:()=>({type: 'user/registerSuccess'}),
    logout:()=>({type: 'user/logout'}),
}

export const userSelectors = {
    isLoggedIn:() => useSelector((state)=> !!state.user.id),
    loginError:() => useSelector((state)=> !!state.user.loginError),
    userId:()=> useSelector(state=>state.user.id)
}

export const userSlice = createSlice({
    name:'user',
    initialState,
    reducers:{
        received: (state, action)=>{
            state.email = action.payload.email
            state.id = action.payload.id
            state.name = action.payload.name
        },
        loginSuccess:(state)=>{ state.loginError = false },
        loginError:(state)=>{ state.loginError = true },
        registerSuccess:(state)=>{ state.registerError = false },
        registerError:(state)=>{ state.registerError = true },
        logout:() => ({...initialState})
    }
})