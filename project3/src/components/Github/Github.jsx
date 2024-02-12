import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";

function Github() {
  const data = useLoaderData();

  return (
    <div className="text-center m-4 bg-gray-600 text-white p-4 text-3xl">
      <h1> Github followers :{data.followers}</h1>
    </div>
  );
}

export default Github;

export const gitHubInfo = async () => {
  const res = await fetch("https://api.github.com/users/Dhruvik91");
 return res.json();
};
