"use client";

import { useEffect, type ReactNode } from "react";
import BottomBar from "../global/bottom-bar";
import { initIDB } from "@/lib/utils/idbInit";

type Props = {
  children: ReactNode;
};

const MainLayout = ({ children }: Props) => {
  useEffect(() => {
    initIDB();
  });

  return (
    <div className="mx-auto max-w-screen-md">
      {children}
      <div className="h-24"></div>
      <BottomBar />
    </div>
  );
};

export default MainLayout;
