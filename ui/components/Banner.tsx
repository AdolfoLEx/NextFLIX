import Link from "next/link";

export default function Banner() {
  return (
    <section className="bg-linear-to-r from-blue-600 to-indigo-600 text-white">
      <div className="max-w-6xl mx-auto px-6 py-20 grid grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Encuentra las mejores Series y Películas
          </h1>
          <p className="text-lg text-blue-100 mb-8">
            Descubre nuestra inmensa colección de Series y Películas con los mejores precios y la
            mejor calidad.
          </p>
          <Link
            href="/series"
            className="inline-block bg-white text-blue-600 font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-blue-100 transition"
          >
            Ver nuestras Series
          </Link>
        </div>
        <div className="flex justify-center">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeY4rprVKYoyo0ZD0jjMPLGwZSsuuvm8VxCIlf_W-2EA&s=10"
            alt="Serie Destacada"
            className="w-72 object-contain"
            width={320}
            height={160}
          />
        </div>
      </div>
    </section>
  );
}
