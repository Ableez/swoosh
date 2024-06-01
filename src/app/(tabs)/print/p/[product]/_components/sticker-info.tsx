import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { type StickerType, type SizeOption } from "@/lib/data/productsSchema";
import StickerTypeSelector from "./sticker-type-selector";
import StickerSizeSelector from "./sticker-size-selector";
import CustomSizeDialog from "./custom-size-dialog";
import StickerQuantitySelector from "./quantity-selector";
import DesignOptionSelector from "./design-option-selector";

type StickerProductInfoProps = {
  stickerTypes: StickerType[];
  sizeOptions: SizeOption[];
  designOptions: { value: string; image: string }[];
};

const StickerProductInfo = ({
  stickerTypes,
  sizeOptions,
  designOptions,
}: StickerProductInfoProps) => {
  const [currStickerType, setCurrStickerType] = useState<StickerType>();
  const [currStickerSizeOption, setCurrStickerSizeOption] =
    useState<SizeOption>();
  const [customSizeDim, setCustomSizeDim] = useState<{
    width: number;
    height: number;
  }>({ width: 3, height: 3 });
  const [customSizeDialogOpen, setCustomSizeDialogOpen] =
    useState<boolean>(false);
  const [quantity, setQuantity] = useState<number>(100);
  const [designOption, setDesignOption] = useState<string>();

  return (
    <div className="grid">
      <StickerTypeSelector
        stickerTypes={stickerTypes}
        currStickerType={currStickerType!}
        setCurrStickerType={setCurrStickerType}
      />
      <StickerSizeSelector
        sizeOptions={sizeOptions}
        currStickerSizeOption={currStickerSizeOption!}
        setCurrStickerSizeOption={setCurrStickerSizeOption}
        openCustomSizeDialog={() => setCustomSizeDialogOpen(true)}
      />
      <CustomSizeDialog
        open={customSizeDialogOpen}
        setOpen={setCustomSizeDialogOpen}
        customSizeDim={customSizeDim}
        setCustomSizeDim={setCustomSizeDim}
        setCurrStickerSizeOption={setCurrStickerSizeOption}
      />
      <StickerQuantitySelector quantity={quantity} setQuantity={setQuantity} />
      <DesignOptionSelector
        designOptions={designOptions}
        designOption={designOption!}
        setDesignOption={setDesignOption}
      />
      <div className="grid w-full place-items-center gap-2 p-4 px-4 text-lg font-semibold">
        <Button
          variant={"default"}
          size={"lg"}
          className="h-14 w-full rounded-2xl bg-black text-lg text-white hover:bg-black/80"
        >
          Buy now
        </Button>
        <Button
          variant={"outline"}
          size={"lg"}
          className="h-14 w-full rounded-2xl text-lg"
        >
          Add to cart
        </Button>
      </div>
    </div>
  );
};

export default StickerProductInfo;
