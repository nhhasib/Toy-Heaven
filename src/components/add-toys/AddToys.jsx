import React, { useContext } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../AuthProvider/AuthProvider";

const AddToys = () => {
  const {user}=useContext(AuthContext)

    const handleAddtoDB = event => {
        event.preventDefault();
        const form = event.target;
        const image = form.photo.value;
        const name = form.name.value;
        const seller_name = form.seller_name.value;
        const seller_email = form.seller_email.value;
        const category = form.category.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const quantity = form.quantity.value;
        const description = form.description.value;
        
        const product = { image, name, seller_name, seller_email, category, price, rating, quantity, description };

        fetch('https://toy-heaven-server.vercel.app/add-toys', {
            method: 'POST',
            headers: {
                'content-type':'application/json'
            },
            body:JSON.stringify(product)
        })
            .then(res => res.json())
          .then(data => {
              console.log(data)
                if (data.insertedId) {
                    Swal.fire({
                        icon: 'success',
                        title: 'Success!',
                        text: 'Product created Successfully!',
                        confirmButtonText:
            '<i class="fa fa-thumbs-up"></i> Great!',
                      })
                }
            })
            
    }

    
  return (
    <div>
      <div className="hero min-h-screen bg-base-200 py-10">
        <div className="hero-content flex-col">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl text-center font-bold">
              Add New Toys Here!
            </h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
          <form onSubmit={handleAddtoDB} className="card flex-shrink-0 w-[1000px] shadow-2xl bg-base-100">
            <div className="card-body w-full grid grid-cols-2">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Toy Picture URL</span>
                </label>
                <input
                  type="url"
                  name="photo"
                  placeholder="Toy Picture URL"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Product Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter Product name"
                  className="input input-bordered"
                />
                          </div>

                          <div className="form-control">
                <label className="label">
                  <span className="label-text">Seller Name</span>
                </label>
                <input
                  type="text"
                  name="seller_name"
                  defaultValue={user.displayName}
                  placeholder="Enter Seller name"
                  className="input input-bordered"
                />
                          </div>
                          <div className="form-control">
                <label className="label">
                  <span className="label-text">Seller Email</span>
                </label>
                <input
                  type="email"
                  name="seller_email"
                  defaultValue={user.email}
                  placeholder="Enter Seller email"
                  className="input input-bordered"
                />
                          </div>
                          <div className="form-control">
                <label className="label">
                  <span className="label-text">Sub-category</span>
                </label>
                <input
                  type="text"
                  name="category"
                  placeholder="Enter Product Sub-category"
                  className="input input-bordered"
                />
                          </div>
                          <div className="form-control">
                <label className="label">
                  <span className="label-text">Product Price</span>
                </label>
                <input
                  type="number"
                  name="price"
                  placeholder="Enter Product price"
                  className="input input-bordered"
                />
                          </div>
                          <div className="form-control">
                <label className="label">
                  <span className="label-text">Product Rating</span>
                </label>
                <input
                  type="number"
                  name="rating"
                  placeholder="Enter Product Rating"
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
                  placeholder="Enter Product Quantity"
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
                  placeholder="Enter Product Description"
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

export default AddToys;
