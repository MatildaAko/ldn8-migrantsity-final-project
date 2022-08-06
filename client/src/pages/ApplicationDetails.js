import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { Box, Button, Card, CardContent, Typography } from "@mui/material";

import "../styles/App.css";

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
	return (
		<div className="content-details">
			{applications.length && (
				<Box className="applicationDetails">
					<Card>
						<CardContent>
							<Typography variant="h4">
								Application ID: {applicationInformation.Applicant[0].id}
							</Typography>
							<Typography variant="body1">
								<b>Job Title:</b> {applicationInformation.Application.job_title}
							</Typography>
							<Typography variant="body1">
								<b>Cover Letter:</b>{" "}
								{applicationInformation.Application.cover_letter}
							</Typography>
							<Typography variant="body1">
								<b>Description:</b>{" "}
								{applicationInformation.Application.description}
							</Typography>
							<Typography variant="body1">
								<b>Current HMC Employee:</b>{" "}
								{applicationInformation.Applicant[0].current_employee
									? "Yes"
									: "No"}
							</Typography>
							<Typography variant="body1">
								<b>Has right to work:</b>{" "}
								{applicationInformation.Applicant[0].right_to_work
									? "Yes"
									: "No"}
							</Typography>
							{["Applied", "Rejected", "In progress"].includes(
								applicationInformation.Application.status
							) && (
								<>
									<Typography variant="body1">
										<b>First Name:</b>{" "}
										{applicationInformation.Applicant[0].first_name}
									</Typography>
									<Typography variant="body1">
										<b>Last Name:</b>{" "}
										{applicationInformation.Applicant[0].last_name}
									</Typography>
									<Typography variant="body1">
										<b>Address:</b>{" "}
										{`${applicationInformation.Applicant[0].address1}, ${
											applicationInformation.Applicant[0].address2
												? `${applicationInformation.Applicant[0].address2},`
												: ""
										} ${
											applicationInformation.Applicant[0].address3
												? `${applicationInformation.Applicant[0].address3},`
												: ""
										} ${applicationInformation.Applicant[0].town}, ${
											applicationInformation.Applicant[0].country
										}, ${applicationInformation.Applicant[0].postcode}`}
									</Typography>
									{applicationInformation.Applicant[0].telephone && (
										<Typography variant="body1">
											<b>Telephone:</b>{" "}
											{applicationInformation.Applicant[0].telephone}
										</Typography>
									)}
									{applicationInformation.Applicant[0].mobile && (
										<Typography variant="body1">
											<b>Mobile:</b>{" "}
											{applicationInformation.Applicant[0].mobile}
										</Typography>
									)}
									<Typography variant="body1">
										<b>Email:</b> {applicationInformation.Applicant[0].email}
									</Typography>
								</>
							)}
							<Typography variant="body1">
								<b>CV:</b> {applicationInformation.Applicant[0].cv}
							</Typography>
							<Typography variant="body1">
								<b>Supporting Statement:</b>{" "}
								{applicationInformation.Applicant[0].supp_statement}
							</Typography>
							<Typography variant="h5">Employment History</Typography>
							{applicationInformation.Employments.map((employment, index) => {
								return (
									<>
										<Typography variant="h6" key={index}>
											Job {index + 1}
										</Typography>
										<Typography variant="body1">
											<b>Position/Gap:</b> {employment.position}
										</Typography>
										<Typography variant="body1" key={index}>
											<b>Employer:</b> {employment.employer}
										</Typography>
										<Typography variant="body1" key={index}>
											<b>Currently working here:</b>{" "}
											{employment.currently_working ? "Yes" : "No"}
										</Typography>
										<Typography variant="body1" key={index}>
											<b>Start Date:</b> {employment.start_date}
										</Typography>
										{!employment.currently_working && (
											<Typography variant="body1" key={index}>
												<b>End Date:</b> {employment.end_date}
											</Typography>
										)}
										<Typography variant="body1" key={index}>
											<b>Responsibilities:</b> {employment.responsibilities}
										</Typography>
										<Typography variant="body1" key={index}>
											<b>Leaving/Gap Reason:</b> {employment.position}
										</Typography>
									</>
								);
							})}
							<Typography variant="h5">Education History</Typography>
							{applicationInformation.Education.map((education, index) => {
								return (
									<>
										<Typography variant="h6" key={index}>
											Education {index + 1}
										</Typography>
										<Typography variant="body1">
											<b>School Name:</b> {education.school_name}
										</Typography>
										<Typography variant="body1">
											<b>Course:</b> {education.course_name}
										</Typography>
										<Typography variant="body1">
											<b>Subject:</b> {education.subject}
										</Typography>
										<Typography variant="body1">
											<b>Address:</b> {education.address1}, {education.address2}
											, {education.town}, {education.country}
										</Typography>
										{education.telephone && (
											<Typography variant="body1">
												<b>Telephone:</b> {education.telephone}
											</Typography>
										)}
										{education.mobile && (
											<Typography variant="body1">
												<b>Mobile:</b> {education.mobile}
											</Typography>
										)}
										<Typography variant="body1">
											<b>Grades:</b> {education.grades}
										</Typography>
									</>
								);
							})}
							<Typography variant="h5">Professional Qualifications</Typography>
							{applicationInformation.Qualifications.map((qualification, index) => {
								return (
									<>
										<Typography variant="h6" key={index}>
											Qualification {index + 1}
										</Typography>
										<Typography variant="body1">
											<b>Title:</b> {qualification.title}
										</Typography>
										<Typography variant="body1">
											<b>Date:</b> {qualification.status}
										</Typography>
										<Typography variant="body1">
											<b>Status:</b> {qualification.date}
										</Typography>
									</>
								);
							})}
							<Typography variant="h5">Languages</Typography>
							{applicationInformation.Languages.map((language, index) => {
								return (
									<>
										<Typography variant="h6">
											Language {index + 1}
										</Typography>
										<Typography variant="body1">
											<b>Language:</b> {language.language}
										</Typography>
										<Typography variant="body1">
											<b>Degree of Fluency:</b> {language.fluency}
										</Typography>
										<Typography variant="body1">
											<b>Spoken:</b> {language.spoken ? "Yes" : "No"}
										</Typography>
										<Typography variant="body1">
											<b>Written:</b> {language.written ? "Yes" : "No"}
										</Typography>
									</>
								);
							})}
						</CardContent>
					</Card>
				</Box>
			)}
			<Link to="/hmcview">
				<Button>Back</Button>
			</Link>
			<Button>Delete</Button>
		</div>
	);
};

export default ApplicationDetails;
