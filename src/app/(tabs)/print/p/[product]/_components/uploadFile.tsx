import { UploadButton } from "@/components/global/uploadthing";
import React from "react";

// upload specific file types
// upload upto 5 files
// display uploaded files names or picture
// save it to overall order data

const UploadFile = () => {
  return (
    <div className="m-4 rounded-2xl">
      <UploadButton
        className="ut-button:bg-primary/5 ut-button:text-red-700 ut-button:w-full ut-button:h-full ut-upload-icon:block ut-button:ring-red-300 ut-button:p-4 ut-button:ring-2 ut-button:ring-primary/10 hover:ut-button:bg-primary/20 ut-uploading:ut-button:after:bg-primary/90 ut-uploading:ut-button:text-black w-full"
        endpoint="imageUploader"
        onClientUploadComplete={(res) => {
          // Do something with the response
          console.log("Files: ", res);
          alert("Upload Completed");
        }}
        onUploadError={(error: Error) => {
          // Do something with the error.
          alert(`ERROR! ${error.message}`);
        }}
        appearance={
          {
            //   allowedContent: "hidden",
          }
        }
      />
    </div>
  );
};

export default UploadFile;
