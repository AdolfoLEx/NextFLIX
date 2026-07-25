import DialogComponent from "@/ui/components/Dialog";
import * as DialogPrimitive from "@radix-ui/react-dialog";

/*
type Serie = {
  id: number;
  title: string;
  description: string;
  price: number;
  image: string;
};
*/
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
        <p className="text-sm text-red-900">
            <span>{serie.plataforma}</span>
            Estreno: <span className="font-semibold">{serie.estreno}</span>
        </p>
      }
    >
      <DialogPrimitive.Close asChild>
        <button className="px-4 py-2 text-green-600 font-bold border rounded">Cerrar</button>
      </DialogPrimitive.Close>

      <></>
    </DialogComponent>
  );
}
