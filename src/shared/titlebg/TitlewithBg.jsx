import React from "react";
import "./titlebg.css"

const TitlewithBg = ({title,text}) => {
  return (
    <div>
      <div className="bg flex text-black items-center justify-center flex-col mt-16 h-[450px]">
        <h1 className="text-3xl font-semibold mb-4">{title}</h1>
        <p className="text-center w-1/2">
          {text}
        </p>
      </div>
    </div>
  );
};

export default TitlewithBg;
