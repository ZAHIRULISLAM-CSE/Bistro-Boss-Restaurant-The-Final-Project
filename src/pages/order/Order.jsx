import React, { useState } from "react";
import bg from "../../assets/menu/dessert-bg.jpeg";
import Cover from "../../shared/cover/Cover";
import 'react-tabs/style/react-tabs.css';
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import TabCard from "../../shared/tabIndexCard/TabCard";

const Order = () => {
    
    const [tabIndex, setTabIndex] = useState(0);
  return (
    <div>
      <div>
        <Cover
          img={bg}
          title="Order Now"
          subtitlte="Pick Your Favourite Food Now"
        ></Cover>
      </div>
      <div className="mt-16">
        <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
          <TabList className="flex gap-1 lg:gap-4 text-sm   lg:font-semibold lg:text-2xl  justify-center">
            <Tab>Salads</Tab>
            <Tab>Pizza</Tab>
            <Tab>Soups</Tab>
            <Tab>Desserts</Tab>
            <Tab>Drinks</Tab>
          </TabList>
          <TabPanel>
            <TabCard selectab="salad"></TabCard>
          </TabPanel>
          <TabPanel>
          <TabCard selectab="pizza"></TabCard>
          </TabPanel>
          <TabPanel>
          <TabCard selectab="soup"></TabCard>
          </TabPanel>
          <TabPanel>
          <TabCard selectab="dessert"></TabCard>
          </TabPanel>
          <TabPanel>
          <TabCard selectab="drinks"></TabCard>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default Order;
