function Register() {
  return (
    <div>
      <h1>Registro de Usuario</h1>
      <form>
        <input type="text" placeholder="Nombre" />
        <br />
        <input type="email" placeholder="Correo" />
        <br />
        <input type="password" placeholder="Contraseña" />
        <br />
        <button type="submit">Registrarse</button>
      </form>
    </div>
  );
}

export default Register;
