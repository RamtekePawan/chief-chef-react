import React, { useEffect, useState } from 'react'

function UserList() {
  let [userList, setUserList] = useState([]);

  useEffect(() => {
    getAllUserAction();
  }, []);

  let getAllUserAction = async () => {
    let url = `http://localhost:4000/find-all-user`;
    let res = await fetch(url);
    let list = await res.json();
    console.log(list);
    // list updated.
    let newlist = [...list];
    setUserList(newlist);
  };
  return (
    <div>
    <h1 className='text-center my-3 p-2 bg-dark-subtle'>User List</h1>
    <table className="table">
      <thead>
        <tr className='fs-3'>
          <th>#</th>
          <th>Name</th>
          <th>Email</th>
          <th>Password</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {userList.map((user,index) => (
          <tr >
            <td>{index+1}</td>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.password}</td>
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

export default UserList
