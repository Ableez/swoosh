"use client";

import { type ReactNode } from "react";
import BottomBar from "../global/bottom-bar";

type Props = {
  children: ReactNode;
};

const MainLayout = ({ children }: Props) => {
  // useEffect(() => {
  //   if ("serviceWorker" in navigator) {
  //     void navigator.serviceWorker.register("/sw.js");
  //   }
  // }, []);
  return (
    <div>
      {children}
      <div className="h-24"></div>
      <BottomBar />
    </div>
  );
};

export default MainLayout;
