import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { Button } from "@mui/material";

const ApplicationDetails = () => {
  let { id } = useParams();
  const [applications, setApplications] = useState([]);
  useEffect(() => {
   const fetchData = async () => {
			const res = await fetch(`/api/applications/${id}`);
			const data = await res.json();
     setApplications(data);
    };
    fetchData();
  }, [id]);

  const applicationInformation = Object.assign({}, ...applications);
  console.log(applicationInformation);
  return (
		<>
			{applications.length && (
				<>
					<h1>Application ID: {applicationInformation.id}</h1>
					<p>Job: {applicationInformation.job_title}</p>
					<p>Skills require: {applicationInformation.skills_require}</p>
					<p>Town: {applicationInformation.town}</p>
					<p>CV: {applicationInformation.cv}</p>
					<p>Cover letter: {applicationInformation.cover_letter}</p>
					<p>Current employee: {applicationInformation.current_employee ? "Yes" : "No"}</p>
					<p>Supporting Statement: {applicationInformation.supp_statement}</p>
				</>
			)}
			<Link to="/hmcview">
				<Button>Back</Button>
      </Link>
      <Button>Delete</Button>
		</>
	);
};

export default ApplicationDetails;

