import React from "react";
import Cover from "../../shared/cover/Cover";
import menubg from "../../assets/menu/banner3.jpg";
import MenuFood from "../../shared/viewmenufood/MenuFood";
import TitlewithBg from "../../shared/titlebg/TitlewithBg";

const Menu = () => {
  return (
    <section>
      <div>
        <Cover
          img={menubg}
          title="OUR MENU"
          subtitlte="Would You Like to Try a Dish?"
        ></Cover>
      </div>
      <div>
        <MenuFood
          catagory="offered"
          heading="TODAY'S OFFER"
          subHeading="---Don't miss---"
        ></MenuFood>
      </div>
      <div className="text-center">
        <button class="relative inline-flexitems-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800">
          <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
            Order Now
          </span>
        </button>
      </div>
      <div>
        <TitlewithBg
          title="DESSERTS"
          text="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        ></TitlewithBg>
        <MenuFood catagory="dessert"></MenuFood>
      </div>
      <div className="text-center">
        <button class="relative inline-flexitems-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800">
          <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
            Order Now
          </span>
        </button>
      </div>
      <div>
        <TitlewithBg
          title="Pizzas"
          text="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        ></TitlewithBg>
        <MenuFood catagory="pizza"></MenuFood>
      </div>
      <div className="text-center">
        <button class="relative inline-flexitems-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800">
          <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
            Order Now
          </span>
        </button>
      </div>
      <div>
        <TitlewithBg
          title="Salads"
          text="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        ></TitlewithBg>
        <MenuFood catagory="salad"></MenuFood>
      </div>
      <div className="text-center">
        <button class="relative inline-flexitems-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800">
          <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
            Order Now
          </span>
        </button>
      </div>
      <div>
        <TitlewithBg
          title="Soups"
          text="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        ></TitlewithBg>
        <MenuFood catagory="soup"></MenuFood>
      </div>
      <div className="text-center">
        <button class="relative inline-flexitems-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800">
          <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
            Order Now
          </span>
        </button>
      </div>
    </section>
  );
};

export default Menu;
