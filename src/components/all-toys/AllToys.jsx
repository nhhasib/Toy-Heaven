import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Toy from '../toy/Toy';

const AllToys = () => {
    const toys = useLoaderData();

    return (
        <div className='grid grid-cols-3 w-11/12 mx-auto gap-4 my-8'>
            {toys.map(toy=><Toy key={toy.id} toy={toy}></Toy>)}
        </div>
    );
};

export default AllToys;