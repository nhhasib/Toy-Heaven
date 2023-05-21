import React from 'react';

const Toy = () => {
    return (
        
            <div>
      <div className="card w-[350px] h-[550px] bg-slate-50 shadow-xl">
        <figure className="px-10 pt-10">
          <img src={} alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{name}</h2>
          <p>{}</p>
          <div className="card-actions">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
        
    );
};

export default Toy;