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
import { ChevronsUpDown, X, CheckCircle2 } from "lucide-react";
import { type StickerType } from "@/lib/data/productsSchema";

type StickerTypeSelectorProps = {
  stickerTypes: StickerType[];
  currStickerType: StickerType;
  setCurrStickerType: (type: StickerType) => void;
};

const StickerTypeSelector = ({
  stickerTypes,
  currStickerType,
  setCurrStickerType,
}: StickerTypeSelectorProps) => (
  <Drawer>
    <DrawerTrigger asChild>
      <Button
        className="w-full justify-between rounded-none border-t border-neutral-200/50 p-8 px-4 text-lg font-semibold"
        variant={"ghost"}
      >
        <h4 className="text-sm font-medium">Sticker type</h4>
        <h4 className="flex place-items-center justify-between gap-2 align-middle text-sm font-medium">
          <span>{currStickerType.name}</span>
          <ChevronsUpDown width={16} />
        </h4>
      </Button>
    </DrawerTrigger>
    <DrawerContent>
      <DrawerHeader className="flex place-items-center justify-between py-0 pl-8 align-middle">
        <DrawerTitle>Sticker type</DrawerTitle>
        <DrawerClose asChild>
          <Button variant={"ghost"} size={"icon"}>
            <X />
          </Button>
        </DrawerClose>
      </DrawerHeader>
      <div className="grid grid-flow-row place-items-center gap-2 px-4 align-middle">
        {stickerTypes.map((stickerType, idx) => (
          <DrawerClose
            onClick={() => setCurrStickerType(stickerType)}
            asChild
            key={idx}
          >
            <div
              className={`flex w-full place-items-center justify-between rounded-2xl p-3 align-middle ring-2 ${currStickerType.name === stickerType.name ? "bg-neutral-200/70 ring-neutral-500 hover:bg-neutral-200/70 hover:ring-neutral-500" : "bg-neutral-200/40 ring-transparent hover:ring-neutral-200"}`}
            >
              <div className="flex place-items-center justify-start gap-4 align-middle">
                <Image
                  src={stickerType.image}
                  alt="Sticker type image"
                  width={200}
                  height={200}
                  className="h-full w-[4.5rem] rounded-full"
                />
                <h4 className="text-sm font-medium">{stickerType.name}</h4>
              </div>
              {currStickerType.name === stickerType.name && (
                <div className="justify-self-end">
                  <CheckCircle2 width={20} />
                </div>
              )}
            </div>
          </DrawerClose>
        ))}
      </div>
    </DrawerContent>
  </Drawer>
);

export default StickerTypeSelector;
