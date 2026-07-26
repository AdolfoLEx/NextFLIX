import React from "react";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 py-16 px-6 sm:px-12 lg:px-24">
      {/* Contenedor principal centrado */}
      <div className="max-w-4xl mx-auto space-y-16">
        
        {/* Header / Hero Section */}
        <section className="text-center space-y-4">
          <span className="inline-block px-3 py-1 text-xs font-semibold uppercase tracking-widest text-red-500 bg-red-500/10 rounded-full border border-red-500/20">
            Plataforma de gestión de Series y Películas
          </span>
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">
            Sobre <span className="text-red-600">NextFLIX</span>
          </h1>
          <p className="text-xl sm:text-2xl text-slate-300 font-light max-w-2xl mx-auto pt-2">
            Bienvenido a la plataforma donde convergen las mejores historias.
          </p>
        </section>

        {/* Declaración de Pasión */}
        <section className="bg-slate-900/60 border border-slate-800 rounded-2xl p-8 shadow-xl backdrop-blur-sm">
          <p className="text-lg sm:text-xl text-slate-300 leading-relaxed font-normal">
            En <strong className="text-white font-semibold">NextFLIX</strong>, nos apasiona una buena historia. Creemos que las Series y las Películas no son solo entretenimiento: son <span className="text-red-400">emociones</span>, <span className="text-red-400">debates con amigos</span>, <span className="text-red-400">escapes al final del día</span> y momentos memorables.
          </p>
        </section>

        {/* Sección de Contenido / Grilla de Características */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Card: ¿Qué encontrarás aquí? */}
          <div className="bg-slate-900/40 border border-slate-800/80 rounded-2xl p-8 hover:border-slate-700 transition-colors">
            <div className="w-12 h-12 rounded-xl bg-red-600/10 border border-red-600/20 flex items-center justify-center mb-6 text-red-500 text-2xl">
              🎬
            </div>
            <h2 className="text-2xl font-bold text-white mb-4">
              ¿Qué encontrarás aquí?
            </h2>
            <p className="text-slate-400 leading-relaxed">
              De todo, literalmente: desde los últimos estrenos y los grandes éxitos de las plataformas de streaming, hasta clásicos inolvidables, cine independiente, animación y joyas ocultas de todo el mundo.
            </p>
          </div>

          {/* Card: Nuestra Misión */}
          <div className="bg-slate-900/40 border border-slate-800/80 rounded-2xl p-8 hover:border-slate-700 transition-colors">
            <div className="w-12 h-12 rounded-xl bg-red-600/10 border border-red-600/20 flex items-center justify-center mb-6 text-red-500 text-2xl">
              🎯
            </div>
            <h2 className="text-2xl font-bold text-white mb-4">
              Nuestra misión
            </h2>
            <p className="text-slate-400 leading-relaxed">
              Queremos ser tu guía definitiva para responder a la eterna pregunta: <em className="text-slate-200">“¿Qué vemos hoy?”</em>. Explora nuestro catálogo, descubre recomendaciones pensadas para cada estado de ánimo y mantente al día con lo mejor de la pantalla chica y grande.
            </p>
          </div>

        </div>

        {/* Cierre / Callout */}
        <section className="text-center bg-gradient-to-r from-red-950/40 via-slate-900 to-red-950/40 border border-red-900/30 rounded-2xl p-8 sm:p-10">
          <p className="text-xl sm:text-2xl font-medium text-slate-200 mb-2">
            Prepárate unas palomitas y ponte cómodo. 🍿
          </p>
          <span className="text-2xl sm:text-3xl font-bold text-red-500 tracking-wide">
            ¡Estás en casa!
          </span>
        </section>

      </div>
    </main>
  );
}