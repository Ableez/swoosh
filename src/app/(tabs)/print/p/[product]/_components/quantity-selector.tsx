import React from "react";
import { Button } from "@/components/ui/button";
import { Plus, Minus } from "lucide-react";

type StickerQuantitySelectorProps = {
  quantity: number;
  setQuantity: (quantity: number) => void;
};

const StickerQuantitySelector = ({
  quantity,
  setQuantity,
}: StickerQuantitySelectorProps) => (
  <div className="flex w-full place-content-between place-items-center justify-between rounded-none border-y border-neutral-200/50 p-8 px-4 text-lg font-semibold">
    <h4 className="text-sm font-medium">Quantity</h4>
    <div className="grid w-1/3 grid-flow-col place-items-center justify-between rounded-2xl border border-neutral-200">
      <Button
        variant={"ghost"}
        size={"icon"}
        className="rounded-r-none p-4"
        onClick={() => quantity > 1 && setQuantity(quantity - 1)}
      >
        <Minus width={16} />
      </Button>
      <p className="place-self-center text-sm font-medium">{quantity}</p>
      <Button
        variant={"ghost"}
        size={"icon"}
        className="rounded-l-none p-4"
        onClick={() => setQuantity(quantity + 1)}
      >
        <Plus width={16} />
      </Button>
    </div>
  </div>
);

export default StickerQuantitySelector;
