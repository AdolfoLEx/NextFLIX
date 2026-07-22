"use client";

import DialogComponent from "@/ui/components/Dialog";

/*
type SerieModalProps = {
  title: string;
  description: string;
};
*/
type SerieModalProps = {
  titulo: string;
  sipnopsis: string;
};


export default function SerieModal({
  /*
  title,
  description,
  */
  titulo,
  sipnopsis,  
}: SerieModalProps) {
  return (
    <DialogComponent
      trigger={
        <button className="w-full rounded-xl bg-slate-900 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2">
          Ver Serie
        </button>
      }
    >
      <div className="space-y-5">
        <div className="pr-8">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-blue-600">
            Detalles de la Serie
          </p>
          <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-900">
            {titulo}
          </h2>
        </div>

        <div className="rounded-2xl bg-slate-50 p-4">
          <p className="text-sm leading-7 text-slate-600">{sipnopsis}</p>
        </div>
      </div>
    </DialogComponent>
  );
}
