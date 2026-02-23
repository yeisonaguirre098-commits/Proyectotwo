import React from 'react';
import './pages.css';

const Historia = () => {
  return (
    <div className="page container">
      <section className="card">
        <h1 className="neon">Historia</h1>
        <p className="lead">Vite nació para resolver los problemas de rendimiento de los bundlers tradicionales durante el desarrollo.</p>
        <p>En lugar de empaquetar todo en cada cambio, Vite sirve módulos ES nativos durante el desarrollo y hace una build optimizada para producción.</p>
        <a className="btn" href="https://vitejs.dev/" target="_blank" rel="noreferrer">Visita Vite</a>
      </section>
    </div>
  )
}

export default Historia;