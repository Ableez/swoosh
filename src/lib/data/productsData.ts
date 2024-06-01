// export const products = [
//   {
//     type: "flyer",
//     productInfo: {
//       id: "flyer",
//       name: "Flyers",
//       description: "Eye-catching custom flyers.",
//       coverImage: "/productImages/flyer6.png",
//       images: [
//         "/productImages/flyer1.jpg",
//         "/productImages/flyer2.jpg",
//         "/productImages/flyer3.jpg",
//         "/productImages/flyerlong.png",
//         "/productImages/flyer5.png",
//         "/productImages/flyer6.png",
//         "/productImages/flyer7.png",
//       ],
//       avgRatings: {
//         ratingCounts: 4.7,
//         likesCounts: 20,
//         dislikesCounts: 3,
//         commentsCounts: 14,
//       },
//       allRatings: [
//         {
//           rating: 2,
//           userId: "894934",
//           username: "Ableez",
//           profileImage: "commentavatar.jpg",
//           timestamp: "2023-06-01",
//           productId: "8923",
//           like: false,
//           dislike: true,
//           comment: "Low quality products. Fast delivery tho.",
//         },
//       ],
//     },
//     printSidesOption: "Two Sided",
//     sizes: [
//       { name: "A5", image: "a5.jpg", value: "A5" },
//       { name: "A4", image: "a4.jpg", value: "A4" },
//     ],
//     quantityOptions: [
//       { pricePerUnit: 0.2, quantity: 100, packPrice: 20 },
//       { pricePerUnit: 0.15, quantity: 500, packPrice: 75 },
//       { pricePerUnit: 0.1, quantity: 1000, packPrice: 100 },
//     ],
//     attribute: {
//       type: "flyer",
//       printSidesOption: PrintSidesOption.TwoSided,
//       sizes: [
//         { name: "A5", image: "a5.jpg", value: "A5" },
//         { name: "A4", image: "a4.jpg", value: "A4" },
//       ],
//     },
//   },

//   {
//     type: "business-card",
//     productInfo: {
//       id: "business-card",
//       name: "Business Cards",
//       description: "Professional custom business cards.",
//       coverImage: "/productImages/businesscards1.jpg",
//       images: ["/productImages/businesscards2.jpg"],
//       avgRatings: {
//         ratingCounts: 4.7,
//         likesCounts: 20,
//         dislikesCounts: 3,
//         commentsCounts: 14,
//       },
//       allRatings: [
//         {
//           rating: 2,
//           userId: "894934",
//           username: "Ableez",
//           profileImage: "commentavatar.jpg",
//           timestamp: "2023-06-01",
//           productId: "8923",
//           like: false,
//           dislike: true,
//           comment: "Low quality products. Fast delivery tho.",
//         },
//       ],
//     },
//     edge: "Rounded",
//     specialFinish: "Raised Spot Gloss",
//     quantityOptions: [
//       { pricePerUnit: 0.1, quantity: 100, packPrice: 10 },
//       { pricePerUnit: 0.08, quantity: 500, packPrice: 40 },
//       { pricePerUnit: 0.05, quantity: 1000, packPrice: 50 },
//     ],
//     sizeOptions: [
//       { name: "Standard", image: "standard.jpg", value: "Standard" },
//       { name: "Square", image: "square.jpg", value: "Square" },
//     ],
//   },
//   {
//     type: "label",
//     productInfo: {
//       id: "label",
//       name: "Labels",
//       description: "Custom labels for various purposes.",
//       coverImage: "/productImages/tags5.png",
//       images: [
//         "/productImages/tags1.png",
//         "/productImages/tags2.png",
//         "/productImages/tags3.png",
//         "/productImages/tags4.png",
//         "/productImages/tags5.png",
//         "/productImages/tags6.png",
//       ],
//       avgRatings: {
//         ratingCounts: 4.7,
//         likesCounts: 20,
//         dislikesCounts: 3,
//         commentsCounts: 14,
//       },
//       allRatings: [
//         {
//           rating: 2,
//           userId: "894934",
//           username: "Ableez",
//           profileImage: "commentavatar.jpg",
//           timestamp: "2023-06-01",
//           productId: "8923",
//           like: false,
//           dislike: true,
//           comment: "Low quality products. Fast delivery tho.",
//         },
//       ],
//     },
//     cardThickness: 200,
//     printSidesOption: "One Sided",
//     attachStrings: true,
//     sizes: [
//       { name: "Square", image: "small.jpg", value: '2" X 2"' },
//       { name: "Rectangle", image: "medium.jpg", value: "M" },
//       { name: "Circle", image: "large.jpg", value: "L" },
//     ],
//     quantityOptions: [
//       { pricePerUnit: 0.3, quantity: 100, packPrice: 30 },
//       { pricePerUnit: 0.25, quantity: 500, packPrice: 125 },
//       { pricePerUnit: 0.2, quantity: 1000, packPrice: 200 },
//     ],
//   },
//   {
//     type: "paperBag",
//     productInfo: {
//       id: "paper-bag",
//       name: "Paper Bags",
//       description: "Stylish custom paper bags.",
//       coverImage: "/productImages/paperbag4.png",
//       images: [
//         "/productImages/paperbag1.jpg",
//         "/productImages/paperbag2.jpg",
//         "/productImages/paperbag3.jpg",
//         "/productImages/paperbag4.jpg",
//         "/productImages/paperbag5.jpg",
//       ],
//       avgRatings: {
//         ratingCounts: 4.7,
//         likesCounts: 20,
//         dislikesCounts: 3,
//         commentsCounts: 14,
//       },
//       allRatings: [
//         {
//           rating: 2,
//           userId: "894934",
//           username: "Ableez",
//           profileImage: "commentavatar.jpg",
//           timestamp: "2023-06-01",
//           productId: "8923",
//           like: false,
//           dislike: true,
//           comment: "Low quality products. Fast delivery tho.",
//         },
//       ],
//     },
//     printColorOption: "Multi color",
//     sizes: [
//       { name: "Small", image: "small.jpg", value: "S" },
//       { name: "Medium", image: "medium.jpg", value: "M" },
//       { name: "Large", image: "large.jpg", value: "L" },
//     ],
//     quantityOptions: [
//       { pricePerUnit: 1.0, quantity: 50, packPrice: 50 },
//       { pricePerUnit: 0.9, quantity: 100, packPrice: 90 },
//       { pricePerUnit: 0.85, quantity: 500, packPrice: 425 },
//     ],
//   },
// ];

// const sticker = {
//   productInfo: {
//     id: "sticker",
//     name: "Stickers",
//     description: "Custom stickers for all occasions.",
//     coverImage: "/productImages/sticker1.png",
//     images: [
//       "/productImages/sticker2.png",
//       "/productImages/sticker3.png",
//       "/productImages/sticker4.png",
//     ],
//     avgRatings: {
//       ratingCounts: 4.8,
//       likesCounts: 35,
//       dislikesCounts: 1,
//       commentsCounts: 25,
//     },
//     allRatings: [
//       {
//         rating: 5,
//         userId: "123456",
//         username: "CreativeGuru",
//         profileImage: "avatar1.jpg",
//         timestamp: "2023-04-15",
//         productId: "5678",
//         like: true,
//         dislike: false,
//         comment: "Amazing quality! Perfect for my projects.",
//       },
//     ],
//   },
//   attributes: {
//     type: "sticker",
//     printAndCut: true,
//     stickerTypes: [
//       {
//         name: "Vinyl (SAV)",
//         image: "/productImages/stickercover1.jpg",
//       },
//       {
//         name: "Clear",
//         image: "/productImages/clearsticker.webp",
//       },
//     ],
//     sizeOptions: [
//       {
//         name: "Round Stickers",
//         image: "/productImages/1.5X1.5_CIRC.webp",
//         value: {
//           x: 1.5,
//           y: 1.5,
//         },
//       },
//       {
//         name: "Round Stickers",
//         image: "/productImages/3X3_CIRC.webp",
//         value: {
//           x: 3,
//           y: 3,
//         },
//       },
//       {
//         name: "Rectangular Stickers",
//         image: "/productImages/3.3X2.17_RECT.webp",
//         vaslue: '3.30" x 2.17"',
//         value: {
//           x: 3.3,
//           y: 2.17,
//         },
//       },
//       {
//         name: "Rectangular Stickers",
//         image: "/productImages/3x4_RECT.webp",
//         vaslue: "3” x 4”",
//         value: {
//           x: 3,
//           y: 4,
//         },
//       },
//       {
//         name: "Let me choose",
//         image: "/productImages/CUSTOM_STICKER_SIZE.webp",
//         vaslue: "Custom size",
//         value: {
//           x: 0,
//           y: 0,
//         },
//       },
//     ],
//     pricing: {
//       vinyl: {
//         designPrice: {
//           designForMe: 800,
//           iHaveMyDesign: 400,
//         },
//         pricePerUnit: 3.365,
//         minQty: 50,
//         maxQty: Infinity,
//       },
//       clear: {
//         designPrice: {
//           designForMe: 800,
//           iHaveMyDesign: 400,
//         },
//         pricePerUnit: 4.046,
//         minQty: 50,
//         maxQty: Infinity,
//       },
//     },
//     designOptions: [
//       {
//         name: "Design for me",
//         image: "",
//         description: "Let us create the perfect design for you.",
//       },
//       {
//         name: "I have my design",
//         image: "",
//         description: "Upload your design file (JPG, PNG, CDR, AI, PSD).",
//       },
//     ],
//   },
// };
