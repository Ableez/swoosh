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
  avgRatings: {
    ratingCounts: number;
    likesCounts: number;
    dislikesCounts: number;
    commentCounts: string;
  };
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

export type Sticker = {
  productInfo: ProductInfo;
  printAndCut: boolean;
  stickerTypes: StickerType;
  sizeOptions: SizeOption[];
  quantityOptions: QuantityOption[];
  designOption: DesignOptionType[];
};

type DesignOptionType = {
  name: string;
  description: string;
  image: string;
};

export type StickerType = { name: string; image: string };

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

export const products = [
  {
    type: "sticker",
    productInfo: {
      id: "1",
      name: "Stickers",
      description:
        "High-quality custom stickers. High-quality custom stickers.High-quality custom stickers. High-quality custom stickers.",
      coverImage: "/productImages/stickerimage1.jpg",
      images: [
        "/productImages/stickerimage1.jpg",
        "/productImages/stickerimage2.jpg",
        "/productImages/stickerimage3.jpg",
        "/productImages/stickerimage5.jpg",
        "/productImages/stickerbooks.webp",
      ],
      avgRatings: {
        ratingCounts: 4.7,
        likesCounts: 20,
        dislikesCounts: 3,
        commentsCounts: 14,
      },
      allRatings: [
        {
          rating: 2,
          username: "Ableez",
          profileImage: "commentavatar.jpg",
          timestamp: "2023-06-01",
          comment:
            "Low quality products. Fast delivery tho. Low quality products. Fast delivery tho.Low quality products.",
          like: false,
          dislike: true,
          userId: "894934",
          productId: "8923",
        },
      ],
    },
    printAndCut: true,
    stickerTypes: [
      {
        name: "SAV",
        image: "sav.jpg",
      },
      {
        name: "Clear",
        image: "clear.jpg",
      },
    ],
    sizeOptions: [
      {
        name: "Round Stickers",
        image: "/productImages/1.5X1.5_CIRC.webp",
        value: '1.5"',
      },
      {
        name: "Round Stickers",
        image: "/productImages/3X3_CIRC.webp",
        value: '3"',
      },
      {
        name: "Rectangular Stickers",
        image: "/productImages/3.3X2.17_RECT.webp",
        value: '3.30" x 2.17"',
      },
      {
        name: "Rectangular Stickers",
        image: "/productImages/3x4_RECT.webp",
        value: "3” x 4”",
      },
      {
        name: "Let me choose",
        image: "/productImages/CUSTOM_STICKER_SIZE.webp",
        value: "Custom size",
      },
    ],
    quantityOptions: [
      { pricePerUnit: 1.5, quantity: 100, packPrice: 100 },
      { pricePerUnit: 1.0, quantity: 500, packPrice: 500 },
      { pricePerUnit: 0.5, quantity: 1000, packPrice: 1000 },
    ],
  },
  {
    type: "flyer",
    productInfo: {
      avgRatings: {
        ratingCounts: 4.7,
        likesCounts: 20,
        dislikesCounts: 3,
        commentsCounts: 14,
      },
      allRatings: [
        {
          rating: 2,
          userId: "894934",
          username: "Ableez",
          profileImage: "commentavatar.jpg",
          timestamp: "2023-06-01",
          productId: "8923",
          like: false,
          dislike: true,
          comment:
            "Low quality products. Fast delivery tho. Low quality products. Fast delivery tho.Low quality products.",
        },
      ],
      id: "2",
      name: "Flyers",
      description: "Eye-catching custom flyers.",
      coverImage: "/productImages/flyer6.png",
      images: [
        "/productImages/flyer1.jpg",
        "/productImages/flyer2.jpg",
        "/productImages/flyer3.jpg",
        "/productImages/flyerlong.png",
        "/productImages/flyer5.png",
        "/productImages/flyer6.png",
        "/productImages/flyer7.png",
      ],
    },
    printSidesOption: "Two Sided",
    sizes: [
      { name: "A5", image: "a5.jpg", value: "A5" },
      { name: "A4", image: "a4.jpg", value: "A4" },
    ],
    quantityOptions: [
      { pricePerUnit: 0.2, quantity: 100, packPrice: 20 },
      { pricePerUnit: 0.15, quantity: 500, packPrice: 75 },
      { pricePerUnit: 0.1, quantity: 1000, packPrice: 100 },
    ],
  },
  {
    type: "businessCard",
    productInfo: {
      avgRatings: {
        ratingCounts: 4.7,
        likesCounts: 20,
        dislikesCounts: 3,
        commentsCounts: 14,
      },
      allRatings: [
        {
          rating: 2,
          userId: "894934",
          username: "Ableez",
          profileImage: "commentavatar.jpg",
          timestamp: "2023-06-01",
          productId: "8923",
          like: false,
          dislike: true,
          comment:
            "Low quality products. Fast delivery tho. Low quality products. Fast delivery tho.Low quality products.",
        },
      ],
      id: "7",
      name: "Business Cards",
      description: "Professional custom business cards.",
      coverImage: "/productImages/businesscards1.jpg",
      images: ["/productImages/businesscards2.jpg"],
    },
    edge: "Rounded",
    specialFinish: "Raised Spot Gloss",
    quantityOptions: [
      { pricePerUnit: 0.1, quantity: 100, packPrice: 10 },
      { pricePerUnit: 0.08, quantity: 500, packPrice: 40 },
      { pricePerUnit: 0.05, quantity: 1000, packPrice: 50 },
    ],
    sizeOptions: [
      { name: "Standard", image: "standard.jpg", value: "Standard" },
      { name: "Square", image: "square.jpg", value: "Square" },
    ],
  },
  {
    type: "packaging",
    productInfo: {
      avgRatings: {
        ratingCounts: 4.7,
        likesCounts: 20,
        dislikesCounts: 3,
        commentsCounts: 14,
      },
      allRatings: [
        {
          rating: 2,
          userId: "894934",
          username: "Ableez",
          profileImage: "commentavatar.jpg",
          timestamp: "2023-06-01",
          productId: "8923",
          like: false,
          dislike: true,
          comment:
            "Low quality products. Fast delivery tho. Low quality products. Fast delivery tho.Low quality products.",
        },
      ],
      id: "273",
      name: "Product Packaging",
      description: "Customized product packaging for your brand.",
      coverImage: "/productImages/package1.jpg",
      images: [
        "/productImages/paperbag1.jpg",
        "/productImages/paperbag2.jpg",
        "/productImages/paperbag3.png",
        "/productImages/paperbag4.JPG",
        "/productImages/paperbag5.jpg",
        "/productImages/paperbag6.jpg",
        "/productImages/paperbag7.jpg",
        "/productImages/paperbag8.png",
        "/productImages/paperbag9.png",
        "/productImages/paperbag10.png",
      ],
    },
    cardThickness: 200,
    printSidesOption: "One Sided",
    attachStrings: true,
    sizes: [
      { name: "Square", image: "small.jpg", value: '2" X 2"' },
      { name: "Rectangle", image: "medium.jpg", value: "M" },
      { name: "Circle", image: "large.jpg", value: "L" },
    ],
    quantityOptions: [
      { pricePerUnit: 0.3, quantity: 100, packPrice: 30 },
      { pricePerUnit: 0.25, quantity: 500, packPrice: 125 },
      { pricePerUnit: 0.2, quantity: 1000, packPrice: 200 },
    ],
  },
  {
    type: "label",
    productInfo: {
      avgRatings: {
        ratingCounts: 4.7,
        likesCounts: 20,
        dislikesCounts: 3,
        commentsCounts: 14,
      },
      allRatings: [
        {
          rating: 2,
          userId: "894934",
          username: "Ableez",
          profileImage: "commentavatar.jpg",
          timestamp: "2023-06-01",
          productId: "8923",
          like: false,
          dislike: true,
          comment:
            "Low quality products. Fast delivery tho. Low quality products. Fast delivery tho.Low quality products.",
        },
      ],
      id: "3",
      name: "Labels",
      description: "Custom labels for various purposes.",
      coverImage: "/productImages/tags5.png",
      images: [
        "/productImages/tags1.png",
        "/productImages/tags2.png",
        "/productImages/tags3.png",
        "/productImages/tags4.png",
        "/productImages/tags5.png",
        "/productImages/tags6.png",
      ],
    },
    cardThickness: 200,
    printSidesOption: "One Sided",
    attachStrings: true,
    sizes: [
      { name: "Square", image: "small.jpg", value: '2" X 2"' },
      { name: "Rectangle", image: "medium.jpg", value: "M" },
      { name: "Circle", image: "large.jpg", value: "L" },
    ],
    quantityOptions: [
      { pricePerUnit: 0.3, quantity: 100, packPrice: 30 },
      { pricePerUnit: 0.25, quantity: 500, packPrice: 125 },
      { pricePerUnit: 0.2, quantity: 1000, packPrice: 200 },
    ],
  },
  {
    type: "paperBag",
    productInfo: {
      avgRatings: {
        ratingCounts: 4.7,
        likesCounts: 20,
        dislikesCounts: 3,
        commentsCounts: 14,
      },
      allRatings: [
        {
          rating: 2,
          userId: "894934",
          username: "Ableez",
          profileImage: "commentavatar.jpg",
          timestamp: "2023-06-01",
          productId: "8923",
          like: false,
          dislike: true,
          comment:
            "Low quality products. Fast delivery tho. Low quality products. Fast delivery tho.Low quality products.",
        },
      ],
      id: "4",
      name: "Paper Bags",
      description: "Stylish custom paper bags.",
      coverImage: "/productImages/paperbag4.png",
      images: [
        "/productImages/paperbag1.jpg",
        "/productImages/paperbag2.jpg",
        "/productImages/paperbag3.jpg",
        "/productImages/paperbag4.jpg",
        "/productImages/paperbag5.jpg",
      ],
    },
    printColorOption: "Multi color",
    sizes: [
      { name: "Small", image: "small.jpg", value: "S" },
      { name: "Medium", image: "medium.jpg", value: "M" },
      { name: "Large", image: "large.jpg", value: "L" },
    ],
    quantityOptions: [
      { pricePerUnit: 0.5, quantity: 100, packPrice: 50 },
      { pricePerUnit: 0.4, quantity: 500, packPrice: 200 },
      { pricePerUnit: 0.35, quantity: 1000, packPrice: 350 },
    ],
  },
  {
    type: "notebook",
    productInfo: {
      avgRatings: {
        ratingCounts: 4.7,
        likesCounts: 20,
        dislikesCounts: 3,
        commentsCounts: 14,
      },
      allRatings: [
        {
          rating: 2,
          userId: "894934",
          username: "Ableez",
          profileImage: "commentavatar.jpg",
          timestamp: "2023-06-01",
          productId: "8923",
          like: false,
          dislike: true,
          comment:
            "Low quality products. Fast delivery tho. Low quality products. Fast delivery tho.Low quality products.",
        },
      ],
      id: "5",
      name: "Notebooks",
      description: "Personalized notebooks for your ideas.",
      coverImage: "/productImages/notebook1.jpg",
      images: [
        "/productImages/notebook1.jpg",
        "/productImages/notebook2.jpg",
        "/productImages/notebook3.webp",
        "/productImages/notebook4.webp",
        "/productImages/notebook5.webp",
      ],
    },
    coverType: "Spiral Notebooks",
    pageLayout: "Dotted",
    sizes: [
      { name: "Small", image: "small.jpg", value: "S" },
      { name: "Medium", image: "medium.jpg", value: "M" },
      { name: "Large", image: "large.jpg", value: "L" },
    ],
    quantityOptions: [
      { pricePerUnit: 3.0, quantity: 50, packPrice: 150 },
      { pricePerUnit: 2.5, quantity: 100, packPrice: 250 },
      { pricePerUnit: 2.0, quantity: 200, packPrice: 400 },
    ],
  },
  {
    type: "invitationCard",
    productInfo: {
      avgRatings: {
        ratingCounts: 4.7,
        likesCounts: 20,
        dislikesCounts: 3,
        commentsCounts: 14,
      },
      allRatings: [
        {
          rating: 2,
          userId: "894934",
          username: "Ableez",
          profileImage: "commentavatar.jpg",
          timestamp: "2023-06-01",
          productId: "8923",
          like: false,
          dislike: true,
          comment:
            "Low quality products. Fast delivery tho. Low quality products. Fast delivery tho.Low quality products.",
        },
      ],
      id: "6",
      name: "Invitation Cards",
      description: "Elegant custom invitation cards for special occasions.",
      coverImage: "/productImages/invite2.jpg",
      images: ["/productImages/invite2.jpg", "/productImages/invite3.jpg"],
    },
    paperThickness: 300,
    printSides: "One Sided",
    foilPrint: "Gold Foil",
    finishing: "Matte",
    quantityOptions: [
      { pricePerUnit: 1.0, quantity: 50, packPrice: 50 },
      { pricePerUnit: 0.8, quantity: 100, packPrice: 80 },
      { pricePerUnit: 0.6, quantity: 200, packPrice: 120 },
    ],
    sizes: [
      { name: "Small", image: "small.jpg", value: "S" },
      { name: "Medium", image: "medium.jpg", value: "M" },
      { name: "Large", image: "large.jpg", value: "L" },
    ],
  },
];

export const stickerSchema = {
  type: "sticker",
  productInfo: {
    id: "sticker",
    name: "Stickers",
    description:
      "High-quality custom stickers. High-quality custom stickers.High-quality custom stickers. High-quality custom stickers.",
    coverImage: "/productImages/stickerimage1.jpg",
    images: [
      "/productImages/stickerimage1.jpg",
      "/productImages/stickerimage2.jpg",
      "/productImages/stickerimage3.jpg",
      "/productImages/stickerimage5.jpg",
      "/productImages/stickerbooks.webp",
    ],
    avgRatings: {
      ratingCounts: 4.7,
      likesCounts: 20,
      dislikesCounts: 3,
      commentsCounts: 14,
    },
    allRatings: [
      {
        rating: 2,
        userId: "894934",
        username: "Ableez",
        profileImage: "commentavatar.jpg",
        timestamp: "2023-06-01",
        productId: "8923",
        like: false,
        dislike: true,
        comment:
          "Low quality products. Fast delivery tho. Low quality products. Fast delivery tho.Low quality products.",
      },
    ],
  },
  printAndCut: true,
  stickerTypes: [
    {
      name: "Self Adhesive Vinyl (SAV)",
      image: "/productImages/stickercover1.jpg",
    },
    {
      name: "Clear Sticker (Transparent)",
      image: "/productImages/clearsticker.webp",
    },
  ],
  sizeOptions: [
    {
      name: "Round Stickers",
      image: "/productImages/1.5X1.5_CIRC.webp",
      value: '1.5"',
    },
    {
      name: "Round Stickers",
      image: "/productImages/3X3_CIRC.webp",
      value: '3"',
    },
    {
      name: "Rectangular Stickers",
      image: "/productImages/3.3X2.17_RECT.webp",
      value: '3.30" x 2.17"',
    },
    {
      name: "Rectangular Stickers",
      image: "/productImages/3x4_RECT.webp",
      value: "3” x 4”",
    },
    {
      name: "Let me choose",
      image: "/productImages/CUSTOM_STICKER_SIZE.webp",
      value: "Custom size",
    },
  ],
  quantityOptions: [
    { pricePerUnit: 1.5, quantity: 100, packPrice: 100 },
    { pricePerUnit: 1.0, quantity: 500, packPrice: 500 },
    { pricePerUnit: 0.5, quantity: 1000, packPrice: 1000 },
  ],
  designOption: [
    {
      name: "Design for me",
      image: "",
      description: "Let us create the perfect design for you.",
    },
    {
      name: "I have my design",
      image: "",
      description: "Upload your design file (JPG, PNG, CDR, AI, PSD).",
    },
  ],
};
