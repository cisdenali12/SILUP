import React from "react";
import "./LoginForm.css" ;

export function LoginForm (){

function handleClick (data){
console.log('Este es el boton del Login ');
}


return (
    <div className="container-form">
    <h2>Formulario de Login </h2>

<form className="LoginForm" action={handleClick}>
    
      
        <label htmlFor="mail">Correo electrónico:</label>
        <input type="email" id="mail" name="user_mail" />
      
        <label htmlFor="pwd">Contraseña:</label>
        <input type="password" id="pwd" name="pwd" />
      
     

        <button  type="submit" />
    
  </form>
  </div>


)


} 






