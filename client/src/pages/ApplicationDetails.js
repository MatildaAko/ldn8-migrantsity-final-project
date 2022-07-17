import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { Button } from "@mui/material";

const ApplicationDetails = () => {
  let { id } = useParams();
  console.log({ id });
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
		<>
			{applications.length && (
				<>
					<h1>Application ID: {applicationInformation.Applicant[0].id}</h1>
					<p>Job: {applicationInformation.Applications[0].job_title}</p>
					<p>City: {applicationInformation.Applicant[0].city}</p>
					<p>CV: {applicationInformation.Applicant[0].cv}</p>
					<p>Cover letter: {applicationInformation.Applications[0].cover_letter}</p>
					<p>Skills: {applicationInformation.Applicant[0].skills}</p>
					<p>
						Current employee:{" "}
						{applicationInformation.Applicant[0].currently_work ? "Yes" : "No"}
					</p>
					<p>Applicant skills: {applicationInformation.Applicant[0].skills}</p>
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

