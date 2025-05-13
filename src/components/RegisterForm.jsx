import React from "react";
import "./RegisterForm.css" ;


export function RegisterForm (){
    
    function handleClick(data){
        console.log('Este es el boton del formulario registro');
    }

return (
    <div className="container-form">
    <h2>Formulario de Registro </h2>

<form className="RegisterForm" action={handleClick}>
    
        <label htmlFor="name">Nombre:</label>
        <input type="text" id="name" name="user_name" />
      
        <label htmlFor="mail">Correo electrónico:</label>
        <input type="email" id="mail" name="user_mail" />
      
        <label htmlFor="pwd">Contraseña:</label>
        <input type="password" id="pwd" name="pwd" />
      
        <label htmlFor="pwdRepeat">Repetir contraseña:</label>
        <input type="password" id="pwdRepeat" name="pwd" />
     

        <button  type="submit" />
    
  </form>
  </div>
)


}