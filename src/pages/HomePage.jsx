import React, { useEffect } from "react";
import { LoginForm } from '../components/LoginForm';
import { MessagePopup } from '../components/popups';
import  { userActions, userSelectors } from '../store'
import { useDispatch } from "react-redux";

export function HomePage() {
  // TODO: Agregar un estado de cargando para toda la pantalla
  const showErrorPopup = userSelectors.loginError()
  const isLoggedIn = userSelectors.isLoggedIn()

  const dispatch = useDispatch()

  const handleSubmit = ({email, password})=>{
    dispatch(userActions.login({email, password}))
  }

  const handleCloseError = ()=>{
    dispatch(userActions.loginNoError())
  }

  useEffect(()=>{
    console.log('EFECTO', isLoggedIn)

    if(isLoggedIn){
      console.log('Navigate forward!!')
      // TODO: Agregar navegacion justo despues de que el usuario hace login
    }
  }, [isLoggedIn])

  return (
  <div className="grid grid-rows-[70px_1fr] grid-cols-1 h-screen">
    <span className="text-red-900 row-1">Bienvenido a SILUP </span>
    <LoginForm className="row-2" onSubmit={ handleSubmit } />
    <MessagePopup  type='error' show={ showErrorPopup } onClose={ handleCloseError }/>
  </div>
  )
}