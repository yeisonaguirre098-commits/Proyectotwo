import React from 'react';
import './pages.css';

const Inicio = () => {
  return (
    <div className="page container">
      <section className="hero">
        <h1 className="neon">Página de Inicio</h1>
        <p className="lead">Vite es un build tool rápido y moderno para proyectos web.</p>

        <div className="card">
          <h3>¿Por qué Vite?</h3>
          <ul>
            <li>Arranque instantáneo con servidor de desarrollo ultra rápido.</li>
            <li>Hot Module Replacement (HMR) casi instantáneo.</li>
            <li>Compilación optimizada para producción con Rollup.</li>
          </ul>
          <a className="btn" href="https://vitejs.dev" target="_blank" rel="noreferrer">Más sobre Vite</a>
        </div>
      </section>
    </div>
  );
};

export default Inicio;