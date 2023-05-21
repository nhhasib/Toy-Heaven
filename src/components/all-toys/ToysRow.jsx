import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../AuthProvider/AuthProvider';

const ToysRow = ({ toy }) => {
    const {user } = useContext(AuthContext);
    const {_id, seller_name,name,category,price,quantity} = toy;
    return (  
      <tr>
        <td>
          <div className="flex items-center">
            <div>
          <div className="font-bold">{ name}</div>
            </div>
          </div>
        </td>
        <td>
        {seller_name}
        </td>
            <td>{ category}</td>
            <td>{ price}</td>
            <td>{ quantity}</td>
        <th>
            <Link to={`/all-toys/${_id}`}><button className="btn btn-secondary btn-xs">Show Details</button></Link> 
        </th>
      </tr>
        
    );
};

export default ToysRow;