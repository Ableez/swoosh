type ProductSchema = {
  stickers: Sticker;
  flyers: Flyer;
  labels: Label;
  paperBags: PaperBag;
  notebooks: Notebook;
  invitationCards: InvitationCard;
  businessCards: BusinessCard;
};

type ProductInfo = {
  id: string;
  name: string;
  description: string;
  coverImage: string;
  images: string[];
  allRatings: ProductRateType[];
  avgRatings: ProductAvgRatingType;
};

export type ProductRateType = {
  rating: number;
  username: string;
  profileImage: string;
  timestamp: string;
  comment: string;
  like: boolean;
  dislike: boolean;
  userId: string;
  productId: string;
};

export type ProductAvgRatingType = {
  ratingCounts: number;
  likesCounts: number;
  dislikesCounts: number;
  commentsCounts: number;
};

type QuantityOption = {
  pricePerUnit: number;
  quantity: number;
  packPrice: number;
};

type SpecialFinishOption = "Gold Foil" | "Raised Spot Gloss" | "Silver Foil";

type FinishingOption = "Matte" | "Glossy";

export type SizeOption = {
  name: string;
  image?: string;
  value: string;
};

type PrintSidesOption = "One Sided" | "Two Sided";

type CardThickness = 150 | 200 | 250 | 300;

type PrintColorOption = "One color" | "Multi color";

type DesignOptionType = {
  name: string;
  description: string;
  image: string;
};

export type StickerType = { name: string; image: string };

export type Sticker = {
  productInfo: ProductInfo;
  printAndCut: boolean;
  stickerTypes: StickerType[];
  sizeOptions: SizeOption[];
  quantityOptions: QuantityOption[];
  designOptions: DesignOptionType[];
};

type Flyer = {
  productInfo: ProductInfo;
  printSidesOption: PrintSidesOption;
  sizes: SizeOption[];
  quantityOptions: QuantityOption[];
};

type Label = {
  productInfo: ProductInfo;
  cardThickness: CardThickness;
  printSidesOption: PrintSidesOption;
  attachStrings: boolean;
  sizes: SizeOption[];
  quantityOptions: QuantityOption[];
};

type PaperBag = {
  productInfo: ProductInfo;
  printColorOption: PrintColorOption;
  sizes: SizeOption[];
  quantityOptions: QuantityOption[];
};

type Notebook = {
  productInfo: ProductInfo;
  coverType: "Spiral Notebooks" | "Hard cover journals";
  pageLayout: "Dotted" | "Lined";
  sizes: SizeOption[];
  quantityOptions: QuantityOption[];
};

type InvitationCard = {
  productInfo: ProductInfo;
  paperThickness: CardThickness;
  printSides: PrintSidesOption;
  foilPrint: SpecialFinishOption;
  finishing: FinishingOption;
  quantityOptions: QuantityOption[];
  sizes: SizeOption[];
};

type BusinessCard = {
  productInfo: ProductInfo;
  edge: "Rounded" | "Rectangular";
  specialFinish: SpecialFinishOption;
  quantityOptions: QuantityOption[];
  sizeOptions: SizeOption[];
};
