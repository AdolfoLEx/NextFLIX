"use client";

import * as Dialog from "@radix-ui/react-dialog";

type DialogProps = {
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  trigger: React.ReactNode;
  children: React.ReactNode;
  titulo?: string;
  sinopsis?: string;
  urlPortada?: string;
  footer?: React.ReactNode;
  size?: "sm" | "md" | "lg";
};

export default function DialogComponent({
  open,
  onOpenChange,
  trigger,
  children,
  titulo,
  sinopsis,
  urlPortada,
  footer,
  size = "md",
}: DialogProps) {
  const sizes = {
    sm: "w-[min(92vw,22rem)] h-[min(82vh,28rem)]",
    md: "w-[min(92vw,28rem)] h-[min(84vh,34rem)]",
    lg: "w-[min(92vw,38rem)] h-[min(88vh,42rem)]",
  };

  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Trigger asChild>{trigger}</Dialog.Trigger>
      
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-40 bg-slate-950/60 backdrop-blur-sm" />
        
        <Dialog.Content
          className={`pt-4 fixed left-1/2 top-1/2 z-50 flex -translate-x-1/2 -translate-y-1/2 flex-col overflow-hidden rounded-3xl bg-white shadow-2xl outline-none ${sizes[size]}`}
        >
          {/* 1. Imagen con altura fija y sin capacidad de encogerse/agrandarse */}
          {urlPortada && (
            <div className="relative h-48 w-full shrink-0 px-6">
              <img
                src={urlPortada}
                alt={titulo || "Portada"}
                className="h-full w-full object-contain mx-auto block rounded-2xl"
              />
            </div>
          )}

          {/* 2. Cuerpo del modal con scroll interno para que el contenido no desborde */}
          <div className="flex min-h-0 flex-1 flex-col p-6 overflow-hidden">
            <div className="flex-1 overflow-y-auto pr-1">
              {titulo && (
                <Dialog.Title className="text-center text-xl font-bold tracking-tight text-slate-900">
                  {titulo}
                </Dialog.Title>
              )}

              {sinopsis && (
                <Dialog.Description asChild className="mt-3 text-sm leading-relaxed text-slate-600">
                  <p>{sinopsis}</p>
                </Dialog.Description>
              )}

              <div className="mt-4">{children}</div>
            </div>

            {/* 3. Footer fijo al final del modal */}
            {footer && (
              <div className="mt-4 shrink-0 flex justify-end gap-3 border-t border-slate-100 pt-4">
                {footer}
              </div>
            )}
          </div>

          {/* Botón para cerrar */}
          <Dialog.Close className="absolute right-4 top-4 inline-flex h-9 w-9 items-center justify-center rounded-full bg-slate-100 text-slate-500 transition hover:bg-slate-200 hover:text-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-400">
            <span className="text-xl leading-none">×</span>
          </Dialog.Close>

        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}