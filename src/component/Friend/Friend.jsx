import React from 'react'
import { Link } from 'react-router-dom'

const Friend = ({friend}) => {

  const {email, name, id, phone} = friend;
  return (
    <div>
      <h3>{name}</h3>
      <p>Phone: {phone}</p>
      <p>Email: {email}</p>
      <p><Link to={`/friend/${id}`}>Show me Details</Link></p>
    
    </div>
    
  )
}

export default Friend