import React, { useEffect } from "react";
import {RegisterForm} from '../components/RegisterForm';
import { useNavigate } from "react-router";
import { RouteNames } from "../router";
import { MessagePopup } from '../components/popups';
import { useDispatch, useSelector } from "react-redux";
import { userActions, userSelectors } from '../store'

export function RegisterPage() {
  const dispatch = useDispatch()
  const showErrorPopup = useSelector((state)=>state.user.registerError)
  const navigate = useNavigate()
  const isLoggedIn = userSelectors.isLoggedIn()

  const handleLogin = ()=>{
    navigate(RouteNames.LOGIN, { replace: true })  
  }

  const handleSubmit = ({name, email, password})=>{
    dispatch(userActions.register({name, email, password}))
  }

  const handleCloseError = ()=> dispatch(userActions.registerNoError())

  useEffect(()=>{
    if(isLoggedIn){
      navigate(RouteNames.DASHBOARD)
    }
  }, [isLoggedIn])

  return (
    <div className="grid grid-cols-1 grid-rows-[auto_1fr_4fr_1fr] h-screen p-5">
    <span className="row-1 text-red-900 text-5xl font-black">Registro</span>
    <span className="row-2 text-red-900 text-xl">Crea tu cuenta usando tu correo electronico.</span>
    <RegisterForm className="row-3" onSubmit={handleSubmit}/>
    <div className="row-4 grid grid-rows-1">
      <span className="row-2 underline text-sm hover:no-underline hover:cursor-pointer text-blue-700" onClick={handleLogin}>Ya tienes cuenta? Ingresa aqui</span>
    </div>
    <MessagePopup  type='error' show={ showErrorPopup } onClose={ handleCloseError }/>
    </div>
  );
}