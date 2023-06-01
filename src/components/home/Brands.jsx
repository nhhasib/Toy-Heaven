import React from 'react';

const Brands = () => {
    return (
        <div className='w-4/5 mx-auto'>
            <h1 className='text-4xl font-bold text-center my-8 text-indigo-800'>Our Brands</h1>
            <div className='grid  grid-cols-2 lg:grid-cols-3 gap-4'>
            <img className='rounded-xl' src="https://i0.wp.com/abctoysbd.com/wp-content/uploads/2023/04/HOT-WHEELS.jpg?w=900&ssl=1" alt="" />
            <img className='rounded-xl' src="https://i0.wp.com/abctoysbd.com/wp-content/uploads/2023/03/winfun.jpg?w=900&ssl=1" alt="" />
                <img className='rounded-xl' src="https://i0.wp.com/abctoysbd.com/wp-content/uploads/2023/03/zephyr.jpg?w=900&ssl=1" alt="" />
                <img className='rounded-xl' src="https://i0.wp.com/abctoysbd.com/wp-content/uploads/2022/11/imgpsh_fullsize_anim-2-1.jpg?w=900&ssl=1" alt="" />
                <img className='rounded-xl' src="https://i0.wp.com/abctoysbd.com/wp-content/uploads/2022/11/imgpsh_fullsize_anim-1-3.jpg?w=900&ssl=1" alt="" />
                <img className='rounded-xl' src="https://i0.wp.com/abctoysbd.com/wp-content/uploads/2023/03/funskool1.jpg?resize=1536%2C1536&ssl=1" alt="" />
        </div>
        </div>
    );
};

export default Brands;