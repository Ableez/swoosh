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
  MM: { name: "MM", w: 0, h: 0 },
} as const;

export const PAPER_SIZE_FORMATS = {
  A7: { name: "A7", w: 0, h: 0 },
  A6: { name: "A6", w: 0, h: 0 },
  A5: { name: "A5", w: 0, h: 0 },
  A4: { name: "A4", w: 0, h: 0 },
  A3: { name: "A3", w: 0, h: 0 },
  A2: { name: "A2", w: 0, h: 0 },
  A1: { name: "A1", w: 0, h: 0 },
  A0: { name: "A0", w: 0, h: 0 },
} as const;

export const EDGE_OPTIONS = {
  ROUNDED: "Rounded",
  STRAIGHT: "Straight",
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
  | StickerAttributes
  | LabelAndTagAttributes
  | BusinessCardAttributes
  | CourierPackageAttributes
  | PictureFrameAttributes
  | BannerAttributes
  | PaperBagAttributes
  | PlasticBagAttributes;

export type FlyerAttributes = {
  type: string;
  printSidesOption: typeof PRINT_SIDES_OPTIONS;
  sizes: MetricBasedSizeOption[];
  pricing: {
    oneSided: PricingOption;
    twoSided: PricingOption;
  };
};

export type StickerAttributes = {
  type: string;
  sizes: MetricBasedSizeOption[];
  printAndCut: boolean;
  stickerTypes: StickerType[];
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

export const CARD_THICKNESS_VALUES = {
  LIGHT: { value: 200, metric: "GSM" },
  THICK: { value: 250, metric: "GSM" },
  SUPERTHICK: { value: 350, metric: "GSM" },
} as const;

export type LabelAndTagAttributes = {
  type: string;
  printColorOption: typeof PRINT_COLOR_OPTIONS;
  cardThickness: typeof CARD_THICKNESS_VALUES;
  printSidesOption: typeof PRINT_SIDES_OPTIONS;
  sizes: PaperBasedSizeOption[];
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
  sizes: MetricBasedSizeOption[];
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
  sizes: [
    {
      [key in keyof typeof PAPER_SIZE_FORMATS]: {
        name: string;
        image: string;
        value: typeof METRICS;
      };
    },
  ];
  printSidesOption: typeof PRINT_SIDES_OPTIONS;
  printColorOption: typeof PRINT_COLOR_OPTIONS;
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
  sizes: PaperBasedSizeOption[];
  printSidesOption: typeof PRINT_SIDES_OPTIONS;
  printColorOption: typeof PRINT_COLOR_OPTIONS;
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
  "A1",
  "A0",
] as const;

export type PlasticBagAttributes = {
  type: string;
  sizes: [
    {
      [key in keyof typeof PAPER_SIZE_FORMATS]: {
        name: string;
        image: string;
        value: typeof METRICS;
      };
    },
  ];
  printSidesOption: typeof PRINT_SIDES_OPTIONS;
  printColorOption: typeof PRINT_COLOR_OPTIONS;
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
  sizes: PaperBasedSizeOption[];
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
  sizes: MetricBasedSizeOption[];
  pricing: {
    designPrice: DesignPrice;
    sizePriceBias: number;
    minQty: number;
    maxQty: number;
  };
};

// type SizeOption = {
//   name: string;
//   image: string;
//   value: {
//     INCH: { metric: typeof METRICS; w: 4.1; h: 5.8 };
//     CM: { metric: typeof METRICS; w: 10.5; h: 14.8 };
//     MM: { metric: typeof METRICS; w: 105; h: 148 };
//   };
// };

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
    sizes: PaperBasedSizeOption[];
  };
  ZIPLOC: {
    name: string;
    sizes: PaperBasedSizeOption[];
  };
  CARTONBOX: {
    name: string;
    sizes: BoxSize[];
  };
  PLASTICBAG: {
    name: string;
    sizes: PaperBasedSizeOption[];
  };
  PIZZABOX: {
    name: string;
    sizes: BoxSize[];
    // 10, 12, 14, 16
  };
};

export type MetricBasedSizeOption = {
  name: string;
  image: string;
  value: typeof METRICS;
};

export type PaperBasedSizeOption = {
  name: string;
  image: string;
  value: typeof PAPER_SIZE_FORMATS;
};

export type DesignPrice = {
  designForMe: number;
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
