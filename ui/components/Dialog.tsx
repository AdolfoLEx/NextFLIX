"use client";
import * as Dialog from "@radix-ui/react-dialog";
//import Image from "next/image";

type DialogProps = {
  trigger: React.ReactNode;
  children: React.ReactNode;

  /*
    title?: string;
    description?: string;
    image?: string;
  */
  titulo?: string;
  sinopsis?: string;
  urlPortada?: string;

  footer?: React.ReactNode;
  size?: "sm" | "md" | "lg";
};

export default function DialogComponent({
  trigger,
  children,
  /*
  title,
  description,
  image,
  */
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

  const imageHeights = {
    sm: "h-40",
    md: "h-52",
    lg: "h-64",
  };
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>{trigger}</Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-40 bg-slate-950/60 backdrop-blur-sm" />
        <Dialog.Content
          className={`pt-4 fixed left-1/2 top-1/2 z-50 flex -translate-x-1/2 -translate-y-1/2 flex-col overflow-hidden rounded-3xl bg-white shadow-2xl outline-none ${sizes[size]}`}
        >
          {/* 
          {image && (
            <div className={`relative w-full shrink-0 ${imageHeights[size]}`}>
              <Image
                src={image}
                alt={title || "Dialog Image"}
                fill
                sizes="(max-width: 640px) 92vw, (max-width: 1024px) 28rem, 38rem"
                className="object-contain"
              />
            </div>
          )}
          */}

          {/*
          {image && (
            <div className={`relative w-full shrink-0 ${imageHeights[size]}`}>
              <img
                src={image}
                alt={title || "Dialog Image"}
                className="absolute inset-0 w-full h-full object-contain"
              />
            </div>
          )}
          */}
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeY4rprVKYoyo0ZD0jjMPLGwZSsuuvm8VxCIlf_W-2EA&s=10"
            alt="Serie Destacada"
            src={urlPortada}
            alt={titulo || "Dialog Image"}
            className="w-72 object-contain"
            width={320}
            height={160}
          />

          <div className="flex min-h-0 flex-1 flex-col p-6">
            {titulo && (
              <Dialog.Title className="pr-10 text-xl font-bold tracking-tight text-slate-900">
                {titulo}
              </Dialog.Title>
            )}
            {sinopsis && (
              <Dialog.Description className="mt-2 text-sm leading-6 text-slate-500">
                {sinopsis}
              </Dialog.Description>
            )}
            <div className="mt-5 min-h-0 flex-1 overflow-y-auto pr-1">
              {children}
            </div>

            {footer && (
              <div className="mt-6 flex justify-end gap-3 border-t border-slate-100 pt-5">
                {footer}
              </div>
            )}
            <Dialog.Close className="absolute right-4 top-4 inline-flex h-9 w-9 items-center justify-center rounded-full bg-slate-100 text-slate-500 transition hover:bg-slate-200 hover:text-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-400">
              <span className="text-xl leading-none">×</span>
            </Dialog.Close>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
