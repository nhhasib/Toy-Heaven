import React from 'react';
import Banner from './Banner';
import Brands from './Brands';
import Categories from '../categories/Categories';
import Reviews from '../reviews/Reviews';
import TopSelling from '../topSelling/TopSelling';

const Main = () => {
    return (
        <div>
            <Banner></Banner>
            <Brands></Brands>
            <TopSelling></TopSelling>
            <Categories></Categories>
            <Reviews></Reviews>
        </div>
    );
};

export default Main;