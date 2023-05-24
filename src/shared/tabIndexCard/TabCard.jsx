import React, { useEffect, useState } from "react";

const TabCard = ({ selectab }) => {
  const [menu, setMenu] = useState([]);
  const [catagory, setCatagory] = useState(selectab);
  useEffect(() => {
    fetch("menu.json")
      .then((res) => res.json())
      .then((data) => {
        const showData = data.filter((item) => item.category == catagory);
        setMenu(showData);
      });
  }, []);
  console.log(menu);
  return (
    <div className="w-[90%] mt-16 mb-16 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
      {menu.map((item) => (
        <div  key={item._id} className="">
          <div
            className="max-w-sm  bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
          >
            <img className="rounded-t-lg  h-[270px] " src={item.image} alt="" />
            <div className="p-5">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {item.name}
              </h5>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                { item.recipe.length>70?item.recipe.slice(0,80)+"...":item.recipe
                }
              </p>
              <a className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Add To Cart
                <svg
                  aria-hidden="true"
                  className="w-4 h-4 ml-2 -mr-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TabCard;
