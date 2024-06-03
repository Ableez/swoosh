"use client";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";

const OrderPage = () => {
  const router = useRouter();
  return (
    <div>
      <div className="flex place-items-center justify-end p-4 align-middle">
        <Button onClick={() => router.back()} variant={"ghost"} size={"icon"}>
          <X />
        </Button>
      </div>
    </div>
  );
};

export default OrderPage;
