import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function ViewUser() {

  

const [user, setdata] = useState({
  name:"",
  username:"",
  email:""
});

const {id} = useParams();

useEffect(()=>{
  loadUser()
},[]);

const loadUser=async ()=>{
  const userinfo = await axios.get(`http://localhost:8080/user/${id}`);
  setdata(userinfo.data);
}

  return (
    <div className="container">
      <div className="card">
        <div className="card-details">
          <p className="text-title">Name: {user.name}</p>
          <p className="text-body">Username: {user.username}</p>
          <p className="text-body">Email: {user.email}</p>
        </div>
        <Link className="card-button" to={"/"}>Back to Home</Link>
      </div>
    </div>
  );
}
