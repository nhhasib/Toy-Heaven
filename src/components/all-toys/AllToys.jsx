import React from "react";
import { useLoaderData } from "react-router-dom";
import ToysRow from "./ToysRow";

const AllToys = () => {
    const toys = useLoaderData();

  return (
    <div className="w-11/12 mx-auto my-10">
      <div className="overflow-x-auto w-full text-xs">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th>Toy Name</th>
              <th>Seller</th>
              <th>Sub-Category</th>
              <th>Price</th>
              <th>Avl. Quantity</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
                      {
                          toys.map((toy) => (
              <ToysRow key={toy._id} toy={toy}></ToysRow>
                          ))
                      }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllToys;
