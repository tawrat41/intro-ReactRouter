import React from 'react'
import { useLoaderData } from 'react-router-dom'
import Friend from '../Friend/friend';

const Friends = () => {
    const friends = useLoaderData();
    console.log(friends);

  return (
    <div>
        <h3>These are my friends!</h3>
        <h2>Number of friends: {friends.length}</h2>
        {
            friends.map(friend => <Friend
                key = {friend.id}
                friend = {friend}
            ></Friend>)
        }
    </div>
  )
}

export default Friends