"use client";
import { useEffect } from "react";
import SerieCard from "./series/components/SerieCard";
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
        {/* Series */}
        <div className="mt-24">
          <h2 className="text-2xl font-bold text-slate-900 text-center">
            Series destacadas
          </h2>
          <p className="mt-2 text-slate-500 text-center">
            ¿Quieres ver una de nuestras Series?
          </p>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <SerieCard
              titulo="Serie o Película de ejemplo"
              estreno={2000}
              urlPortada="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxsMYDYTWUSR5KVp29wK8dEuhTZ1mOSmsja4aPVkLyOA&s=10"
              sinopsis="Este es una serie de ejemplo de SerieCard."
            />
          </div>
        </div>
      </div>
      <CartBubble />
    </div>
  );
}
