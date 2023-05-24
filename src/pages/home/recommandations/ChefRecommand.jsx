import React from "react";
import Title from "../../../components/Title";
import { Button, Card } from "flowbite-react";
import img1 from "../../../assets/menu/dessert-bg.jpeg";
import img2 from "../../../assets/menu/pizza-bg.jpg";
import img3 from "../../../assets/menu/soup-bg.jpg";

const ChefRecommand = () => {
  return (
    <div className="w-[90%] mx-auto">
      <div>
        <Title heading="CHEF RECOMMENDS" subHeading="---Should Try---"></Title>
      </div>
      <div>
        <div className="my-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <div className="max-w-sm">
            <Card imgSrc={img2}>
              <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Pizza
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Beatae, corporis?
              </p>
              <Button className="w-1/2 mx-auto" outline={true} gradientDuoTone="cyanToBlue">
                Add to Cart
              </Button>
            </Card>
          </div>
          <div className="max-w-sm">
            <Card imgSrc={img3}>
              <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Soup
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Beatae, corporis?
              </p>
              <Button className="w-1/2 mx-auto" outline={true} gradientDuoTone="cyanToBlue">
                Add to Cart
              </Button>
            </Card>
          </div>
          <div className="max-w-sm">
            <Card imgSrc={img3}>
              <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Soup
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Beatae, corporis?
              </p>
              <Button className="w-1/2 mx-auto" outline={true} gradientDuoTone="cyanToBlue">
                Add to Cart
              </Button>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChefRecommand;
