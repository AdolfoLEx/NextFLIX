import Link from "next/link";

export default function Banner() {
  return (
    <section className="relative overflow-hidden bg-slate-950 text-slate-100 py-16 md:py-24 border-b border-slate-800">
      {/* Fondo con brillo ambiental sutil */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-red-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-red-900/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Columna de Texto */}
        <div className="space-y-6 text-center md:text-left">
          <span className="inline-block px-3 py-1 text-xs font-semibold uppercase tracking-widest text-red-500 bg-red-500/10 rounded-full border border-red-500/20">
            Catálogo ilimitado
          </span>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">
            Encuentra las mejores <span className="text-red-600">Series</span> y Películas
          </h1>

          <p className="text-base sm:text-lg text-slate-400 font-light max-w-lg mx-auto md:mx-0 leading-relaxed">
            Descubre nuestra inmensa colección con la mejor calidad visual, recomendaciones personalizadas y títulos siempre actualizados.
          </p>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
            <Link
              href="/series"
              className="w-full sm:w-auto text-center bg-red-600 hover:bg-red-700 text-white font-semibold px-8 py-3.5 rounded-xl shadow-lg shadow-red-600/25 hover:shadow-red-600/40 transition-all duration-300 transform hover:-translate-y-0.5"
            >
              Ver nuestras Series
            </Link>
          </div>
        </div>

        {/* Columna de Imagen con img estándar */}
        <div className="flex justify-center items-center">
          <div className="relative group">
            {/* Resplandor trasero */}
            <div className="absolute -inset-1 bg-gradient-to-r from-red-600 to-amber-600 rounded-2xl blur opacity-30 group-hover:opacity-60 transition duration-500" />
            
            <div className="relative bg-slate-900 border border-slate-800 rounded-2xl p-3 shadow-2xl">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeY4rprVKYoyo0ZD0jjMPLGwZSsuuvm8VxCIlf_W-2EA&s=10"
                alt="Serie Destacada"
                width={320}
                height={400}
                className="w-64 md:w-80 h-auto rounded-xl object-cover transform group-hover:scale-[1.02] transition duration-300"
                loading="eager"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}