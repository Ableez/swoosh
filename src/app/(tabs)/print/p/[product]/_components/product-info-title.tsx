import { Button } from "@/components/ui/button";
import { type Product } from "@/lib/types/products";
import { Heart, Share } from "lucide-react";

type productInfoTittleProps = {
  product: Product;
};

export const ProductInfoTittle = ({ product }: productInfoTittleProps) => {
  return (
    <div className="flex place-items-center justify-between p-4 align-middle">
      <div className="font-medium">
        <h4 className="text-base font-bold">
          {product.productInfo.name ?? "Product Name"}
        </h4>
        <div className="flex place-items-center justify-start gap-2 align-middle">
          <h4 className="flex place-items-center gap-1 align-middle">
            <span className="text-base font-semibold text-black dark:text-white">
              ₦
              {product.attribute.priceRange.low.price
                .toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
            </span>
            <span className="text-sm font-normal text-neutral-600">
              for {product.attribute.priceRange.low.qty}
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
