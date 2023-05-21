import React from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const MyToysRow = ({toy,toys,setToys}) => {
  const { _id, name, category, price, quantity } = toy;
  

  const handleDelete = () => {
    
    fetch(`http://localhost:5000/all-toys/${_id}`, {
      method: 'DELETE'
  })
      .then(res => res.json())
      .then(data => {
          console.log(data);
          if (data.deletedCount > 0) {
              Swal.fire(
                  'Deleted!',
                  'Your toys has been deleted.',
                  'success'
              )
              const remaining = toys.filter(t => t._id !== _id);
              setCoffees(remaining);
          }
      })

}

  
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
                <Link to={`/update/${_id}`}><button className="btn bg-blue-700 btn-xs">Update</button></Link> 
        </th>
        <th>
            <button onClick={handleDelete} className="btn bg-red-700 btn-xs">Delete</button>
        </th>
      </tr>
    );
};

export default MyToysRow;