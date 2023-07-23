import React from 'react';

// Icons
import Apple from '../../icons/Apple'
import SpaceX from '../../icons/SpaceX'
import Tesla from '../../icons/Tesla'
import Binance from '../../icons/Binance'

const Companies = () => {
    return (
        <div className='flex items-center justify-between overflow-x-auto'>
            <Apple />
            <SpaceX />
            <Tesla />
            <Binance />
        </div>
    );
};

export default Companies;