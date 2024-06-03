// Constants
export const PRINT_COLOR_OPTIONS = {
  SINGLE_COLOR: "Single color",
  FULL_COLOR: "Full Color",
} as const;

export const CARD_THICKNESS = {
  LIGHT: "LIGHT",
  THICK: "THICK",
  SUPERTHICK: "SUPER_THICK",
} as const;

export const SPECIAL_FINISH_OPTIONS = {
  RAISED_SPOT_GLOSS: "Raised Spot Gloss",
  NONE: "None",
} as const;

export const PRINT_SIDES_OPTIONS = {
  ONE_SIDED: "One Sided",
  TWO_SIDED: "Two Sided",
} as const;

export const METRICS = {
  INCH: { name: "INCH", w: 0, h: 0 },
  CM: { name: "CM", w: 0, h: 0 },
  FT: { name: "FT", w: 0, h: 0 },
  MM: { name: "MM", w: 0, h: 0 },
} as const;

export const EDGE_OPTIONS = {
  ROUNDED: "Rounded",
  STRAIGHT: "Straight",
} as const;

export const CARD_THICKNESS_VALUES = {
  LIGHT: { value: 200, metric: "GSM" },
  THICK: { value: 250, metric: "GSM" },
  SUPERTHICK: { value: 350, metric: "GSM" },
} as const;

// Types
export type Product = {
  type: string;
  productInfo: ProductInfo;
  attribute: ProductAttribute;
};

export type ProductInfo = {
  id: string;
  name: string;
  description: string;
  coverImage: string;
  images: string[];
  avgRatings: {
    ratingCounts: number;
    likesCounts: number;
    dislikesCounts: number;
    commentsCounts: number;
  };
  allRatings: Rating[];
};

export type Rating = {
  rating: number;
  userId: string;
  username: string;
  profileImage: string;
  timestamp: string;
  productId: string;
  like: boolean;
  dislike: boolean;
  comment: string;
};

export type ProductAttribute =
  | FlyerAttributes
  | CourierPackageAttributes
  | PlasticBagAttributes
  | PictureFrameAttributes
  | BannerAttributes
  | PaperBagAttributes
  | StickerAttributes
  | BusinessCardAttributes
  | LabelAndTagAttributes;

export type FlyerAttributes = {
  type: string;
  printSidesOption: typeof PRINT_SIDES_OPTIONS;
  sizes: PaperBasedSizeOption;
  priceRange: {
    low: { price: number; qty: number };
    high: { price: number; qty: number };
  };
  pricing: {
    oneSided: PricingOption;
    twoSided: PricingOption;
  };
};

export type StickerAttributes = {
  type: string;
  sizes: MetricBasedSizeOption;
  printAndCut: boolean;
  stickerTypes: StickerType[];
  priceRange: {
    low: { price: number; qty: number };
    high: { price: number; qty: number };
  };
  pricing: {
    vinyl: {
      designPrice: DesignPrice;
      pricePerUnit: number;
      sizePriceBias: number;
      minQty: number;
      maxQty: number;
    };
    clear: {
      designPrice: DesignPrice;
      pricePerUnit: number;
      sizePriceBias: number;
      minQty: number;
      maxQty: number;
    };
  };
};

export type LabelAndTagAttributes = {
  type: string;
  printColorOption: typeof PRINT_COLOR_OPTIONS;
  cardThickness: typeof CARD_THICKNESS_VALUES;
  printSidesOption: typeof PRINT_SIDES_OPTIONS;
  sizes: MetricBasedSizeOption;
  priceRange: {
    low: { price: number; qty: number };
    high: { price: number; qty: number };
  };
  pricing: {
    [key in keyof typeof PRINT_SIDES_OPTIONS]: {
      [key in keyof typeof CARD_THICKNESS_VALUES]: {
        designPrice: DesignPrice;
        pricePerUnit: number;
        minQty: number;
        maxQty: number;
      };
    };
  };
};

export type BusinessCardAttributes = {
  type: string;
  printColorOption: typeof PRINT_COLOR_OPTIONS;
  cardThickness: typeof CARD_THICKNESS;
  printSidesOption: typeof PRINT_SIDES_OPTIONS;
  specialFinishOption: typeof SPECIAL_FINISH_OPTIONS;
  edgeOption: typeof EDGE_OPTIONS;
  sizes: MetricBasedSizeOption;
  priceRange: {
    low: { price: number; qty: number };
    high: { price: number; qty: number };
  };
  pricing: {
    [key in keyof typeof PRINT_SIDES_OPTIONS]: {
      designPrice: DesignPrice;
      pricePerUnit: number;
      minQty: number;
      maxQty: number;
    };
  };
};

export type CourierPackageAttributes = {
  type: string;
  sizes: PaperBasedSizeOption;
  printSidesOption: typeof PRINT_SIDES_OPTIONS;
  printColorOption: typeof PRINT_COLOR_OPTIONS;
  priceRange: {
    low: { price: number; qty: number };
    high: { price: number; qty: number };
  };
  pricing: {
    [key in keyof typeof PRINT_SIDES_OPTIONS]: {
      [key in keyof typeof PRINT_COLOR_OPTIONS]: {
        designPrice: DesignPrice;
        pricePerUnit: number;
        minQty: number;
        maxQty: number;
      };
    };
  };
};

export type PaperBagAttributes = {
  type: string;
  sizes: PaperBasedSizeOption;
  printSidesOption: typeof PRINT_SIDES_OPTIONS;
  printColorOption: typeof PRINT_COLOR_OPTIONS;
  priceRange: {
    low: { price: number; qty: number };
    high: { price: number; qty: number };
  };
  pricing: {
    [key in keyof typeof PRINT_SIDES_OPTIONS]: {
      [key in (typeof AvailablePlasticBagANDPictureFrameSizes)[number]]: {
        designPrice: DesignPrice;
        pricePerUnit: number;
        minQty: number;
        maxQty: number;
      };
    };
  };
};

const AvailablePlasticBagANDPictureFrameSizes = [
  "A5",
  "A4",
  "A3",
  "A2",
] as const;

export type PlasticBagAttributes = {
  type: string;
  sizes: PaperBasedSizeOption;
  printSidesOption: typeof PRINT_SIDES_OPTIONS;
  printColorOption: typeof PRINT_COLOR_OPTIONS;
  priceRange: {
    low: { price: number; qty: number };
    high: { price: number; qty: number };
  };
  pricing: {
    [key in keyof typeof PRINT_SIDES_OPTIONS]: [
      {
        [key in (typeof AvailablePlasticBagANDPictureFrameSizes)[number]]: {
          designPrice: DesignPrice;
          pricePerUnit: number;
          minQty: number;
          maxQty: number;
        };
      },
    ];
  };
};

export type PictureFrameAttributes = {
  type: string;
  sizes: PaperBasedSizeOption;
  priceRange: {
    low: { price: number; qty: number };
    high: { price: number; qty: number };
  };
  pricing: {
    [key in (typeof AvailablePlasticBagANDPictureFrameSizes)[number]]: {
      designPrice: DesignPrice;
      pricePerUnit: number;
      minQty: number;
      maxQty: number;
    };
  };
};

export type BannerAttributes = {
  type: string;
  sizes: MetricBasedSizeOption;
  priceRange: {
    low: { price: number; qty: number };
    high: { price: number; qty: number };
  };
  pricing: {
    designPrice: DesignPrice;
    sizePriceBias: number;
    minQty: number;
    maxQty: number;
  };
};

export type StickerType = {
  name: string;
  image: string;
};

export type BoxSize = {
  name: string;
  dimension: {
    INCH: {
      w: number;
      l: number;
      h: number;
    };
    CM: {
      w: number;
      l: number;
      h: number;
    };
    MM: {
      w: number;
      l: number;
      h: number;
    };
  };
};

export type PackageTypes = {
  COURIER: {
    name: string;
    sizes: PaperBasedSizeOption;
  };
  ZIPLOC: {
    name: string;
    sizes: PaperBasedSizeOption;
  };
  CARTONBOX: {
    name: string;
    sizes: BoxSize[];
  };
  PLASTICBAG: {
    name: string;
    sizes: PaperBasedSizeOption;
  };
  PIZZABOX: {
    name: string;
    sizes: BoxSize[];
    // 10, 12, 14, 16
  };
};

export type MetricSize = {
  image: string;
  name: string;
  value: {
    [key in keyof typeof METRICS]: {
      h: number;
      w: number;
      name: key;
    };
  };
};

export type MetricBasedSizeOption = MetricSize[];

export type PaperBasedSizeOption = {
  [key in (typeof AvailablePlasticBagANDPictureFrameSizes)[number]]: {
    name: key;
    image: string;
    value: {
      [key in keyof typeof METRICS]: {
        name: key;
        w: number;
        h: number;
      };
    };
  };
};

export type DesignPrice = {
  designForMePrice: number;
  iHaveMyDesign: number;
};

export type PricingDetails = {
  designForMePrice: number;
  iHaveMyDesignPrice: number;
};

export type PricingOption = {
  designPrice: PricingDetails;
  pricePerUnit: number;
  minQty: number;
  maxQty: number;
};

export type DesignOptions = [
  
]
