import { createSlice } from '@reduxjs/toolkit'
import doLogin from './doLogin'
import { useSelector } from 'react-redux'

export const initialState = {
    email:'',
    id:'',
    loginError:false
}

export const userActions = {
    received:({email, id})=>({type:'user/received', payload:{email, id}}),
    login:({email, password})=>doLogin({user:email, password}),
    loginError:()=>({type: 'user/loginError'}),
    loginNoError:()=>({type: 'user/loginSuccess'}),
    loginSuccess:()=>({type: 'user/loginSuccess'}),
    logout:()=>({type: 'user/logout'})
}

export const userSelectors = {
    isLoggedIn:() => useSelector((state)=> !!state.user.id),
    loginError:() => useSelector((state)=> !!state.user.loginError),
}

export const userSlice = createSlice({
    name:'user',
    initialState,
    reducers:{
        received: (state, action)=>{
            state.email = action.payload.email
            state.id = action.payload.id
        },
        loginSuccess:(state)=>{ state.loginError = false },
        loginError:(state)=>{ state.loginError = true },
        logout: state => ({...initialState})
    }
})