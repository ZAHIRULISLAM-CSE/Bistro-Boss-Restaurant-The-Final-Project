import React, { useEffect, useState } from "react";
import Title from "../../../components/Title";

const OurMenu = () => {
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    fetch("menu.json")
      .then((res) => res.json())
      .then((data) => {
        const sliceData = data.slice(0, 8);
        setMenu(sliceData);
      });
  }, []);
  console.log(menu);
  return (
    <div className="w-[90%] mx-auto">
      <div>
        <Title heading="FROM OUR MENU" subHeading="---Check it out---"></Title>
      </div>
      <div className="grid mt-16 gap-8 md:grid-cols-2">
        {menu.map((item) => (
          <div key={item._id}>
            <div className="flex gap-6">
              <div>
                <img style={{borderRadius:'0px 200px 200px 200px'}} className=" w-[120px]  " src={item.image} alt="" />
              </div>
              <div>
                <h1 className="mb-2 text-xl font-semibold">{item.name}</h1>
                <p>{item.recipe}</p>
              </div>
              <div>
                <p className="text-orange-600">{item.price}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-12 mb-8 bg-black flex justify-center items-center h-[25vh]">
            <h1 className="text-3xl text-white">Call Us: +88 0192345678910</h1>
      </div>
    </div>
  );
};

export default OurMenu;
