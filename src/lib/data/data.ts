import {
  type Product,
  //
  type BusinessCardAttributes,
  type FlyerAttributes,
  type LabelAndTagAttributes,
  type CourierPackageAttributes,
  type PaperBagAttributes,
  type PlasticBagAttributes,
  type StickerAttributes,
  //
  CARD_THICKNESS,
  PRINT_SIDES_OPTIONS,
  EDGE_OPTIONS,
  METRICS,
  PAPER_SIZE_FORMATS,
  PRINT_COLOR_OPTIONS,
  SPECIAL_FINISH_OPTIONS,
  type BannerAttributes,
  CARD_THICKNESS_VALUES,
} from "../types/products";

export const demoData: Product[] = [
  {
    type: "Flyer",
    productInfo: {
      id: "flyer001",
      name: "Promotional Flyer",
      description:
        "High-quality flyers for promoting your events and business.",
      coverImage: "/productImages/flyer.jpg",
      images: [
        "/productImages/flyer1.jpg",
        "/productImages/flyer2.jpg",
        "/productImages/flyer3.jpg",
        "/productImages/flyer4.jpg",
        "/productImages/flyer5.jpg",
        "/productImages/flyer6.jpg",
        "/productImages/flyer7.jpg",
      ],
      avgRatings: {
        ratingCounts: 100,
        likesCounts: 80,
        dislikesCounts: 5,
        commentsCounts: 50,
      },
      allRatings: [
        {
          rating: 5,
          userId: "user123",
          username: "JohnDoe",
          profileImage: "/productImages/commentavatar.jpg",
          timestamp: "2024-05-01T14:48:00.000Z",
          productId: "flyer001",
          like: true,
          dislike: false,
          comment: "Great quality!",
        },
        {
          rating: 4,
          userId: "user456",
          username: "JaneSmith",
          profileImage: "/productImages/commentavatar.jpg",
          timestamp: "2024-05-02T09:23:00.000Z",
          productId: "flyer001",
          like: true,
          dislike: false,
          comment: "Good, but could be cheaper.",
        },
      ],
    },
    attribute: {
      pricing: {
        oneSided: {
          designPrice: {
            designForMePrice: 1000,
            iHaveMyDesignPrice: 500,
          },
          maxQty: Infinity,
          minQty: 50,
          pricePerUnit: 120,
        },
        twoSided: {
          designPrice: {
            designForMePrice: 1200,
            iHaveMyDesignPrice: 600,
          },
          maxQty: Infinity,
          minQty: 50,
          pricePerUnit: 1,
        },
      },
      printSidesOption: PRINT_SIDES_OPTIONS,
      sizes: [
        {
          image: "",
          name: "",
          value: METRICS,
        },
        {
          image: "",
          name: "",
          value: METRICS,
        },
      ],
      type: "",
    } as FlyerAttributes,
  },
  {
    type: "Sticker",
    productInfo: {
      id: "sticker001",
      name: "Custom Sticker",
      description: "Durable vinyl stickers for various uses.",
      coverImage: "/producctImages/stickercover1.jpg",
      images: [
        "/productImages/stickercover1.jpg",
        "/productImages/stickerimage1.jpg",
        "/productImages/stickerimage2.jpg",
        "/productImages/stickerimage3.jpg",
        "/productImages/stickerimage5.jpg",
      ],
      avgRatings: {
        ratingCounts: 50,
        likesCounts: 45,
        dislikesCounts: 2,
        commentsCounts: 20,
      },
      allRatings: [
        {
          rating: 5,
          userId: "user789",
          username: "EmilyWhite",
          profileImage: "/productImages/commentavatar.jpg",
          timestamp: "2024-04-25T16:15:00.000Z",
          productId: "sticker001",
          like: true,
          dislike: false,
          comment: "Perfect for my laptop!",
        },
      ],
    },
    attribute: {
      pricing: {
        clear: {
          designPrice: {
            designForMe: 1200,
            iHaveMyDesign: 500,
          },
        },
        vinyl: {
          designPrice: {
            designForMe: 1500,
            iHaveMyDesign: 700,
          },
          maxQty: Infinity,
          minQty: 50,
          pricePerUnit: 100,
        },
      },
      printAndCut: true,
      sizes: [
        {
          image: "",
          name: "",
          value: METRICS,
        },
      ],
    } as StickerAttributes,
  },
  {
    type: "PaperBag",
    productInfo: {
      id: "paperbag001",
      name: "Eco-Friendly Paper Bag",
      description: "Recyclable paper bags for shopping and gifting.",
      coverImage: "/productImages/paperbag1.png",
      images: [
        "/productImages/paperbag1.png",
        "/productImages/paperbag2.png",
        "/productImages/paperbag3.png",
        "/productImages/paperbag4.png",
        "/productImages/paperbag5.png",
      ],
      avgRatings: {
        ratingCounts: 75,
        likesCounts: 70,
        dislikesCounts: 3,
        commentsCounts: 30,
      },
      allRatings: [
        {
          rating: 4,
          userId: "user101",
          username: "MikeJohnson",
          profileImage: "/productImages/commentavatar.jpg",
          timestamp: "2024-03-10T12:10:00.000Z",
          productId: "paperbag001",
          like: true,
          dislike: false,
          comment: "Good quality but a bit pricey.",
        },
      ],
    },
    attribute: {
      type: "PaperBag",
      printColorOption: PRINT_COLOR_OPTIONS,
      printSidesOption: PRINT_SIDES_OPTIONS,
      sizes: [
        {
          image: "",
          name: "",
          value: PAPER_SIZE_FORMATS,
        },
        {
          image: "",
          name: "",
          value: PAPER_SIZE_FORMATS,
        },
      ],
      pricing: {
        ONE_SIDED: {
          A2: {
            designPrice: {
              designForMe: 1400,
              iHaveMyDesign: 200,
            },
            maxQty: Infinity,
            minQty: 50,
            pricePerUnit: 970,
          },
          A3: {
            designPrice: {
              designForMe: 1400,
              iHaveMyDesign: 300,
            },
            maxQty: Infinity,
            minQty: 50,
            pricePerUnit: 970,
          },
          A4: {
            designPrice: {
              designForMe: 1400,
              iHaveMyDesign: 400,
            },
            maxQty: Infinity,
            minQty: 50,
            pricePerUnit: 970,
          },
          A5: {
            designPrice: {
              designForMe: 1400,
              iHaveMyDesign: 500,
            },
            maxQty: Infinity,
            minQty: 50,
            pricePerUnit: 970,
          },
        },
      },
    } as PaperBagAttributes,
  },
  {
    type: "BusinessCard",
    productInfo: {
      id: "businesscard001",
      name: "Premium Business Card",
      description: "High-quality business cards to make a lasting impression.",
      coverImage: "/productImages.jpg",
      images: ["busine.jpg", "businesscard_image2.jpg"],
      avgRatings: {
        ratingCounts: 120,
        likesCounts: 100,
        dislikesCounts: 10,
        commentsCounts: 60,
      },
      allRatings: [
        {
          rating: 5,
          userId: "user102",
          username: "AnnaTaylor",
          profileImage: "/productImages/commentavatar.jpg",
          timestamp: "2024-02-20T11:30:00.000Z",
          productId: "businesscard001",
          like: true,
          dislike: false,
          comment: "Excellent quality and design!",
        },
      ],
    },
    attribute: {
      type: "BusinessCard",
      cardThickness: CARD_THICKNESS,
      printColorOption: PRINT_COLOR_OPTIONS,
      printSidesOption: PRINT_SIDES_OPTIONS,
      edgeOption: EDGE_OPTIONS,
      sizes: [
        {
          image: "",
          name: "",
          value: METRICS,
        },
        {
          image: "",
          name: "",
          value: METRICS,
        },
        {
          image: "",
          name: "",
          value: METRICS,
        },
      ],
      pricing: {
        ONE_SIDED: {
          designPrice: {
            designForMe: 1200,
            iHaveMyDesign: 500,
          },
          maxQty: Infinity,
          minQty: 50,
          pricePerUnit: 380,
        },
        TWO_SIDED: {
          designPrice: {
            designForMe: 1600,
            iHaveMyDesign: 700,
          },
          maxQty: Infinity,
          minQty: 50,
          pricePerUnit: 850,
        },
      },
      specialFinishOption: SPECIAL_FINISH_OPTIONS,
    } as BusinessCardAttributes,
  },
  {
    type: "Label&Tag",
    productInfo: {
      id: "labeltag001",
      name: "Custom Label & Tag",
      description: "Custom labels and tags for various purposes.",
      coverImage: "labeltag_cover.jpg",
      images: ["labeltag_image1.jpg", "labeltag_image2.jpg"],
      allRatings: [
        {
          comment: "Great quality!",
          dislike: false,
          like: true,
          productId: "labeltag001",
          profileImage: "/productImages/commentavatar.jpg",
          rating: 4,
          timestamp: "2024-05-02T09:23:00.000Z",
          userId: "user456",
          username: "JaneSmith",
        },
      ],
      avgRatings: {
        commentsCounts: 10,
        dislikesCounts: 2,
        likesCounts: 5,
        ratingCounts: 15,
      },
    },
    attribute: {
      cardThickness: CARD_THICKNESS_VALUES,
      printColorOption: PRINT_COLOR_OPTIONS,
      printSidesOption: PRINT_SIDES_OPTIONS,
      sizes: [
        {
          image: "",
          name: "",
          value: PAPER_SIZE_FORMATS,
        },
      ],
      pricing: {
        ONE_SIDED: {
          LIGHT: {
            designPrice: {
              designForMe: 1000,
              iHaveMyDesign: 500,
            },
            maxQty: Infinity,
            minQty: 50,
            pricePerUnit: 50,
          },
          THICK: {
            designPrice: {
              designForMe: 1000,
              iHaveMyDesign: 500,
            },
            maxQty: Infinity,
            minQty: 50,
            pricePerUnit: 80,
          },
          SUPERTHICK: {
            designPrice: {
              designForMe: 1000,
              iHaveMyDesign: 500,
            },
            maxQty: Infinity,
            minQty: 50,
            pricePerUnit: 120,
          },
        },
        TWO_SIDED: {
          LIGHT: {
            designPrice: {
              designForMe: 1000,
              iHaveMyDesign: 500,
            },
            maxQty: Infinity,
            minQty: 50,
            pricePerUnit: 50,
          },
          THICK: {
            designPrice: {
              designForMe: 1000,
              iHaveMyDesign: 500,
            },
            maxQty: Infinity,
            minQty: 50,
            pricePerUnit: 80,
          },
          SUPERTHICK: {
            designPrice: {
              designForMe: 1000,
              iHaveMyDesign: 500,
            },
            maxQty: Infinity,
            minQty: 50,
            pricePerUnit: 120,
          },
        },
      },
    } as LabelAndTagAttributes,
  },
  {
    productInfo: {
      name: "Courier Bag",
      description: "Durable and lightweight courier bags for various purposes.",
      id: "courierbag001",
      coverImage: "courierbag_cover.jpg",
      images: ["courierbag_image1.jpg", "courierbag_image2.jpg"],
      allRatings: [
        {
          comment: "Great quality!",
          dislike: false,
          like: true,
          productId: "courierbag001",
          profileImage: "/productImages/commentavatar.jpg",
          rating: 4,
          timestamp: "",
          userId: "user456",
          username: "JaneSmith",
        },
      ],
      avgRatings: {
        commentsCounts: 10,
        dislikesCounts: 2,
        likesCounts: 5,
        ratingCounts: 15,
      },
    },
    attribute: {
      printColorOption: PRINT_COLOR_OPTIONS,
      printSidesOption: PRINT_SIDES_OPTIONS,
      sizes: [
        {
          A2: {
            image: "",
            name: "",
            value: {
              CM: {
                h: 0,
                w: 0,
                name: "CM",
              },
              INCH: {
                h: 0,
                w: 0,
                name: "INCH",
              },
              MM: {
                h: 0,
                w: 0,
                name: "MM",
              },
            },
          },
          A3: {
            image: "",
            name: "",
            value: {
              CM: {
                h: 0,
                w: 0,
                name: "CM",
              },
              INCH: {
                h: 0,
                w: 0,
                name: "INCH",
              },
              MM: {
                h: 0,
                w: 0,
                name: "MM",
              },
            },
          },
          A4: {
            image: "",
            name: "",
            value: {
              CM: {
                h: 0,
                w: 0,
                name: "CM",
              },
              INCH: {
                h: 0,
                w: 0,
                name: "INCH",
              },
              MM: {
                h: 0,
                w: 0,
                name: "MM",
              },
            },
          },
          A5: {
            image: "",
            name: "",
            value: {
              CM: {
                h: 0,
                w: 0,
                name: "CM",
              },
              INCH: {
                h: 0,
                w: 0,
                name: "INCH",
              },
              MM: {
                h: 0,
                w: 0,
                name: "MM",
              },
            },
          },
        },
      ],
      type: "CourierBag",
      pricing: {
        ONE_SIDED: {
          FULL_COLOR: {
            designPrice: {
              designForMe: 1000,
              iHaveMyDesign: 300,
            },
            maxQty: Infinity,
            minQty: 25,
            pricePerUnit: 750,
          },
          SINGLE_COLOR: {
            designPrice: {
              designForMe: 1000,
              iHaveMyDesign: 300,
            },
            maxQty: Infinity,
            minQty: 25,
            pricePerUnit: 450,
          },
        },
        TWO_SIDED: {
          FULL_COLOR: {
            designPrice: {
              designForMe: 1000,
              iHaveMyDesign: 300,
            },
            maxQty: Infinity,
            minQty: 25,
            pricePerUnit: 750,
          },
          SINGLE_COLOR: {
            designPrice: {
              designForMe: 1000,
              iHaveMyDesign: 300,
            },
            maxQty: Infinity,
            minQty: 25,
            pricePerUnit: 450,
          },
        },
      },
    } as CourierPackageAttributes,
    type: "CourierBag",
  },
  {
    productInfo: {
      name: "Plastic Bag",
      description: "Durable and lightweight plastic bags for various purposes.",
      id: "plasticbag001",
      coverImage: "plasticbag_cover.jpg",
      images: ["plasticbag_image1.jpg", "plasticbag_image2.jpg"],
      allRatings: [
        {
          comment: "Great quality!",
          dislike: false,
          like: true,
          productId: "plasticbag001",
          profileImage: "/productImages/commentavatar.jpg: ",
          rating: 4,
          timestamp: "",
          userId: "user456",
          username: "JaneSmith",
        },
      ],
      avgRatings: {
        commentsCounts: 10,
        dislikesCounts: 2,
        likesCounts: 5,
        ratingCounts: 15,
      },
    },
    attribute: {
      printColorOption: PRINT_COLOR_OPTIONS,
      printSidesOption: PRINT_SIDES_OPTIONS,
      sizes: [
        {
          A5: {
            image: "",
            name: "",
            value: {
              CM: { h: 0, w: 0, name: "CM" },
              INCH: { h: 0, w: 0, name: "INCH" },
              MM: { h: 0, w: 0, name: "MM" },
            },
          },
          A4: {
            image: "",
            name: "",
            value: {
              CM: { h: 0, w: 0, name: "CM" },
              INCH: { h: 0, w: 0, name: "INCH" },
              MM: { h: 0, w: 0, name: "MM" },
            },
          },
          A3: {
            image: "",
            name: "",
            value: {
              CM: { h: 0, w: 0, name: "CM" },
              INCH: { h: 0, w: 0, name: "INCH" },
              MM: { h: 0, w: 0, name: "MM" },
            },
          },
          A2: {
            image: "",
            name: "",
            value: {
              CM: { h: 0, w: 0, name: "CM" },
              INCH: { h: 0, w: 0, name: "INCH" },
              MM: { h: 0, w: 0, name: "MM" },
            },
          },
        },
      ],
      pricing: {
        ONE_SIDED: [
          {
            A2: {
              designPrice: {
                designForMe: 1000,
                iHaveMyDesign: 400,
              },
              maxQty: Infinity,
              minQty: 25,
              pricePerUnit: 3500,
            },
            A3: {
              designPrice: {
                designForMe: 1000,
                iHaveMyDesign: 400,
              },
              maxQty: Infinity,
              minQty: 25,
              pricePerUnit: 3500,
            },
            A4: {
              designPrice: {
                designForMe: 1000,
                iHaveMyDesign: 400,
              },
              maxQty: Infinity,
              minQty: 25,
              pricePerUnit: 3500,
            },
            A5: {
              designPrice: {
                designForMe: 1000,
                iHaveMyDesign: 400,
              },
              maxQty: Infinity,
              minQty: 25,
              pricePerUnit: 3500,
            },
          },
        ],
        TWO_SIDED: [
          {
            A2: {
              designPrice: {
                designForMe: 1000,
                iHaveMyDesign: 400,
              },
              maxQty: Infinity,
              minQty: 25,
              pricePerUnit: 3500,
            },
            A3: {
              designPrice: {
                designForMe: 1000,
                iHaveMyDesign: 400,
              },
              maxQty: Infinity,
              minQty: 25,
              pricePerUnit: 3500,
            },
            A4: {
              designPrice: {
                designForMe: 1000,
                iHaveMyDesign: 400,
              },
              maxQty: Infinity,
              minQty: 25,
              pricePerUnit: 3500,
            },
            A5: {
              designPrice: {
                designForMe: 1000,
                iHaveMyDesign: 400,
              },
              maxQty: Infinity,
              minQty: 25,
              pricePerUnit: 3500,
            },
          },
        ],
      },
    } as PlasticBagAttributes,
    type: "PlasticBag",
  },
  {
    productInfo: {
      name: "Banner",
      description: "Durable and lightweight banner for various purposes.",
      id: "banner001",
      coverImage: "banner_cover.jpg",
      images: ["banner_image1.jpg", "banner_image2.jpg"],
      allRatings: [
        {
          comment: "Great quality!",
          dislike: false,
          like: true,
          productId: "banner001",
          profileImage: "/productImages/commentavatar.jpg",
          rating: 6,
          timestamp: "",
          userId: "user456",
          username: "JaneSmith",
        },
      ],
      avgRatings: {
        commentsCounts: 10,
        dislikesCounts: 2,
        likesCounts: 5,
        ratingCounts: 15,
      },
    },
    attribute: {
      type: "Banner",
      pricing: {
        designPrice: {
          designForMe: 1000,
          iHaveMyDesign: 400,
        },
        maxQty: Infinity,
        minQty: 1,
        sizePriceBias: 1000,
      },
      sizes: [
        {
          image: "",
          name: "",
          value: {
            CM: {
              h: 0,
              w: 0,
              name: "CM",
            },
            MM: {
              h: 0,
              w: 0,
              name: "MM",
            },
            INCH: {
              h: 0,
              w: 0,
              name: "INCH",
            },
          },
        },
      ],
    } as BannerAttributes,
    type: "Banner",
  },
];

console.log(demoData.find((e) => e.type === "PaperBag"));
