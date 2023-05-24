import React, { useEffect, useState } from "react";
import Title from "../../../components/Title";
import MenuFood from "../../../shared/viewmenufood/MenuFood";

const OurMenu = () => {
  const menu=[];
  return (
    <div className="w-[90%] mx-auto">
      <div>
          <MenuFood catagory='popular' subHeading="---Check it Out---"  heading="Our Popular Food"  ></MenuFood>
      </div>
      <div className="mt-12 mb-8 bg-black flex justify-center items-center h-[25vh]">
            <h1 className="text-3xl text-center text-white">Call Us: +88 0192345678910</h1>
      </div>
    </div>
  );
};

export default OurMenu;
