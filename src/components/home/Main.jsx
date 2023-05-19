import React from 'react';
import Banner from './Banner';
import Brands from './Brands';
import Categories from '../categories/Categories';

const Main = () => {
    return (
        <div>
            <Banner></Banner>
            <Brands></Brands>
            <Categories></Categories>
        </div>
    );
};

export default Main;