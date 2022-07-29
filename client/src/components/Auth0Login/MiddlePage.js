import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Navigate } from "react-router-dom";

const MiddlePage = () => {
  const { user, getIdTokenClaims } = useAuth0();
  const gettoken = async () => {
    const claims = await getIdTokenClaims();
console.log(claims);
  };
  gettoken();

  console.log(user);
	const userRoles =
    user["https://ldn8-migrantsity-final-project.herokuapp.com/roles"];
  console.log(
    user["https://ldn8-migrantsity-final-project.herokuapp.com/roles"].includes("Admin")
  );
  if (userRoles.includes("Admin")) {
    return <Navigate replace to="/hmcview" />;
  } else if (userRoles.includes("Applicant")) {
		return <Navigate replace to="/applicantdashboard" />;
  } else {
		return <Navigate replace to="/application" />;
  }
};

export default MiddlePage;