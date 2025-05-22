import React, { useEffect } from "react";
import { LoginForm } from '../components/LoginForm';
import { MessagePopup } from '../components/popups';
import  { userActions, userSelectors } from '../store'
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { RouteNames } from '../router'

export function HomePage() {
  // TODO: Agregar un estado de cargando para toda la pantalla
  const navigate = useNavigate()
  const showErrorPopup = userSelectors.loginError()
  const isLoggedIn = userSelectors.isLoggedIn()

  const dispatch = useDispatch()

  const handleSubmit = ({email, password})=>{
    dispatch(userActions.login({email, password}))
  }

  const handleCloseError = ()=>{
    dispatch(userActions.loginNoError())
  }

  const handleRegister = ()=>{
    navigate(RouteNames.REGISTER, { replace:true })
  }

  useEffect(()=>{
    if(isLoggedIn){
      navigate(RouteNames.DASHBOARD, { replace:true })
    }
  }, [isLoggedIn])

  return (
  <div className="grid grid-cols-1 grid-rows-[auto_1fr_3fr_1fr] h-screen p-5">
    <span className="row-1 text-red-900 text-9xl font-black">SILUP </span>
    <span className="row-2 text-red-900 text-xl">Bienvenido! Ingresa a tu cuenta</span>
    <LoginForm className="row-3" onSubmit={ handleSubmit } />
    <div className="row-4 grid grid-rows-1">
      <span className="row-2 underline text-sm hover:no-underline hover:cursor-pointer text-blue-700" onClick={handleRegister}>No tienes cuenta? Registrate aqui</span>
    </div>
    <MessagePopup  type='error' show={ showErrorPopup } onClose={ handleCloseError }/>
  </div>
  )
}