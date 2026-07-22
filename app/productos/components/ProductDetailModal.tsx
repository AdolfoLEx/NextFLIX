import DialogComponent from "@/ui/components/Dialog";

type Product = {
  id: number;
  title: string;
  description: string;
  price: number;
  image: string;
};

type Props = {
  product: Product;
  trigger: React.ReactNode;
};

export default function ProductDetailModal({ product, trigger }: Props) {
  return (
    <DialogComponent
      trigger={trigger}
      title={product.title}
      description={product.description}
      image={product.image}
      size="md"
      footer={
        <p className="text-sm text-muted-foreground">
          Precio: ${product.price}
        </p>
      }
    >
      <></>
    </DialogComponent>
  );
}
