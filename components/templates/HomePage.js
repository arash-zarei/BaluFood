import React from 'react';

//components
import Banner from '../modules/HomePageModules/Banner';
import Attributes from '../modules/HomePageModules/Attributes';
import Definition from '../modules/HomePageModules/Definition';
import Companies from '../modules/HomePageModules/Companies';
import Instruction from '../modules/HomePageModules/Instruction';
import Guide from '../modules/HomePageModules/Guide';
import Restriction from '../modules/HomePageModules/Restriction';

const HomePage = () => {
    return (
        <div className='subContainer'>
            <Banner />
            <Attributes />
            <Definition />
            <Companies />
            <Instruction />
            <Guide />
            <Restriction />
        </div>
    );
};

export default HomePage;