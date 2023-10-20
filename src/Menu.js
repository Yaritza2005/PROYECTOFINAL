import React, { useState } from 'react';
import './Menu.css';
import perro from './perro.jpg.jpeg'; 

function Menu() {
  const [menuAbierto, setMenuAbierto] = useState(false);

  const toggleMenu = () => {
    setMenuAbierto(!menuAbierto);
  };

  return (
    <div className="menu"> 
      <button onClick={toggleMenu} className="boton-hamburguesa">
        ☰
      </button>
      <div className={`menu-hamburguesa ${menuAbierto ? 'abierto' : ''}`}>
        <button className="cerrar-menu" onClick={toggleMenu}>
          Cerrar
        </button>
        <ul className="menu-lista">
          <li><a href="#">Inicio</a></li>
          <li><a href="#">Perfil</a></li>
          <li><a href="#">Configuración</a></li>
        </ul>
      </div>
      <div className="center-screen"> 
        <header className="cabecera">
          <h1>¡Bienvenido a my pet!</h1>
        </header>
        <section className="banner">
          <h2>Ama a tus mascotas un poco más.</h2>
          <img
            src={perro}
            alt="Mi imagen de perro"
            className="imagen-mypet"
            style={{ width: '250px', height: 'auto' }} 
          />
        </section>
      </div>
    </div>
  );
}

export default Menu;

