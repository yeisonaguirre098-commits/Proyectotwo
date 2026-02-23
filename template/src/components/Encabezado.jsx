import React from 'react';
import { Link } from 'react-router-dom';

const Encabezado = () => {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <h1 className="site-title">Proyecto Vite • Futurista</h1>
        <nav className="header-nav">
          <ul>
            <li><Link to="/" className="nav-link nav-cta">Inicio</Link></li>
            <li><Link to="/caracteristicas" className="nav-link">Caracteristicas</Link></li>
            <li><Link to="/historia" className="nav-link">Historia</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Encabezado;