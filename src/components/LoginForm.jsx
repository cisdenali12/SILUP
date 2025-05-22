import React from "react";

export function LoginForm ({className, onSubmit = console.log}){

  const handleSubmit = (data)=>{
    const submit = { email: data.get('email'), password: data.get('pwd') }
    onSubmit(submit)
}

return (
    <div className={`${className} h-full`}>
      <form action={ handleSubmit } className="h-full grid grid-cols-1 text-black">
          <span className="flex flex-col-reverse pl-2">
            <label className="text-left flex-none" htmlFor="email">Correo electrónico:</label>
          </span>
          <input className="bg-blue-50 pl-1 rounded-md" type="email" id="email" name="email" placeholder="email" />
          
          <span className="flex flex-col-reverse pl-2">
            <label className="text-left flex-none" htmlFor="pwd">Contraseña:</label>
          </span>
          <input className="bg-blue-50 pl-1 rounded-md" type="password" id="pwd" name="pwd" placeholder="contraseña"/>
          
          <button className="bg-blue-400 text-white mt-5"  type="submit">Login</button>
      </form>
  </div>


)


} 






