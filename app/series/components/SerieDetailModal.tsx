import DialogComponent from "@/ui/components/Dialog";

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
        <p className="text-sm text-muted-foreground">
          Estreno: {serie.estreno}
        </p>
      }
    >
      <></>
    </DialogComponent>
  );
}
