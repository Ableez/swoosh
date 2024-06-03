import { createUploadthing, type FileRouter } from "uploadthing/next";
import { UploadThingError } from "uploadthing/server";

const f = createUploadthing();
// This code runs on your server before upload
const user = {
  id: "hhi0943jk",
  username: "Ableez",
};

const authMiddleware = async () => {
  // If you throw, the user will not be able to upload
  if (!user) throw new UploadThingError("Unauthorized");

  // Whatever is returned here is accessible in onUploadComplete as `metadata`
  return { userId: user.id };
};

// FileRouter for your app, can contain multiple FileRoutes
export const ourFileRouter = {
  pdfUploader: f({ "application/pdf": { maxFileSize: "4MB", maxFileCount: 5 } })
    .middleware(authMiddleware)
    .onUploadComplete(async ({ file, metadata }) => {
      console.log("pdf  url", file.url);

      return {
        uploadedBy: metadata.userId,
      };
    }),

  imageUploader: f({
    image: { maxFileSize: "4MB", maxFileCount: 5 },
    pdf: { maxFileSize: "4MB", maxFileCount: 5 },
    blob: { maxFileSize: "8MB", maxFileCount: 5 },
  })
    .middleware(authMiddleware)
    .onUploadComplete(async ({ metadata, file }) => {
      console.log("file url", file.url);

      return { uploadedBy: metadata.userId };
    }),
} satisfies FileRouter;

export type OurFileRouter = typeof ourFileRouter;
