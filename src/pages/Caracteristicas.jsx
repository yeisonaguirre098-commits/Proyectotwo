
import React from 'react';
import './pages.css';

const Caracteristicas = () => {
  return (
    <div className="page container">
      <section className="card">
        <h1 className="neon">Características</h1>
        <p className="lead">Vite ofrece una experiencia de desarrollo moderna y eficiente.</p>
        <ul>
          <li>Servidor de desarrollo basado en ES modules — extremadamente rápido.</li>
          <li>HMR preciso sin reinicios completos.</li>
          <li>Soporte nativo para TypeScript y frameworks populares.</li>
          <li>Build optimizado y plugin ecosystem con Rollup.</li>
        </ul>
        <a className="btn" href="https://vitejs.dev/guide/" target="_blank" rel="noreferrer">Guía de Vite</a>
      </section>
    </div>
  )
}

export default Caracteristicas;