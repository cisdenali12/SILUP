import React from "react";

export function LoginForm ({className, onSubmit = console.log}){

  const handleSubmit = (data)=>{
    const submit = { email: data.get('email'), password: data.get('password') }
    console.log('Este es el boton del Login ', submit);
    onSubmit(submit)
}

return (
    <div className={`${className} h-full`}>
      <form action={ handleSubmit }>
          <label htmlFor="mail">Correo electrónico:</label>
          <input type="email" id="mail" name="user_mail" />
          <label htmlFor="pwd">Contraseña:</label>
          <input type="password" id="pwd" name="pwd" />
          <button  type="submit" />
      
      </form>
  </div>


)


} 






