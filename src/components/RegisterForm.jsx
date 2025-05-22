import React from "react";


export function RegisterForm ({className, onSubmit = console.log}){
    
    function handleSubmit(data){
        const submitData = {
            name:data.get('name'),
            email:data.get('email'),
            password:data.get('pwd'),
        }
        console.log('REgister submit', submitData)
        onSubmit(submitData)
    }

return (
    <div className={`${className} h-full`}>
        <form action={handleSubmit} className="h-full grid grid-cols-1 text-black">
            <span className="flex flex-col-reverse pl-2">
                <label className="text-left flex-none" htmlFor="name">Nombre:</label>
            </span>
            <input className="rounded-md bg-blue-50 pl-1" type="text" id="name" name="name" placeholder="nombre"/>
        
            <span className="flex flex-col-reverse pl-2">
                <label className="text-left flex-none" htmlFor="email">Correo electrónico:</label>
            </span>
            <input className="rounded-md bg-blue-50 pl-2" type="email" id="email" name="email" placeholder="correo"/>
        
            <span className="flex flex-col-reverse pl-2">
                <label className="text-left flex-none" htmlFor="pwd">Contraseña:</label>
            </span>
            <input className="rounded-md bg-blue-50 pl-1" type="password" id="pwd" name="pwd" placeholder="constraseña"/>
        
            <span className="flex flex-col-reverse pl-2">
                <label className="text-left flex-none" htmlFor="pwdRepeat">Repetir contraseña:</label>
            </span>
            <input className="rounded-md bg-blue-50 pl-2" type="password" id="pwdRepeat" name="pwdRepeat" placeholder="confirma contraseña"/>

            <button className="bg-blue-400 text-white mt-5" type="submit">Registrar</button>
        </form>
  </div>
)


}