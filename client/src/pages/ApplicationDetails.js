import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { Button } from "@mui/material";

import "../styles/App.css"

const ApplicationDetails = () => {
  let { id } = useParams();
  const [applications, setApplications] = useState([]);
  useEffect(() => {
   const fetchData = async () => {
			const res = await fetch(`/api/${id}/applicantAllData`);
			const data = await res.json();
     setApplications(data);
    };
    fetchData();
  }, [id]);

  const applicationInformation = Object.assign({}, ...applications);
  console.log(applicationInformation);
  return (
		<div className="content-details">
			{applications.length && (
				<div className="applicationDetails">
					<h1>Application ID: {applicationInformation.Applicant[0].id}</h1>
					<p>Job: {applicationInformation.Applications[0].job_title}</p>
					<p>City: {applicationInformation.Applicant[0].city}</p>
					<p>CV: {applicationInformation.Applicant[0].cv}</p>
					<p>Cover letter: {applicationInformation.Applications[0].cover_letter}</p>
					<p>Skills: {applicationInformation.Applicant[0].skills}</p>
					<p>
						Current employee:{" "}
						{applicationInformation.Applicant[0].current_employee ? "Yes" : "No"}
					</p>
					<p>Applicant skills: {applicationInformation.Applicant[0].skills}</p>
				</div>
			)}
			<Link to="/hmcview">
				<Button>Back</Button>
      </Link>
      <Button>Delete</Button>
		</div>
	);
};

export default ApplicationDetails;

