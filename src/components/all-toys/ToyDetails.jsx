import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ToyDetails = () => {
    const toy = useLoaderData();
    console.log(toy.name)
    const {img,name,seller_name,seller_email,price,rating,quantity,description} = toy;
    return (
        <div className=''>
            <div className="card mx-auto my-10 w-[600px] bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
    <img src={img} alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
                    <h2 className="card-title">{ name}</h2>
                    <p>Seller Name: {seller_name }</p>
                    <p>Seller Email: {seller_email }</p>
                    <p>Price: ${price }</p>
                    <p>Ratings: {rating }</p>
                    <p>Available Quantity: {quantity }</p>
                    <p> {description }</p>
    <div className="card-actions">
      <button className="btn btn-secondary">Buy Now</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default ToyDetails;