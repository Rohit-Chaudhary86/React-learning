import React, { useContext } from "react";  
import { UserContext } from "../context/userContext";

function Profile() {
  const { user } = useContext(UserContext);   // this line provide access of usercontext to this code file

  if (!user) return <div>Please login</div>;

  return <div>Welcome {user.username}!</div>;
}

export default Profile;
