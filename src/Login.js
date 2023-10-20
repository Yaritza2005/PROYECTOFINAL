import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css'; 

function Login() {
  return (
    <div className="login-container">
      <h2>Iniciar Sesión</h2>
      <form>
        <div className="form-group">
          <label htmlFor="email">Correo Electrónico</label>
          <input type="text" id="email" placeholder="Ingresa tu correo electrónico" />
        </div>
        <div className="form-group">
          <label htmlFor="password">Contraseña</label>
          <input type="password" id="password" placeholder="Ingresa tu contraseña" />
        </div>
        <button>
          <Link to="/menu">Iniciar Sesión</Link>
        </button>
      </form>
    </div>
  );
}

export default Login;

