import React from "react";
import { useAuth } from "../auth";

function ProfilePage() {
  const { user } = useAuth();

  console.log("ProfilePage.user", user);

  return (
    <>
      <h1>ProfilePage</h1>
      <p>Welcome {user.username}</p>
    </>
  );
}

export default ProfilePage;
