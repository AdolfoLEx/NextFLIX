"use client";
import { useEffect } from "react";
import ProductCard from "./productos/components/ProductCard";
import Banner from "@/ui/components/Banner";
import CartBubble from "@/ui/components/CartBubble";

export default function Home() {
  useEffect(() => {
    // This code will run on the client side after the component mounts
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => console.log(data));
  }, []);
  return (
    <div className="min-h-screen bg-white">
      <Banner />
      <div className="max-w-6xl mx-auto px-6 py-20">
        {/* Products */}
        <div className="mt-24">
          <h2 className="text-2xl font-bold text-slate-900 text-center">
            Productos destacados
          </h2>
          <p className="mt-2 text-slate-500 text-center">
            Un vistazo a cómo luce nuestro componente ProductCard.
          </p>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <ProductCard
              title="Producto de ejemplo"
              price={19.99}
              image="https://cdn.thewirecutter.com/wp-content/media/2024/07/laptopstopicpage-2048px-3685-2x1-1.jpg?width=2048&quality=75&crop=2:1&auto=webp"
              description="Este es un producto de ejemplo para mostrar cómo se ve un ProductCard."
            />
          </div>
        </div>
      </div>
      <CartBubble />
    </div>
  );
}
