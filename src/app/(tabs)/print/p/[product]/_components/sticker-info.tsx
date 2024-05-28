import Image from "next/image";
import React, { useState } from "react";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";
import Cookies from "js-cookie";
import { Button } from "@/components/ui/button";
import {
  CheckCircle2,
  CheckCircle2Icon,
  ChevronsUpDown,
  Minus,
  MoveHorizontal,
  MoveVertical,
  Plus,
  X,
} from "lucide-react";
import { type Sticker } from "@/lib/data/productsSchema";

type StickerProductInfoProps = {
  sticker: Sticker;
};

export const StickerProductInfo = ({ sticker }: StickerProductInfoProps) => {
  const [stickerQty, setStickerQty] = useState(100);
  const [openCustomSizeDialog, setOpenCustomSizeDialog] = useState(false);
  const [customSizeDim, setCustomSizeDim] = useState({
    width: 3,
    height: 2,
  });
  const [currStickerType, setCurrStickerType] = useState(
    sticker.stickerTypes[0],
  );
  const [currStickerSizeOption, setCurrStickerSizeOption] = useState(
    sticker.sizeOptions[0],
  );
  const [currDesignOption, setCurrDesignOption] = useState(
    sticker.designOption[0],
  );
  const [uploadedFileLink, setUploadFileLink] = useState("");
  const { toast } = useToast();

  const handleContinue = () => {};
  return (
    <div>
      {/* sticker type */}
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
            {sticker.stickerTypes.map((stickerType, idx) => (
              <DrawerClose
                onClick={() => {
                  setCurrStickerType(stickerType);
                }}
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

      {/* sticker size */}
      <Drawer>
        <DrawerTrigger asChild>
          <Button
            className="border-zneutral-200/50 w-full justify-between rounded-none border-t p-8 px-4 text-lg font-semibold"
            variant={"ghost"}
          >
            <h4 className="text-sm font-medium">Size</h4>
            <h4 className="flex place-items-center justify-between gap-2 align-middle text-sm font-medium">
              <span>
                {`${currStickerSizeOption?.name} ${currStickerSizeOption?.value}` ||
                  `${sticker.sizeOptions[0]?.name} ${currStickerSizeOption?.value}`}
              </span>
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
            {sticker.sizeOptions.map((size, index) => {
              return (
                <DrawerClose
                  asChild
                  key={index}
                  onClick={() => {
                    if (size.value === "Custom size") {
                      setOpenCustomSizeDialog(true);
                    } else {
                      setCurrStickerSizeOption(size);
                    }
                  }}
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
              );
            })}
          </div>
        </DrawerContent>
      </Drawer>

      {/* Choose custom size dialog */}
      <Dialog
        open={openCustomSizeDialog}
        onOpenChange={setOpenCustomSizeDialog}
      >
        <DialogContent className="max-w-[90vw] rounded-3xl border border-black">
          <DialogTitle>Custom size</DialogTitle>
          <div className="mb-2 h-[10rem]">
            <div className="grid h-full w-full place-items-center rounded-2xl bg-orange-300">
              <div
                className={`max-h-32 max-w-64 border-2 border-black bg-white p-8`}
                style={{
                  aspectRatio: `${customSizeDim.width}/${customSizeDim.height}`,
                }}
              />
            </div>
          </div>
          <div className="grid grid-flow-col gap-4">
            <div>
              <Label className="text-black/50">Width</Label>
              <div className="grid grid-flow-col place-items-center align-middle">
                <div className="grid aspect-square h-full place-items-center rounded-l-2xl bg-neutral-200 text-xl font-bold">
                  <MoveHorizontal width={16} />
                </div>
                <Input
                  placeholder="5"
                  className="rounded-l-none py-6 text-xl"
                  type="number"
                  value={customSizeDim.width}
                  onChange={(e) => {
                    setCustomSizeDim((p) => {
                      return {
                        ...p,
                        width: Number(e.target.value),
                      };
                    });
                  }}
                />
              </div>
            </div>
            <div>
              <Label className="text-black/50">Height</Label>
              <div className="grid grid-flow-col place-items-center align-middle">
                <div className="grid aspect-square h-full place-items-center rounded-l-2xl bg-neutral-200 text-xl font-bold">
                  <MoveVertical width={16} />
                </div>
                <Input
                  placeholder="5"
                  className="rounded-l-none py-6 text-xl"
                  type="number"
                  value={customSizeDim.height}
                  onChange={(e) => {
                    setCustomSizeDim((p) => {
                      return {
                        ...p,
                        height: Number(e.target.value),
                      };
                    });
                  }}
                />
              </div>
            </div>
          </div>
          <div className="my-2 grid place-items-center">
            <p className="text-xs text-black/50">
              Sizes must be measured in inches**
            </p>
          </div>
          <DialogClose asChild>
            <Button
              className="w-full"
              onClick={() => {
                setCurrStickerSizeOption({
                  name: "Custom size",
                  value: `${customSizeDim.width}" X ${customSizeDim.height}"`,
                  image: "/productImages/CUSTOM_STICKER_SIZE.webp",
                });
              }}
            >
              Set
            </Button>
          </DialogClose>
        </DialogContent>
      </Dialog>

      {/* set quantity button */}
      <div className="flex w-full place-items-center justify-between rounded-none border-t border-neutral-200/50 p-4 text-lg font-semibold">
        <h4 className="text-sm font-medium">Quantity</h4>
        <div className="grid grid-flow-col grid-cols-3 place-items-center justify-between gap-3 align-middle text-sm font-medium">
          <Button
            onClick={() => setStickerQty((p) => (p > 50 ? p - 25 : p))}
            size={"icon"}
            disabled={stickerQty <= 50}
            className="active:bg-neutral/60 aspect-square h-8 w-8 rounded-full bg-black hover:bg-black active:bg-neutral-600"
          >
            <Minus width={18} />
          </Button>
          <span className="text-lg">{stickerQty}</span>
          <Button
            onClick={() => setStickerQty((p) => p + 25)}
            size={"icon"}
            className="active:bg-neutral/60 aspect-square h-8 w-8 rounded-full bg-black hover:bg-black active:bg-neutral-600"
          >
            <Plus width={18} />
          </Button>
        </div>
      </div>

      {/* upload design button */}
      <Drawer>
        <DrawerTrigger asChild>
          <Button
            className="w-full justify-between rounded-none border-t border-neutral-200/50 p-8 px-4 text-lg font-semibold"
            variant={"ghost"}
          >
            <h4 className="text-sm font-medium">Design option</h4>
            <h4 className="flex place-items-center justify-between gap-2 align-middle text-sm font-medium">
              <span>{currDesignOption?.name}</span>
              <ChevronsUpDown width={16} />
            </h4>
          </Button>
        </DrawerTrigger>
        <DrawerContent>
          <DrawerHeader className="flex place-items-center justify-between py-0 pl-8 align-middle">
            <DrawerTitle>Design option</DrawerTitle>
            <DrawerClose asChild>
              <Button variant={"ghost"} size={"icon"}>
                <X />
              </Button>
            </DrawerClose>
          </DrawerHeader>
          <div className="grid grid-flow-row place-items-center gap-2 p-4 align-middle">
            {sticker.designOption.map((designOption, idx) => (
              <DrawerClose
                onClick={() => {
                  setCurrDesignOption(designOption);
                }}
                asChild
                key={idx}
              >
                <div
                  className={`flex w-full place-items-center justify-between rounded-2xl  p-4 align-middle ring-2 ${currDesignOption?.name === designOption.name ? "bg-neutral-200/70 ring-neutral-500 hover:bg-neutral-200/70 hover:ring-neutral-500" : "bg-neutral-200/40 ring-transparent hover:ring-neutral-200"}`}
                >
                  <div className="flex place-items-center justify-start gap-4 align-middle">
                    {/* <Image
                      src={designOption.image}
                      alt="Sticker type image"
                      width={200}
                      height={200}
                      className="h-full w-[4.5rem] rounded-full"
                    /> */}
                    <div className="grid gap-1">
                      <h4 className="font-medium">{designOption.name}</h4>
                      <p className="text-xs text-black/50">
                        {designOption.description}
                      </p>
                    </div>
                  </div>

                  {currDesignOption?.name === designOption.name && (
                    <div className="justify-self-end">
                      <CheckCircle2Icon width={20} />
                    </div>
                  )}
                </div>
              </DrawerClose>
            ))}
          </div>
        </DrawerContent>
      </Drawer>

      {/* upload design button */}
      {/* #TODO: replace with uploadthing */}
      {currDesignOption?.name === "I have my design" && (
        <div className="p-4">
          <label
            htmlFor="upload__design__image"
            className="flex w-full place-items-center justify-center gap-2 rounded-xl border-2 border-dashed border-primary/20 p-4 align-middle text-sm text-primary hover:bg-neutral-100 active:bg-neutral-200/60"
          >
            <ImageIcon />
            <h4>Upload your design file</h4>
          </label>
          <input
            id="upload__design__image"
            type="file"
            accept=""
            className="hidden"
          />
        </div>
      )}

      <div className="my-6 grid gap-3 p-4">
        <Button
          onClick={() => {
            handleContinue();
          }}
          className="w-full"
        >
          Add to cart
        </Button>
        <Button className="w-full" variant={"secondary"}>
          Order now
        </Button>
      </div>
    </div>
  );
};
