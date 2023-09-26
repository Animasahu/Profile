import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const UserDetail = () => {
  const {id} = useParams();
  
  const [userDetails, setUserDetails] = useState(null);

  useEffect(() => {
    axios.get(`https://reqres.in/api/users/${id}`)
      .then((response) => {
        // console.log(response);
        setUserDetails(response.data.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [id]);

  if (!userDetails) {
    return <div>Loading...</div>
  }

  return (
    <div className="user-details">
      <img src={userDetails.avatar} alt={userDetails.first_name} />
      <p > {userDetails.first_name} {userDetails.last_name} </p>
    </div>
  );
};

export default UserDetail;
