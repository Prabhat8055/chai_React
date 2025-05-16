// import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
const Github = () => {
  const data = useLoaderData();
  //   const [data, setData] = useState([]);

  //   useEffect(() => {
  //     fetch("https://api.github.com/users/prabhat8055")
  //       .then((response) => response.json())
  //       .then((data) => {
  //         console.log(data);
  //         setData(data);
  //       });
  //   }, []);

  //There is other way to write the above code using loader in react router dom.

  return (
    <div className="text-3xl text-gray-700 p-10 flex flex-col justify-center items-center gap-10 font-bold">
      Github Followers: {data.followers}
      <img
        src={data.avatar_url}
        alt="Git"
        className="w-30 border-gray-400 rounded-2xl"
      />
    </div>
  );
};

export default Github;

