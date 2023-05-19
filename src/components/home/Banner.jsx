import React from 'react';
import img1 from '../../assets/images/fluffy-toy-texture-close-up (1).jpg';
import img2 from '../../assets/images/toys-collection-isolated-background.jpg';
import img3 from '../../assets/images/fluffy-toy-texture-close-up.jpg'

const Banner = () => {
    return (
        <div>
            <div className="carousel my-10 w-11/12 mx-auto">
  <div id="slide1" className="carousel-item relative w-full">
                    <img src={img2} className="w-full" />
                    
    <div className="absolute h-full flex items-center justify-between transform bg bg-gradient-to-r from-indigo-800 to-transparent">
                        <h1 className='font-bold w-4/5 ml-28 text-white text-6xl'>Bringing Wildlife to Playtime!</h1>
                        
    </div>
    <div className="absolute h-full flex items-center justify-between transform left-28 top-28">
    <button className='btn btn-secondary'>Order Now</button>
                        
    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        
      <a href="#slide3" className="btn btn-circle">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full">
                    <img src={img1} className="w-full" />
                    <div className="absolute h-full flex items-center justify-between transform bg bg-gradient-to-r from-indigo-800 to-transparent">
                        <h1 className='w-1/2 text-2xl font-bold ml-28 text-white'>Welcome to our animal toy website, where imagination meets the wild! Explore a captivating collection of lifelike animal toys that will ignite the curiosity and spark endless adventures for children and animal enthusiasts alike. </h1>
                        
    </div>
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-circle">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full">
                    <img src={img3} className="w-full" />
                    <div className="absolute h-full flex items-center justify-between transform bg bg-gradient-to-r from-indigo-800 to-transparent">
                        <h1 className='font-bold w-4/5 ml-28 text-white text-6xl'>Bringing Wildlife to Playtime!</h1>
                        
    </div>
    <div className="absolute h-full flex items-center justify-between transform left-28 top-28">
    <button className='btn btn-secondary'>Order Now</button>
                        
    </div>
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" className="btn btn-circle">❮</a> 
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div> 
</div>
        </div>
    );
};

export default Banner;