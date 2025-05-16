import React from "react";

export function LoginForm ({className, onSubmit = console.log}){

  const handleSubmit = (data)=>{
    const submit = { email: data.get('email'), password: data.get('password') }
    console.log('Este es el boton del Login ', submit);
    onSubmit(submit)
}

return (
    <div className={`${className} h-full`}>
      <form action={ handleSubmit } className="h-full grid grid-cols-1 text-black">
          <span className="row-1 flex flex-col-reverse pl-2">
            <label className="text-left flex-none" htmlFor="mail">Correo electrónico:</label>
          </span>
          <input className="row-2 bg-blue-50 pl-1" type="email" id="mail" name="user_mail" placeholder="email" />
          
          <span className="row-3 flex flex-col-reverse pl-2">
            <label className="text-left flex-none" htmlFor="pwd">Contraseña:</label>
          </span>
          <input className="row-4 bg-blue-50 pl-1" type="password" id="pwd" name="pwd" placeholder="contraseña"/>
          
          <button className="row-6 bg-blue-400 text-white"  type="submit">Login</button>
      </form>
  </div>


)


} 






