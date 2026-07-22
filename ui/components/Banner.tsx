import Link from "next/link";

export default function Banner() {
  return (
    <section className="bg-linear-to-r from-blue-600 to-indigo-600 text-white">
      <div className="max-w-6xl mx-auto px-6 py-20 grid grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Encuentra los mejores productos
          </h1>
          <p className="text-lg text-blue-100 mb-8">
            Descubre nuestra colección de productos con los mejores precios y la
            mejor calidad.
          </p>
          <Link
            href="/productos"
            className="inline-block bg-white text-blue-600 font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-blue-100 transition"
          >
            Ver productos
          </Link>
        </div>
        <div className="flex justify-center">
          <img
            src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png"
            alt="Producto Destacado"
            className="w-72 object-contain"
            width={80}
            height={80}
          />
        </div>
      </div>
    </section>
  );
}
