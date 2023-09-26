import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { Link } from "react-router-dom";


const Users = () => {

  const [users, setUsers] = useState([])

  useEffect(() => {
    axios.get('https://reqres.in/api/users?page=1&per_page=10')
      .then(response => {
        console.log(response)
        const fetchedUsers = response.data.data;

        const uniqueUsers = Array.from(new Set([...fetchedUsers]));
        setUsers(uniqueUsers);
      })
      .catch(error => {
        console.error(error);
      });

  }, []);


  const handleDeleteUser = (id) => {
    let newList = users.filter((item) => item.id !== id)
    setUsers(newList)
  }

 
  return (

    <div className='users-box'>
      <div className='users-list'>
        {users.length > 0 && users.map((person) => {
          return (
            <div className='card' key={person.id} >
              <img className='users-avatar' src={person.avatar} alt={person.first_name} />
              <Link to={`/user/${person.id}`}>
                <p className='users-name'>{person.first_name} {person.last_name}</p>
              </Link>
              <button className='users-delete' onClick={()=>handleDeleteUser(person.id)} >Delete</button>
            </div>
          )
        })}

      </div>
    </div>

  )
}

export default Users;
