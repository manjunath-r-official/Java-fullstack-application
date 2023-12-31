import React, { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { confirmAlert } from 'react-confirm-alert'; 
import 'react-confirm-alert/src/react-confirm-alert.css'; 


export default function Home() {

    const [users, setUsers] = useState([]);

    const {id} = useParams();

    useEffect(()=>{
        loadUsers();
    },[]);

const loadUsers =async ()=>{ 
    const result = await axios.get("http://localhost:8080/users");
    setUsers(result.data);
}

const deleteUser=async (id)=>{
  await axios.delete(`http://localhost:8080/user/${id}`);
  
  loadUsers();
}


const submit =async (user) => {


  confirmAlert({
    title: 'Confirm to submit',
    message: 'Are you sure to do this.',
    buttons: [
      {
        label: 'Yes',
        onClick: ()=>deleteUser(user.id)
      },
      {
        label: 'No',
        
      }
    ]
  });
}
  return (
    <div className="container">
      <div className="py-4">
        <table className="table border shadow">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Usename</th>
              <th scope="col">Email</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {
                users.map((user,index)=>(
                    <tr>
                    <th scope="row" key={index}>{index+1}</th>
                    <td>{user.name}</td>
                    <td>{user.username}</td>
                    <td>{user.email}</td>
                    <td>
                        <Link to={`/edituser/${user.id}`}  className="btn btn-outline-primary mx-2">Edit</Link>
                        <Link to={`/viewuser/${user.id}`}  className="btn btn-outline-success mx-2">View</Link>
                        <button className="btn btn-outline-danger mx-2" onClick={()=>submit(user)}>Delete</button>
                    </td>
                    </tr>
                ))
            }
            
          </tbody>
        </table>
      </div>
    </div>
  );
}
