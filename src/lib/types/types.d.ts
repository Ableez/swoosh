import type { MetricSize, StickerType } from "./products";

type OrderType = {
  product: string;
  type: StickerType | undefined;
  size:
    | (MetricSize & {
        custom: boolean;
      })
    | null;
  designOption: {
    name: string;
    description: string;
    value: string;
  } | null;
};
