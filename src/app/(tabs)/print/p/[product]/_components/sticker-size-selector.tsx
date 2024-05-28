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
import { type SizeOption } from "@/lib/data/productsSchema";

type StickerSizeSelectorProps = {
  sizeOptions: SizeOption[];
  currStickerSizeOption: SizeOption;
  setCurrStickerSizeOption: (size: SizeOption) => void;
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
          <span>{`${currStickerSizeOption?.name} ${currStickerSizeOption?.value}`}</span>
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
            onClick={() =>
              size.value === "Custom size"
                ? openCustomSizeDialog()
                : setCurrStickerSizeOption(size)
            }
          >
            <div
              className={`flex w-full place-items-center justify-between rounded-2xl p-3 align-middle ring-2 ${currStickerSizeOption?.name === size.name && currStickerSizeOption.value === size.value ? "bg-neutral-200/20 ring-neutral-700 hover:bg-neutral-200/10 hover:ring-neutral-500" : "bg-neutral-100/40 ring-transparent hover:ring-neutral-200"}`}
            >
              <div className="flex w-full place-items-center justify-between gap-6 align-middle">
                <div className="flex place-items-center justify-start gap-4 align-middle text-sm">
                  <Image
                    src={size.image ?? "/productImages/stickerimage4.jpg"}
                    alt="SAV sticker"
                    width={400}
                    height={400}
                    className="h-full w-[4rem] rounded-[4px]"
                  />
                  <h4 className="font-medium">{size.name}</h4>
                </div>
                <h4 className="justify-self-end text-xs font-normal text-neutral-500">
                  {size.value}
                </h4>
              </div>
            </div>
          </DrawerClose>
        ))}
      </div>
    </DrawerContent>
  </Drawer>
);

export default StickerSizeSelector;
