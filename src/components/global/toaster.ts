import { toast, type ExternalToast } from "sonner";

export const postToast = (header: string, data?: ExternalToast) => {
  toast(header, {
    ...data,
    duration: data?.duration ?? 4000,
    className: "text-sm",
  });
};
