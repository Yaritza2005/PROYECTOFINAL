import React, { useState } from 'react';
import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './Menu.css'; 

function Menu() {
  const [menuAbierto, setMenuAbierto] = useState(false);

  const toggleMenu = () => {
    setMenuAbierto(!menuAbierto);
  };

  const imageUrls = [
    'https://i.pinimg.com/originals/8e/5f/e6/8e5fe671314f2996c6709ab9728fcf64.gif',
    'https://i.gifer.com/origin/25/25407f169663cb6cd1ef12042a03dd4a_w200.gif',
    'https://www.gifsanimados.org/data/media/202/perro-imagen-animada-0685.gif'

    // Add more image URLs as needed
  ];

  return (
    <div className={`menu ${menuAbierto ? 'menu-abierto' : ''}`}>
      <button onClick={toggleMenu} className="boton-hamburguesa">
        ☰
      </button>
      <div className={`menu-hamburguesa ${menuAbierto ? 'abierto' : ''}`}>
        <button className="cerrar-menu" onClick={toggleMenu}>
          Cerrar
        </button>
        <ul className="menu-lista">
          <li><Link to="/tipsCuidados">Tips para el cuidado</Link></li>
          <li><Link to="/articulos">Articulos</Link></li>
          <li><Link to="/Tiposrazas">Tipos de razas</Link></li>
        </ul>
      </div>
      <div className="center-screen">
        <header className="cabecera">
       
   
   
          <h1>¡Bienvenido a my pet!</h1>
        </header>
        <section className="banner">
          <h2>
          ¡Bienvenidos al fascinante mundo de los amigos peludos! Este es tu rincón virtual dedicado al amor incondicional, las travesuras adorables y todo lo relacionado con nuestras queridas mascotas. Desde consejos prácticos hasta historias entrañables, aquí encontrarás una comunidad apasionada que comparte la alegría y las experiencias de cuidar a nuestros compañeros de cuatro patas, plumas o aletas. ¡Prepárate para sumergirte en un universo lleno de ladridos, ronroneos, y muchas aventuras tiernas! 🐾✨
          </h2>
          {imageUrls.map((url, index) => (
            <img
              key={index}
              src={url}
              alt={`Imagen ${index + 1}`}
              className="imagen-mypet"
              style={{ width: '250px', height: 'auto' }}
            />
          ))}
        </section>
      </div>
    </div>
  );
}

export default Menu;
