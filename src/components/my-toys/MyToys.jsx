import React, { useContext, useEffect, useState } from 'react';
import MyToysRow from './MyToysRow';
import { AuthContext } from '../AuthProvider/AuthProvider';

const MyToys = () => {
    const { user } = useContext(AuthContext);
    const [toys, setToys] = useState([]);

    useEffect(() => {
        fetch(`https://toy-heaven-server-nhhasib.vercel.app/my-toys/${user.email}`)
            .then(res => res.json())
            .then(data => setToys(data))
    },[])
    
    return (
        <div className="w-11/12 mx-auto my-10">
        <div className="overflow-x-auto w-full text-xs">
          <table className="table w-full">
            {/* head */}
            <thead>
              <tr>
                <th>Toy Name</th>
                <th>Sub-Category</th>
                <th>Price</th>
                <th>Avl. Quantity</th>
                <th></th>
                <th></th>
              </tr>
            </thead>
            <tbody>
                        {
                            toys.map((toy) => (
                <MyToysRow key={toy._id} toy={toy} toys={toys} setToys={setToys} ></MyToysRow>
                            ))
                        }
            </tbody>
          </table>
        </div>
      </div>
    );
};

export default MyToys;