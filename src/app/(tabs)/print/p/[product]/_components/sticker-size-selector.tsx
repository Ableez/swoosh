import Image from "next/image";
import React from "react";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";
import { ChevronsUpDown, X } from "lucide-react";
import {
  type MetricSize,
  type MetricBasedSizeOption,
} from "@/lib/types/products";

type StickerSizeSelectorProps = {
  sizeOptions: MetricBasedSizeOption;
  currStickerSizeOption:
    | (MetricSize & {
        custom: boolean;
      })
    | null;
  setCurrStickerSizeOption: React.Dispatch<
    React.SetStateAction<
      | (MetricSize & {
          custom: boolean;
        })
      | null
    >
  >;
  openCustomSizeDialog: () => void;
};

const StickerSizeSelector = ({
  sizeOptions,
  currStickerSizeOption,
  setCurrStickerSizeOption,
  openCustomSizeDialog,
}: StickerSizeSelectorProps) => (
  <Drawer>
    <DrawerTrigger asChild>
      <Button
        className="border-zneutral-200/50 w-full justify-between rounded-none border-t p-8 px-4 text-lg font-semibold"
        variant={"ghost"}
      >
        <h4 className="text-sm font-medium">Size</h4>
        <h4 className="flex place-items-center justify-between gap-2 align-middle text-sm font-medium">
          <span>{currStickerSizeOption?.name}</span>
          <ChevronsUpDown width={16} />
        </h4>
      </Button>
    </DrawerTrigger>
    <DrawerContent>
      <DrawerHeader className="flex place-items-center justify-between py-0 pl-8 align-middle">
        <DrawerTitle>Pick a size</DrawerTitle>
        <DrawerClose asChild>
          <Button variant={"ghost"} size={"icon"}>
            <X />
          </Button>
        </DrawerClose>
      </DrawerHeader>
      <div className="grid grid-flow-row place-items-center gap-2 px-4 align-middle">
        {sizeOptions.map((size, index) => (
          <DrawerClose
            asChild
            key={index}
            onClick={() => setCurrStickerSizeOption({ ...size, custom: false })}
          >
            <div
              className={`flex w-full place-items-center justify-between rounded-2xl p-3 align-middle ring-2 hover:bg-neutral-200/30 hover:ring-neutral-200 ${currStickerSizeOption?.name === size.name ? "bg-red-100/40 ring-red-300/80" : "ring-transparent"}`}
            >
              <div className="flex w-full place-items-center justify-between gap-6 align-middle">
                <div className="flex place-items-center justify-start gap-4 align-middle text-sm">
                  <Image
                    src={
                      size.image ?? "/productImages/CUSTOM_STICKER_SIZE.webp"
                    }
                    alt="SAV sticker"
                    width={400}
                    height={400}
                    className="h-full w-[4rem] rounded-[4px]"
                  />
                  <h4 className="font-medium">{size.name}</h4>
                </div>
                <h4 className="mr-2 justify-self-end text-xs font-normal text-neutral-500">
                  {size.value.INCH.name}
                </h4>
              </div>
            </div>
          </DrawerClose>
        ))}
        <DrawerClose asChild onClick={() => openCustomSizeDialog()}>
          <div
            className={`flex w-full place-items-center justify-between rounded-2xl p-3 align-middle ring-2 hover:bg-neutral-200/30 hover:ring-neutral-200 ${currStickerSizeOption?.custom ? "bg-red-100/40 ring-red-300/80" : "ring-transparent"}`}
          >
            <div className="flex w-full place-items-center justify-between gap-6 align-middle">
              <div className="flex place-items-center justify-start gap-4 align-middle text-sm">
                <Image
                  src={"/productImages/CUSTOM_STICKER_SIZE.webp"}
                  alt="SAV sticker"
                  width={400}
                  height={400}
                  className="h-full w-[4rem] rounded-[4px]"
                />
                <h4 className="font-medium">Custom size</h4>
              </div>
              {/* <h4 className="mr-2 justify-self-end text-xs font-normal text-neutral-500">
                {size.value.INCH.name}
              </h4> */}
            </div>
          </div>
        </DrawerClose>
      </div>
    </DrawerContent>
  </Drawer>
);

export default StickerSizeSelector;
