import { Button } from "@/components/ui/button";
import { Heart, Share } from "lucide-react";

type productInfoTittleProps = {
  productName?: string;
  quantityOptions?: {
    pricePerUnit: number;
    quantity: number;
    packPrice: number;
  }[];
};

export const ProductInfoTittle = ({
  productName,
  quantityOptions,
}: productInfoTittleProps) => {
  return (
    <div className="flex place-items-center justify-between p-4 align-middle">
      <div className="font-medium">
        <h4 className="text-lg font-bold">{productName ?? "Product Name"}</h4>
        <div className="flex place-items-center justify-start gap-2 align-middle">
          <h4 className="flex place-items-center gap-1 align-middle">
            <span className="text-xs font-normal text-neutral-600">From </span>
            <span className="text-base font-bold text-black dark:text-white">
              ${quantityOptions?.[0]?.packPrice}
            </span>
          </h4>
        </div>
      </div>
      <div className="flex place-items-center justify-between gap-2 align-middle">
        <Button variant={"outline"} size={"icon"}>
          <Heart width={20} />
        </Button>
        <Button variant={"outline"} size={"icon"}>
          <Share width={20} />
        </Button>
      </div>
    </div>
  );
};

