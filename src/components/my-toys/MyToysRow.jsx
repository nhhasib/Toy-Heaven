import React from 'react';
import { Link } from 'react-router-dom';

const MyToysRow = ({toy}) => {
    const {_id,name,category,price,quantity } = toy;
    return (
        <tr>
        <td>
                <div className="flex items-center">
                
            <div>
          <div className="font-bold">{ name}</div>
            </div>
          </div>
        </td>
            <td>{ category}</td>
            <td>{ price}</td>
            <td>{ quantity}</td>
        <th>
                <Link to={`/update/:${_id}`}><button className="btn bg-blue-700 btn-xs">Update</button></Link> 
        </th>
        <th>
            <Link ><button className="btn bg-red-700 btn-xs">Delete</button></Link> 
        </th>
      </tr>
    );
};

export default MyToysRow;