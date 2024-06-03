"use client";
import React, { useState, useEffect } from "react";
import {
  type StickerType,
  type StickerAttributes,
  type MetricSize,
} from "@/lib/types/products";
import { Button } from "@/components/ui/button";
import StickerTypeSelector from "./sticker-type-selector";
import StickerSizeSelector from "./sticker-size-selector";
import CustomSizeDialog from "./custom-size-dialog";
import DesignOptionSelector from "./design-option-selector";
import { addElement, getElement, removeElement } from "@/lib/utils/idbAction";
import { IDB_NAME, ORDERS_STORE } from "@/lib/utils/CONSTANTS";
import { usePathname, useRouter } from "next/navigation";
import { postToast } from "@/components/global/toaster";

type Props = {
  stickerAttribute: StickerAttributes;
};

const initialDesignOption = {
  name: "Design for me",
  description: "We will make the perfect design for you.",
  value: "design-for-me",
};

const StickerProductInfo = ({ stickerAttribute }: Props) => {
  const [currStickerType, setCurrStickerType] = useState<
    StickerType | undefined
  >(stickerAttribute.stickerTypes[0]);
  const [customSizeDialogOpen, setCustomSizeDialogOpen] = useState(false);
  const [currStickerSizeOption, setCurrStickerSizeOption] = useState<
    (MetricSize & { custom: boolean }) | null
  >(
    stickerAttribute.sizes[0]
      ? { ...stickerAttribute.sizes[0], custom: false }
      : null,
  );
  const [customSizeDim, setCustomSizeDim] = useState<
    (MetricSize & { custom: boolean }) | null
  >(
    stickerAttribute.sizes[0]
      ? { ...stickerAttribute.sizes[0], custom: false }
      : null,
  );
  const [currDesignOption, setCurrDesignOption] = useState(initialDesignOption);

  const router = useRouter();
  const pathName = usePathname();

  useEffect(() => {
    const fetchOrderData = async () => {
      const existingOrder: typeof order = await getElement(
        ORDERS_STORE,
        "sticker_id_001",
        IDB_NAME,
      );
      if (existingOrder) {
        setCurrStickerType(existingOrder.type);
        setCurrStickerSizeOption(existingOrder.size);
        setCustomSizeDim(existingOrder.size);
        setCurrDesignOption(existingOrder.designOption);

        postToast("Options autosaved", {
          id: "autosavedOptions",
          actionButtonStyle: { borderRadius: "20px" },
          action: {
            label: "Reset",
            onClick: () => {
              setCurrStickerType(stickerAttribute.stickerTypes[0]);
              setCurrStickerSizeOption(
                stickerAttribute.sizes[0]
                  ? { ...stickerAttribute.sizes[0], custom: false }
                  : null,
              );
              setCustomSizeDim(
                stickerAttribute.sizes[0]
                  ? { ...stickerAttribute.sizes[0], custom: false }
                  : null,
              );
              setCurrDesignOption(initialDesignOption);
              void removeElement(ORDERS_STORE, IDB_NAME, "sticker_id_001");
            },
          },
        });
      }
    };
    void fetchOrderData();
  }, [stickerAttribute.sizes, stickerAttribute.stickerTypes]);

  const order = {
    product: "Sticker",
    type: currStickerType,
    size: currStickerSizeOption,
    designOption: currDesignOption,
  };

  const handleOrder = async () => {
    await addElement(ORDERS_STORE, IDB_NAME, {
      ...order,
      id: "sticker_id_001",
    });
    router.push(`${pathName}/order`);
  };

  return (
    <div>
      <StickerTypeSelector
        stickerTypes={stickerAttribute.stickerTypes}
        currStickerType={currStickerType}
        setCurrStickerType={setCurrStickerType}
      />
      <StickerSizeSelector
        sizeOptions={stickerAttribute.sizes}
        currStickerSizeOption={currStickerSizeOption}
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
      <DesignOptionSelector
        currDesignOption={currDesignOption}
        setCurrDesignOption={setCurrDesignOption}
      />

      <div className="flex place-items-center justify-between border-t p-6 align-middle text-sm font-medium">
        <h4>Total</h4>
        <h4>N19,230.93</h4>
      </div>

      <div className="my-2 grid w-full place-items-center gap-2 p-4 px-4 text-lg font-semibold">
        <Button
          onClick={handleOrder}
          variant="default"
          size="lg"
          className="h-12 w-full rounded-2xl bg-black text-white hover:bg-black/80"
        >
          Order now
        </Button>
      </div>
    </div>
  );
};

export default StickerProductInfo;
