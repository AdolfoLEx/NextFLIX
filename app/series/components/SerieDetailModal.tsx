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
      title={serie.titulo}
      description={serie.sinopsis}
      image={serie.urlPortada}
      size="md"
      footer={
        <p className="text-sm text-muted-foreground">
          Precio: ${serie.estreno}
        </p>
      }
    >
      <></>
    </DialogComponent>
  );
}
