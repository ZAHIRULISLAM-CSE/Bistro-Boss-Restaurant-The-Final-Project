import React from 'react';
import Bannar from '../Bannar/Bannar';
import FamousFood from '../famousFoodList/FamousFood';
import OurMenu from '../menu/OurMenu';
import ChefRecommand from '../recommandations/ChefRecommand';

const Home = () => {
    return (
        <div>
            <Bannar></Bannar>
            <FamousFood></FamousFood>
            <OurMenu></OurMenu>
            <ChefRecommand></ChefRecommand>
        </div>
    );
};

export default Home;