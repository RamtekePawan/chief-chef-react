import React, { useEffect, useState } from 'react'

function ChefList() {

const [chefList, setchefList] = useState([]);

  useEffect(() => {
    getAllChefAction();
  }, []);


  

  let getAllChefAction = async () => {
    let url = `http://localhost:4000/find-all-chef`;
    let res = await fetch(url);
    let list = await res.json();
    console.log(list);
    // list updated.
    let newlist = [...list];
    setchefList(newlist);
  };

  return (
    <div>
    <h1 className='text-center my-3 p-2 bg-dark-subtle'>Chef List</h1>
    <table className="table">
      <thead>
        <tr className='fs-3'>
          <th>#</th>
          <th>Name</th>
          <th>Email</th>
          <th>Address</th>
          <th>Speciality</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {chefList.map((chef,index) => (
          <tr >
            <td>{index + 1}</td>
            <td>{chef.name}</td>
            <td>{chef.email}</td>
            <td>{chef.address}</td>
            <td>{chef.speciality}</td>
                <td>
                  <button className="btn btn-danger me-3" >
                    Delete
                  </button>
                  <button className="btn btn-primary">
                    Edit
                  </button>
                </td>
            
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default ChefList
