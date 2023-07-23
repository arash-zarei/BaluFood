import React from 'react';

import Link from 'next/link';

// icons
import Location from '../../icons/Location'
import Dollar from '../../icons/Dollar'

const Card = ({ data }) => {

    const { id, name, price, details, discount } = data

    return (
        <div className='p-2 rounded-xl shadow-sm shadow-primary'>
            <div className='relative'>

            <img src={`/images/${id}.jpeg`} alt={name} className="w-full rounded-lg" />

            {discount > 0 && <span className='py-[1px] px-2 border-2 border-white bg-red-600 text-white text-xs rounded-md absolute top-2 left-2'>{discount}%</span>}

            </div>

            <div className='flex justify-between items-center my-4'>
                <p className='text-primary'>{name}</p>
                <span className='flex items-center text-[12px] text-gray-500'><Location />{details[0].Cuisine}</span>
            </div>

            {
                discount ? <span className='flex items-center mb-3 text-red-600'> <Dollar /> {(price * (100 - discount))/100}$</span> : <span className='flex items-center mb-3'> <Dollar /> {price}$</span>
            }
            
            <Link href={`/menu/${id}`} className='block text-center w-full text-white bg-primary rounded-lg'>See Details</Link>
        </div>
    );
};

export default Card;