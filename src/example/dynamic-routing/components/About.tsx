import React from "react";

import { useParams } from "react-router-dom";

const User = () => {
  const { userId, name } = useParams();
  return (
    <>
      User details <br />
      User <b>{userId}</b>
      <br />
      Haris Qadeer <b>{name}</b>
    </>
  );
};
export default User;
