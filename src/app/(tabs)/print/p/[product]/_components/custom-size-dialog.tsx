import React from "react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { MoveHorizontal, MoveVertical } from "lucide-react";

type CustomSizeDialogProps = {
  open: boolean;
  setOpen: (open: boolean) => void;
  customSizeDim: { width: number; height: number };
  setCustomSizeDim: (dim: { width: number; height: number }) => void;
  setCurrStickerSizeOption: (size: {
    name: string;
    value: string;
    image: string;
  }) => void;
};

const CustomSizeDialog = ({
  open,
  setOpen,
  customSizeDim,
  setCustomSizeDim,
  setCurrStickerSizeOption,
}: CustomSizeDialogProps) => (
  <Dialog open={open} onOpenChange={setOpen}>
    <DialogContent className="max-w-[90vw] rounded-3xl border border-black">
      <DialogTitle>Custom size</DialogTitle>
      <div className="mb-2 h-[10rem]">
        <div className="grid h-full w-full place-items-center rounded-2xl bg-orange-300">
          <div
            className="max-h-32 max-w-64 border-2 border-black bg-white p-8"
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
              onChange={(e) =>
                setCustomSizeDim({
                  ...customSizeDim,
                  width: Number(e.target.value),
                })
              }
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
              onChange={(e) =>
                setCustomSizeDim({
                  ...customSizeDim,
                  height: Number(e.target.value),
                })
              }
            />
          </div>
        </div>
      </div>
      <DialogClose asChild>
        <Button
          variant={"default"}
          size={"sm"}
          className="mt-4 h-14 rounded-xl bg-black text-lg text-white hover:bg-black/80"
          onClick={() => {
            setCurrStickerSizeOption({
              name: "Custom size",
              value: `${customSizeDim.width} x ${customSizeDim.height} cm`,
              image: "/productImages/stickerimage4.jpg",
            });
            setOpen(false);
          }}
        >
          Apply
        </Button>
      </DialogClose>
    </DialogContent>
  </Dialog>
);

export default CustomSizeDialog;
