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
	console.log({ applicationInformation });
	return (
		<div className="content-details">
			{applications.length && (
				<Box className="applicationDetails">
					<Card>
						<CardContent>
							<Typography variant="h4">
								Application ID: {applicationInformation.id}
							</Typography>
							<Typography variant="body1">
								<b>Job Title:</b> {applicationInformation.job_title}
							</Typography>
							<Typography variant="body1">
								<b>Current HMC Employee:</b>{" "}
								{applicationInformation.current_employee ? "Yes" : "No"}
							</Typography>
							<Typography variant="body1">
								<b>Has right to work:</b>{" "}
								{applicationInformation.right_to_work ? "Yes" : "No"}
							</Typography>
							<Typography variant="body1">
								<b>Job Title:</b> {applicationInformation.job_title}
							</Typography>
							{["Applied", "Rejected", "In progress"].includes(
								applicationInformation.status
							) && (
								<>
									<Typography variant="body1">
										<b>First Name:</b> {applicationInformation.first_name}
									</Typography>
									<Typography variant="body1">
										<b>Last Name:</b> {applicationInformation.last_name}
									</Typography>
									<Typography variant="body1">
										<b>Address:</b>{" "}
										{`${applicationInformation.address1}, ${
											applicationInformation.address2
										}, ${
											applicationInformation.address3
												? `${applicationInformation.address3},`
												: ""
										} ${applicationInformation.town}, ${
											applicationInformation.country
										}, ${applicationInformation.postcode}`}
									</Typography>
									{applicationInformation.telephone && (
										<Typography variant="body1">
											<b>Telephone:</b> {applicationInformation.telephone}
										</Typography>
									)}
									{applicationInformation.mobile && (
										<Typography variant="body1">
											<b>Mobile:</b> {applicationInformation.mobile}
										</Typography>
									)}
									<Typography variant="body1">
										<b>Email:</b> {applicationInformation.email}
									</Typography>
								</>
							)}
							<Typography variant="body1">
								<b>CV:</b> {applicationInformation.cv}
							</Typography>
							<Typography variant="body1">
								<b>Cover Letter:</b> {applicationInformation.supp_statement}
							</Typography>
							<Typography variant="h5">Employment History</Typography>
							<Typography variant="body1">
								<b>CV:</b> {applicationInformation.cv}
							</Typography>
						</CardContent>
					</Card>
					{/* <h1>Application ID: {applicationInformation.id}</h1>
					<p>Job: {applicationInformation.job_title}</p>
					<p>City: {applicationInformation.town}</p>
					<p>CV: {applicationInformation.cv}</p>
					<p>Cover letter: {applicationInformation.cover_letter}</p>
					<p>Skills: {applicationInformation.skills}</p>
					<p>
						Current employee:{" "}
						{applicationInformation.current_employee ? "Yes" : "No"}
					</p>
					<p>Applicant skills: {applicationInformation.skills}</p> */}

					{/* address1: "25 Manor Road"
address2: "London"
address3: ""
applicant_id: 10
country: ""
cover_letter: "I am writing to express my interest in the product designer position that you have posted. I believe that my experience as a product designer and my passion for the field make me an ideal candidate for this position.\n\nI have been working as a product designer for the past five years, first at XYZ Company and then at ABC Company. My work has included designing products for both consumer and industrial markets. I have designed everything from kitchen appliances to medical equipment. I have also worked on projects ranging from small-scale prototypes to full-scale production models.\n\nMy experience has taught me how to work with clients of all types, including marketing teams, engineers and manufacturing staff. I have learned how to communicate effectively with all of these people in order to create products that meet their needs while still being marketable and profitable. I have also learned how to manage budgets and schedules so that products are completed on time and within budget.\n\nOne of my greatest strengths is my ability to think creatively. I am able to come up with new ideas for products that will be successful in the marketplace. I am also able to take existing ideas and improve them so that they are more appealing to consumers. This skill has allowed me to help companies increase sales by as much as 30 percent through my designs alone.\n\nI would like the opportunity to meet with you in person so that we can discuss my qualifications in greater detail. I am confident that my skills and experience will allow me to be an asset to your company."
current_employee: false
cv: ""
description: "I am a highly motivated and results-oriented individual, and I am confident that I can deliver on the expectations of this position. I am excited to have the opportunity to discuss this position further with you, and I look forward to hearing from you soon."
email: "L.w@gmail.c,"
first_name: "Lucy"
fullname: "Lucy Worsley"
id: 6
job_description: "Reporting directly to the Digital Product Design Lead, you will be responsible for designing new features and optimizing each step of our flagship ecommerce journey on our website. You will work alongside, and collaborate with, other talented designers, content editors, product owners and developers to deliver an excellent customer experience across all channels. As well as new feature and product design, you will work closely with the Conversion Rate Optimisation (CRO) Manager to design challenger candidates for split-tests and brief winning versions to developers. Your creativity and customer-focus will help us develop a smarter, more flexible personalised experience for our members."
job_id: 17
job_title: "Digital Product Designer"
last_name: "Worsley"
mobile: ""
notes: null
postcode: "SW42 5RU"
right_to_work: true
skills: null
skills_require: "Familiar with working in agile/scrum environments\nComfortable with understanding and using data and customer feedback to guide design decisions\nAt least 3 years’ experience in a similar UX/UI design role\nExpertise using tools such as Figma, Zeplin, AxureRP, etc, and collaboration tools such as Miro\nAble to build prototypes to low or high fidelity depending on context"
status: "Applied"
status_id: 1
supp_statement: ""
telephone: ""
town: "" */}
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
