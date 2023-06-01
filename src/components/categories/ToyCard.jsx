import React from 'react';
import { Link } from 'react-router-dom';

const ToyCard = ({ data }) => {
    const { _id,img,name,price,rating} = data;
    return (
        <div>
            <div className="card w-11/12 mx-auto h-[450px] bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
    <img src={img} alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
                    <h2 className="card-title">{ name}</h2>
                    <p>Price: ${ price}</p>
                    <p>Ratings: { price}</p>
    <div className="card-actions">
      <Link to={`/all-toys/${_id}`}><button className="btn btn-secondary">View Details</button></Link>
    </div>
  </div>
</div>
        </div>
    );
};

export default ToyCard;