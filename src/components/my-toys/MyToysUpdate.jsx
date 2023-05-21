import React from 'react';
import { useLoaderData } from 'react-router-dom';

const MyToysUpdate = () => {
    const toy = useLoaderData();
    const {name,_id} = toy;
console.log(toy)
    const handleUpdatetoDB = event => {
        event.preventDefault();
        const form = event.target;
        const price = form.price.value;
        const quantity = form.quantity.value;
        const description = form.description.value;
        
        const UpdatedProduct = {   price,  quantity, description };

        fetch(`http://localhost:5000/all-toys/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type':'application/json'
            },
            body:JSON.stringify(UpdatedProduct)
        })
            .then(res => res.json())
            .then(data => console.log(data))

    }
    return (
        <div>
        <div className="hero min-h-screen bg-base-200 py-10">
          <div className="hero-content flex-col">
            <div className="text-center lg:text-left">
              <h1 className="text-5xl text-center font-bold">
                {name}
                        </h1>
                        <p className="py-6 text-center">
              Update your products to display more precisely
            </p>
            </div>
            <form onSubmit={handleUpdatetoDB} className="card flex-shrink-0 w-[1000px] shadow-2xl bg-base-100">
              <div className="card-body w-full grid grid-cols-2">
  
                            <div className="form-control">
                  <label className="label">
                    <span className="label-text">Product Price</span>
                  </label>
                  <input
                    type="number"
                    name="price"
                    placeholder="Enter Product name"
                    className="input input-bordered"
                  />
                            </div>
  
                            <div className="form-control">
                  <label className="label">
                    <span className="label-text">Product Quantity</span>
                  </label>
                  <input
                    type="number"
                    name="quantity"
                    placeholder="Enter Product name"
                    className="input input-bordered"
                  />
                            </div>
                            <div className="form-control col-span-2">
                  <label className="label">
                    <span className="label-text">Product Description</span>
                  </label>
                  <input
                    type="text"
                    name="description"
                    placeholder="Enter Product name"
                    className="input input-bordered"
                  />
                            </div>
  
                <div className="text-center col-span-2 mt-6">
                  <button className="btn btn-secondary px-10">Add to Database</button>
                </div>
              </div>
            </form>
          </div>
        </div>
            </div>

    );
};

export default MyToysUpdate;