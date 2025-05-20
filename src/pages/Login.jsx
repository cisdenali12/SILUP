import { useState } from "react";
function Login() {
  const [formData, setFormData] = useState({
    correo: "",
    contraseña: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const usuariosGuardados =
      JSON.parse(localStorage.getItem("usuarios")) || [];
    const usuarioEncontrado = usuariosGuardados.find(
      (usuario) =>
        usuario.correo === formData.correo &&
        usuario.contraseña === formData.contraseña
    );
    if (usuarioEncontrado) {
      alert("Inicio de sesión exitoso");
    } else {
      alert("Correo o contraseña incorrectos");
    }
  };
  return (
    <div>
      <h1>Iniciar Sesión</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="correo"
          placeholder="Correo"
          value={formData.correo}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="contraseña"
          placeholder="Contraseña"
          value={formData.contraseña}
          onChange={handleChange}
          required
        />
        <button type="submit">Ingresar</button>
      </form>
    </div>
  );
}
export default Login;
