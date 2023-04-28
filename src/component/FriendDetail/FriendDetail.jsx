import React from "react";
import { useLoaderData } from "react-router-dom";

export const FriendDetail = () => {
  const friend = useLoaderData();
  console.log(friend);

  return (
    <div>
      <h3>Everything about this person</h3>
      <p>{friend.name}</p>
    </div>
  );
};
