import HomeNavbar from "@/components/homepage/navbar";
import OffersComponent from "@/components/homepage/offers";
import PrintCategory from "@/components/homepage/print-category";
import React from "react";

const Home = () => {
  return (
    <div>
      <HomeNavbar />
      <OffersComponent />
      <PrintCategory />
    </div>
  );
};

export default Home;
