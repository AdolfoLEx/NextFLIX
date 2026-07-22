import ShoppingCart from "@/public/icon/ShoppingCart";
import * as Tooltip from "@radix-ui/react-tooltip";

export default function CartBubble() {
  return (
    <Tooltip.Provider>
      <Tooltip.Root>
        <Tooltip.Trigger asChild>
          <button className="fixed bottom-6 right-6 bg-blue-300 text-white p-4 rounded-full shadow-lg hover:bg-blue-400 transition">
            <ShoppingCart />
          </button>
        </Tooltip.Trigger>
        <Tooltip.Portal>
          <Tooltip.Content
            side="left"
            className="bg-gray-800 text-white text-sm rounded-md px-3 py-2 shadow-lg"
          >
            Ver Carrito
          </Tooltip.Content>
        </Tooltip.Portal>
      </Tooltip.Root>
    </Tooltip.Provider>
  );
}
