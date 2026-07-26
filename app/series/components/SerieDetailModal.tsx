import DialogComponent from "@/ui/components/Dialog";
import * as DialogPrimitive from "@radix-ui/react-dialog";

type Serie = {
  id: number;
  titulo: string;
  genero: string;
  sinopsis: string;
  urlPortada: string;
  estreno: number;
  calificacion: number;
  plataforma: string;
};

type Props = {
  serie: Serie;
  trigger: React.ReactNode;
};

export default function SerieDetailModal({ serie, trigger }: Props) {
  return (
    <DialogComponent
      trigger={trigger}
      titulo={serie.titulo}
      sinopsis={serie.sinopsis}
      urlPortada={serie.urlPortada}
      size="md"
      footer={
        <p className="text-sm text-red-900 flex items-center justify-between gap-3">
          <span>{serie.plataforma}</span>
          <span className="font-bold text-base">{serie.estreno}</span>
        </p>
      }
    >
      <DialogPrimitive.Close asChild>
        <button className="rounded border px-4 py-2 font-bold text-white bg-green-800 hover:bg-green-600 transition-colors">
          Cerrar
        </button>
      </DialogPrimitive.Close>

      <></>
    </DialogComponent>
  );
}
