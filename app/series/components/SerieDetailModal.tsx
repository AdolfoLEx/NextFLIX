import DialogComponent from "@/ui/components/Dialog";

type Serie = {
  id: number;
  title: string;
  description: string;
  price: number;
  image: string;
};

type Props = {
  serie: Serie;
  trigger: React.ReactNode;
};

export default function SerieDetailModal({ serie, trigger }: Props) {
  return (
    <DialogComponent
      trigger={trigger}
      title={serie.title}
      description={serie.description}
      image={serie.image}
      size="md"
      footer={
        <p className="text-sm text-muted-foreground">
          Precio: ${serie.price}
        </p>
      }
    >
      <></>
    </DialogComponent>
  );
}
