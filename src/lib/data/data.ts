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
  PRINT_COLOR_OPTIONS,
  SPECIAL_FINISH_OPTIONS,
  type BannerAttributes,
  CARD_THICKNESS_VALUES,
} from "../types/products";

export const demoData: Product[] = [
  // PAPER
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
      priceRange: {
        low: {
          price: 7900,
          qty: 50,
        },
        high: {
          price: 999999,
          qty: 999,
        },
      },
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
            designForMePrice: 1400,
            iHaveMyDesignPrice: 600,
          },
          maxQty: Infinity,
          minQty: 50,
          pricePerUnit: 210,
        },
      },
      printSidesOption: PRINT_SIDES_OPTIONS,
      sizes: {
        A2: {
          image: "",
          name: "A2",
          value: {
            CM: {
              h: 59.4,
              w: 42.0,
              name: "CM",
            },
            MM: {
              h: 594,
              w: 420,
              name: "MM",
            },
            INCH: {
              h: 23.4,
              w: 16.5,
              name: "INCH",
            },
          },
        },
        A3: {
          image: "",
          name: "A3",
          value: {
            CM: {
              h: 42.0,
              w: 29.7,
              name: "CM",
            },
            MM: {
              h: 420,
              w: 297,
              name: "MM",
            },
            INCH: {
              h: 16.5,
              w: 11.7,
              name: "INCH",
            },
          },
        },
        A4: {
          image: "",
          name: "A4",
          value: {
            CM: {
              h: 29.7,
              w: 21.0,
              name: "CM",
            },
            MM: {
              h: 297,
              w: 210,
              name: "MM",
            },
            INCH: {
              h: 11.7,
              w: 8.3,
              name: "INCH",
            },
          },
        },
        A5: {
          image: "",
          name: "A5",
          value: {
            CM: {
              h: 21.0,
              w: 14.8,
              name: "CM",
            },
            MM: {
              h: 210,
              w: 148,
              name: "MM",
            },
            INCH: {
              h: 8.3,
              w: 5.8,
              name: "INCH",
            },
          },
        },
      },
      type: "",
    } as FlyerAttributes,
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
      priceRange: {
        low: {
          price: 7900,
          qty: 50,
        },
        high: {
          price: 999999,
          qty: 999,
        },
      },
      type: "PaperBag",
      printColorOption: PRINT_COLOR_OPTIONS,
      printSidesOption: PRINT_SIDES_OPTIONS,
      sizes: {
        A2: {
          image: "",
          name: "A2",
          value: {
            CM: {
              h: 59.4,
              w: 42.0,
              name: "CM",
            },
            MM: {
              h: 594,
              w: 420,
              name: "MM",
            },
            INCH: {
              h: 23.4,
              w: 16.5,
              name: "INCH",
            },
          },
        },
        A3: {
          image: "",
          name: "A3",
          value: {
            CM: {
              h: 42.0,
              w: 29.7,
              name: "CM",
            },
            MM: {
              h: 420,
              w: 297,
              name: "MM",
            },
            INCH: {
              h: 16.5,
              w: 11.7,
              name: "INCH",
            },
          },
        },
        A4: {
          image: "",
          name: "A4",
          value: {
            CM: {
              h: 29.7,
              w: 21.0,
              name: "CM",
            },
            MM: {
              h: 297,
              w: 210,
              name: "MM",
            },
            INCH: {
              h: 11.7,
              w: 8.3,
              name: "INCH",
            },
          },
        },
        A5: {
          image: "",
          name: "A5",
          value: {
            CM: {
              h: 21.0,
              w: 14.8,
              name: "CM",
            },
            MM: {
              h: 210,
              w: 148,
              name: "MM",
            },
            INCH: {
              h: 8.3,
              w: 5.8,
              name: "INCH",
            },
          },
        },
      },
      pricing: {
        ONE_SIDED: {
          A2: {
            designPrice: {
              designForMePrice: 1400,
              iHaveMyDesign: 200,
            },
            maxQty: Infinity,
            minQty: 50,
            pricePerUnit: 970,
          },
          A3: {
            designPrice: {
              designForMePrice: 1400,
              iHaveMyDesign: 300,
            },
            maxQty: Infinity,
            minQty: 50,
            pricePerUnit: 970,
          },
          A4: {
            designPrice: {
              designForMePrice: 1400,
              iHaveMyDesign: 400,
            },
            maxQty: Infinity,
            minQty: 50,
            pricePerUnit: 970,
          },
          A5: {
            designPrice: {
              designForMePrice: 1400,
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
      priceRange: {
        low: {
          price: 7900,
          qty: 50,
        },
        high: {
          price: 999999,
          qty: 999,
        },
      },
      printColorOption: PRINT_COLOR_OPTIONS,
      printSidesOption: PRINT_SIDES_OPTIONS,
      sizes: {
        A2: {
          image: "",
          name: "A2",
          value: {
            CM: {
              h: 59.4,
              w: 42.0,
              name: "CM",
            },
            MM: {
              h: 594,
              w: 420,
              name: "MM",
            },
            INCH: {
              h: 23.4,
              w: 16.5,
              name: "INCH",
            },
          },
        },
        A3: {
          image: "",
          name: "A3",
          value: {
            CM: {
              h: 42.0,
              w: 29.7,
              name: "CM",
            },
            MM: {
              h: 420,
              w: 297,
              name: "MM",
            },
            INCH: {
              h: 16.5,
              w: 11.7,
              name: "INCH",
            },
          },
        },
        A4: {
          image: "",
          name: "A4",
          value: {
            CM: {
              h: 29.7,
              w: 21.0,
              name: "CM",
            },
            MM: {
              h: 297,
              w: 210,
              name: "MM",
            },
            INCH: {
              h: 11.7,
              w: 8.3,
              name: "INCH",
            },
          },
        },
        A5: {
          image: "",
          name: "A5",
          value: {
            CM: {
              h: 21.0,
              w: 14.8,
              name: "CM",
            },
            MM: {
              h: 210,
              w: 148,
              name: "MM",
            },
            INCH: {
              h: 8.3,
              w: 5.8,
              name: "INCH",
            },
          },
        },
      },
      type: "CourierBag",
      pricing: {
        ONE_SIDED: {
          FULL_COLOR: {
            designPrice: {
              designForMePrice: 1000,
              iHaveMyDesign: 300,
            },
            maxQty: Infinity,
            minQty: 25,
            pricePerUnit: 750,
          },
          SINGLE_COLOR: {
            designPrice: {
              designForMePrice: 1000,
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
              designForMePrice: 1000,
              iHaveMyDesign: 300,
            },
            maxQty: Infinity,
            minQty: 25,
            pricePerUnit: 750,
          },
          SINGLE_COLOR: {
            designPrice: {
              designForMePrice: 1000,
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
      priceRange: {
        low: {
          price: 7900,
          qty: 50,
        },
        high: {
          price: 999999,
          qty: 999,
        },
      },
      printColorOption: PRINT_COLOR_OPTIONS,
      printSidesOption: PRINT_SIDES_OPTIONS,
      sizes: {
        A2: {
          image: "",
          name: "A2",
          value: {
            CM: {
              h: 59.4,
              w: 42.0,
              name: "CM",
            },
            MM: {
              h: 594,
              w: 420,
              name: "MM",
            },
            INCH: {
              h: 23.4,
              w: 16.5,
              name: "INCH",
            },
          },
        },
        A3: {
          image: "",
          name: "A3",
          value: {
            CM: {
              h: 42.0,
              w: 29.7,
              name: "CM",
            },
            MM: {
              h: 420,
              w: 297,
              name: "MM",
            },
            INCH: {
              h: 16.5,
              w: 11.7,
              name: "INCH",
            },
          },
        },
        A4: {
          image: "",
          name: "A4",
          value: {
            CM: {
              h: 29.7,
              w: 21.0,
              name: "CM",
            },
            MM: {
              h: 297,
              w: 210,
              name: "MM",
            },
            INCH: {
              h: 11.7,
              w: 8.3,
              name: "INCH",
            },
          },
        },
        A5: {
          image: "",
          name: "A5",
          value: {
            CM: {
              h: 21.0,
              w: 14.8,
              name: "CM",
            },
            MM: {
              h: 210,
              w: 148,
              name: "MM",
            },
            INCH: {
              h: 8.3,
              w: 5.8,
              name: "INCH",
            },
          },
        },
      },
      pricing: {
        ONE_SIDED: [
          {
            A2: {
              designPrice: {
                designForMePrice: 1000,
                iHaveMyDesign: 400,
              },
              maxQty: Infinity,
              minQty: 25,
              pricePerUnit: 3500,
            },
            A3: {
              designPrice: {
                designForMePrice: 1000,
                iHaveMyDesign: 400,
              },
              maxQty: Infinity,
              minQty: 25,
              pricePerUnit: 3500,
            },
            A4: {
              designPrice: {
                designForMePrice: 1000,
                iHaveMyDesign: 400,
              },
              maxQty: Infinity,
              minQty: 25,
              pricePerUnit: 3500,
            },
            A5: {
              designPrice: {
                designForMePrice: 1000,
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
                designForMePrice: 1000,
                iHaveMyDesign: 400,
              },
              maxQty: Infinity,
              minQty: 25,
              pricePerUnit: 3500,
            },
            A3: {
              designPrice: {
                designForMePrice: 1000,
                iHaveMyDesign: 400,
              },
              maxQty: Infinity,
              minQty: 25,
              pricePerUnit: 3500,
            },
            A4: {
              designPrice: {
                designForMePrice: 1000,
                iHaveMyDesign: 400,
              },
              maxQty: Infinity,
              minQty: 25,
              pricePerUnit: 3500,
            },
            A5: {
              designPrice: {
                designForMePrice: 1000,
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

  // METRIC
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
      priceRange: {
        low: {
          price: 7900,
          qty: 50,
        },
        high: {
          price: 999999,
          qty: 999,
        },
      },
      pricing: {
        clear: {
          designPrice: {
            designForMePrice: 1200,
            iHaveMyDesign: 500,
          },
          maxQty: Infinity,
          minQty: 50,
          pricePerUnit: 100,
        },
        vinyl: {
          designPrice: {
            designForMePrice: 1500,
            iHaveMyDesign: 700,
          },
          maxQty: Infinity,
          minQty: 50,
          pricePerUnit: 130,
        },
      },
      printAndCut: true,
      sizes: [
        {
          image: "/productImages/1.5X1.5_CIRC.webp",
          name: '1.5 x 1.5"',
          value: {
            CM: {
              w: 8.6,
              name: "CM",
              h: 5.08,
            },
            INCH: {
              w: 1.5,
              name: "INCH",
              h: 1.5,
            },
            MM: {
              w: 86.36,
              name: "MM",
              h: 50.8,
            },
            FT: {
              w: 86.36,
              name: "FT",
              h: 50.8,
            },
          },
        },
        {
          image: "/productImages/3X3_CIRC.webp",
          name: '3 x 3"',
          value: {
            CM: {
              w: 10.16,
              name: "CM",
              h: 13.72,
            },
            INCH: {
              w: 3,
              name: "INCH",
              h: 3,
            },
            MM: {
              w: 101.6,
              name: "MM",
              h: 137.16,
            },
          },
        },
        {
          image: "/productImages/3.3X2.17_RECT.webp",
          name: '3.3 x 2.17"',
          value: {
            CM: {
              w: 5.08,
              name: "CM",
              h: 5.08,
            },
            INCH: {
              w: 3.3,
              name: "INCH",
              h: 2.17,
            },
            MM: {
              w: 50.8,
              name: "MM",
              h: 50.8,
            },
          },
        },
        {
          image: "/productImages/3X4_RECT.webp",
          name: '3 x 4"',
          value: {
            CM: {
              w: 5.08,
              name: "CM",
              h: 5.08,
            },
            INCH: {
              w: 3,
              name: "INCH",
              h: 4,
            },
            MM: {
              w: 50.8,
              name: "MM",
              h: 50.8,
            },
          },
        },
      ],
      stickerTypes: [
        {
          image: "/productImages/vinylsticker.jpg",
          name: "Special Adhesive Vinyl",
        },
        {
          image: "/productImages/clearsticker.webp",
          name: "Clear",
        },
      ],
      type: "",
    } as StickerAttributes,
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
      priceRange: {
        low: {
          price: 7900,
          qty: 50,
        },
        high: {
          price: 999999,
          qty: 999,
        },
      },
      type: "BusinessCard",
      cardThickness: CARD_THICKNESS,
      printColorOption: PRINT_COLOR_OPTIONS,
      printSidesOption: PRINT_SIDES_OPTIONS,
      edgeOption: EDGE_OPTIONS,
      sizes: [
        {
          image: "",
          name: "3.4X2",
          value: {
            CM: {
              w: 8.6,
              name: "CM",
              h: 5.08,
            },
            INCH: {
              w: 3.4,
              name: "INCH",
              h: 2,
            },
            MM: {
              w: 86.36,
              name: "MM",
              h: 50.8,
            },
            FT: {
              w: 86.36,
              name: "FT",
              h: 50.8,
            },
          },
        },
        {
          image: "",
          name: "2X2",
          value: {
            CM: {
              w: 5.08,
              name: "CM",
              h: 5.08,
            },
            INCH: {
              w: 2,
              name: "INCH",
              h: 2,
            },
            MM: {
              w: 50.8,
              name: "MM",
              h: 50.8,
            },
          },
        },
        {
          image: "",
          name: "4X5.4",
          value: {
            CM: {
              w: 10.16,
              name: "CM",
              h: 13.72,
            },
            INCH: {
              w: 4,
              name: "INCH",
              h: 5.4,
            },
            MM: {
              w: 101.6,
              name: "MM",
              h: 137.16,
            },
          },
        },
      ],
      pricing: {
        ONE_SIDED: {
          designPrice: {
            designForMePrice: 1200,
            iHaveMyDesign: 500,
          },
          maxQty: Infinity,
          minQty: 50,
          pricePerUnit: 380,
        },
        TWO_SIDED: {
          designPrice: {
            designForMePrice: 1600,
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
      priceRange: {
        low: {
          price: 7900,
          qty: 50,
        },
        high: {
          price: 999999,
          qty: 999,
        },
      },
      cardThickness: CARD_THICKNESS_VALUES,
      printColorOption: PRINT_COLOR_OPTIONS,
      printSidesOption: PRINT_SIDES_OPTIONS,
      sizes: [
        {
          image: "",
          name: "3.4X2",
          value: {
            CM: {
              w: 8.6,
              name: "CM",
              h: 5.08,
            },
            INCH: {
              w: 3.4,
              name: "INCH",
              h: 2,
            },
            MM: {
              w: 86.36,
              name: "MM",
              h: 50.8,
            },
            FT: {
              w: 86.36,
              name: "FT",
              h: 50.8,
            },
          },
        },
        {
          image: "",
          name: "2X2",
          value: {
            CM: {
              w: 5.08,
              name: "CM",
              h: 5.08,
            },
            INCH: {
              w: 2,
              name: "INCH",
              h: 2,
            },
            MM: {
              w: 50.8,
              name: "MM",
              h: 50.8,
            },
          },
        },
        {
          image: "",
          name: "4X5.4",
          value: {
            CM: {
              w: 10.16,
              name: "CM",
              h: 13.72,
            },
            INCH: {
              w: 4,
              name: "INCH",
              h: 5.4,
            },
            MM: {
              w: 101.6,
              name: "MM",
              h: 137.16,
            },
          },
        },
      ],
      pricing: {
        ONE_SIDED: {
          LIGHT: {
            designPrice: {
              designForMePrice: 1000,
              iHaveMyDesign: 500,
            },
            maxQty: Infinity,
            minQty: 50,
            pricePerUnit: 50,
          },
          THICK: {
            designPrice: {
              designForMePrice: 1000,
              iHaveMyDesign: 500,
            },
            maxQty: Infinity,
            minQty: 50,
            pricePerUnit: 80,
          },
          SUPERTHICK: {
            designPrice: {
              designForMePrice: 1000,
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
              designForMePrice: 1000,
              iHaveMyDesign: 500,
            },
            maxQty: Infinity,
            minQty: 50,
            pricePerUnit: 50,
          },
          THICK: {
            designPrice: {
              designForMePrice: 1000,
              iHaveMyDesign: 500,
            },
            maxQty: Infinity,
            minQty: 50,
            pricePerUnit: 80,
          },
          SUPERTHICK: {
            designPrice: {
              designForMePrice: 1000,
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
      priceRange: {
        low: {
          price: 7900,
          qty: 50,
        },
        high: {
          price: 999999,
          qty: 999,
        },
      },
      type: "Banner",
      pricing: {
        designPrice: {
          designForMePrice: 1000,
          iHaveMyDesign: 400,
        },
        maxQty: Infinity,
        minQty: 1,
        sizePriceBias: 1000,
      },
      sizes: [
        {
          image: "",
          name: "3.4X2",
          value: {
            CM: {
              w: 8.6,
              name: "CM",
              h: 5.08,
            },
            INCH: {
              w: 3.4,
              name: "INCH",
              h: 2,
            },
            MM: {
              w: 86.36,
              name: "MM",
              h: 50.8,
            },
          },
        },
        {
          image: "",
          name: "2X2",
          value: {
            CM: {
              w: 5.08,
              name: "CM",
              h: 5.08,
            },
            INCH: {
              w: 2,
              name: "INCH",
              h: 2,
            },
            MM: {
              w: 50.8,
              name: "MM",
              h: 50.8,
            },
            FT: {
              w: 50.8,
              name: "FT",
              h: 50.8,
            },
          },
        },
        {
          image: "",
          name: "4X5.4",
          value: {
            CM: {
              w: 10.16,
              name: "CM",
              h: 13.72,
            },
            INCH: {
              w: 4,
              name: "INCH",
              h: 5.4,
            },
            MM: {
              w: 101.6,
              name: "MM",
              h: 137.16,
            },
          },
        },
      ],
    } as BannerAttributes,
    type: "Banner",
  },
];

// function extractFields(obj: Product) {
//   const results = [];

//   function traverse(currentObj: Product) {
//     if (typeof currentObj !== "object" || currentObj === null) return;

//     if ("pricing" in currentObj.attribute) {
//       const pricing = currentObj.attribute.pricing;
//       for (const key in pricing) {
//         const pricingDetails = pricing[key];
//         if ("designPrice" in pricingDetails) {
//           const { designForMePrice } = pricingDetails.designPrice;

//           results.push({
//             designForMePrice: designForMePrice,
//             minQty: pricingDetails.minQty,
//             pricePerUnit: pricingDetails.pricePerUnit,
//           });
//         } else {
//           for (const subKey in pricingDetails) {
//             const subPricingDetails = pricingDetails[subKey];

//             if ("designPrice" in subPricingDetails) {
//               const { designForMe } = subPricingDetails.designPrice;
//               if (
//                 designForMe &&
//                 subPricingDetails.minQty &&
//                 subPricingDetails.pricePerUnit
//               ) {
//                 results.push({
//                   designForMePrice: designForMe,
//                   minQty: subPricingDetails.minQty,
//                   pricePerUnit: subPricingDetails.pricePerUnit,
//                 });
//               }
//             }
//           }
//         }
//       }
//     }

//     // Continue to traverse deeper into the object
//     for (const key in currentObj) {
//       if (typeof currentObj[key] === "object") {
//         traverse(currentObj[key]);
//       }
//     }
//   }

//   traverse(obj);
//   return results;
// }

// console.log("EXT PRD:", extractFields(demoData[1]));
