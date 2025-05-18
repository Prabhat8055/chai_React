import React from "react";
import { useParams } from "react-router-dom";

const User = () => {
  const { userId } = useParams();
  return (
    <div className="text-4xl text-center p-10 ">User: {userId}</div>
  );
};

export default User;
