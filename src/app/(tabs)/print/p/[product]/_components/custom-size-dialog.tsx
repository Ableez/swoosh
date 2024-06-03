import React from "react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { MoveHorizontal, MoveVertical } from "lucide-react";
import { type MetricSize } from "@/lib/types/products";

type CustomSizeDialogProps = {
  open: boolean;
  setOpen: (open: boolean) => void;
  customSizeDim:
    | (MetricSize & {
        custom: boolean;
      })
    | null;
  setCustomSizeDim: React.Dispatch<
    React.SetStateAction<
      | (MetricSize & {
          custom: boolean;
        })
      | null
    >
  >;
  setCurrStickerSizeOption: React.Dispatch<
    React.SetStateAction<
      | (MetricSize & {
          custom: boolean;
        })
      | null
    >
  >;
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
      <DialogDescription>Ratio dimension</DialogDescription>
      <div className="mb-2 h-[10rem]">
        <div className="grid h-full w-full place-items-center rounded-2xl border border-black bg-red-200">
          <div
            className="max-h-40 max-w-64 rounded-[6px] border-2 border-dashed border-black/80 bg-white p-4"
            style={{
              aspectRatio: `${customSizeDim?.value.INCH.w}/${customSizeDim?.value.INCH.h}`,
              scale:
                (customSizeDim?.value.INCH.w &&
                  customSizeDim?.value.INCH.w > 5) ??
                customSizeDim?.value.INCH.h
                  ? 0.6
                  : 1,
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
              value={customSizeDim?.value.INCH.w}
              onChange={(e) =>
                setCustomSizeDim({
                  ...customSizeDim,
                  custom: true,
                  image: "",
                  value: {
                    INCH: {
                      ...customSizeDim?.value.INCH,
                      w: parseInt(e.target.value),
                    },
                    CM: {
                      ...customSizeDim?.value.CM,
                      w: parseInt(e.target.value) * 2.54,
                    },
                    FT: {
                      ...customSizeDim?.value.FT,
                      w: parseInt(e.target.value) * 12,
                    },
                    MM: {
                      ...customSizeDim?.value.MM,
                      w: parseInt(e.target.value) * 25.4,
                    },
                  },
                } as
                  | (MetricSize & {
                      custom: boolean;
                    })
                  | null)
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
              value={customSizeDim?.value.INCH.h}
              onChange={(e) =>
                setCustomSizeDim({
                  ...customSizeDim,
                  custom: true,
                  value: {
                    INCH: {
                      ...customSizeDim?.value.INCH,
                      h: parseInt(e.target.value),
                    },
                    CM: {
                      ...customSizeDim?.value.CM,
                      h: parseInt(e.target.value) * 2.54,
                    },
                    FT: {
                      ...customSizeDim?.value.FT,
                      h: parseInt(e.target.value) * 12,
                    },
                    MM: {
                      ...customSizeDim?.value.MM,
                      h: parseInt(e.target.value) * 25.4,
                    },
                  },
                } as
                  | (MetricSize & {
                      custom: boolean;
                    })
                  | null)
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
            const obj = {
              name: `${customSizeDim?.value.INCH.w} x ${customSizeDim?.value.INCH.h}`,
              custom: true,
              value: {
                INCH: {
                  h: customSizeDim?.value.INCH.h,
                  w: customSizeDim?.value.INCH.w,
                  name: "INCH",
                },
                CM: {
                  h: customSizeDim?.value.CM.h,
                  w: customSizeDim?.value.CM.w,
                  name: "CM",
                },
                FT: {
                  h: customSizeDim?.value.FT.h,
                  w: customSizeDim?.value.FT.w,
                  name: "FT",
                },
                MM: {
                  h: customSizeDim?.value.MM.h,
                  w: customSizeDim?.value.MM.w,
                  name: "MM",
                },
              },
              image: "/productImages/CUSTOM_STICKER_SIZE.webp.jpg",
            };

            console.log("OBJ TEST: ", obj);

            setCurrStickerSizeOption(obj as MetricSize & { custom: boolean });

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
