import React from 'react';
import Bannar from '../Bannar/Bannar';
import FamousFood from '../famousFoodList/FamousFood';
import OurMenu from '../menu/OurMenu';

const Home = () => {
    return (
        <div>
            <Bannar></Bannar>
            <FamousFood></FamousFood>
            <OurMenu></OurMenu>
        </div>
    );
};

export default Home;