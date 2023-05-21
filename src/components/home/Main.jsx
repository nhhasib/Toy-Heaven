import React from 'react';
import Banner from './Banner';
import Brands from './Brands';
import Categories from '../categories/Categories';
import Reviews from '../reviews/Reviews';

const Main = () => {
    return (
        <div>
            <Banner></Banner>
            <Brands></Brands>
            <Categories></Categories>
            <Reviews></Reviews>
        </div>
    );
};

export default Main;