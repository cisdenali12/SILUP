import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
function App() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Inicio</Link>
          </li>
          <li>
            <Link to="/registro">Registro</Link>
          </li>
          <li>
            <Link to="/login">Iniciar Sesión</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/registro" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}
export default App;
