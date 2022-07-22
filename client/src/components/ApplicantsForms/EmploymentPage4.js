/* eslint-disable react/no-unescaped-entities */
import React, { useState } from "react";
import { Stack, styled, Paper } from "@mui/material";
import "../../styles/JobsHistory.css";

import EmploymentModal from "../Modals/EmploymentModal";
import EducationHistoryModal from "../Modals/EducationHistoryModal";
import ProfessionalQualificationsModal from "../Modals/ProfessionalQualificationsModal";
import LanguagesModal from "../Modals/LanguagesModal";

function EmploymentPage4({
	setUserDetails,
	userDetails,
	employment_history,
	education_history,
	professional_qualifications,
	languages,
}) {
	const [employmentInfo, setEmploymentInfo] = useState([]);
	const [educationInfo, setEducationInfo] = useState([]);
	const [qualificationInfo, setQualificationInfo] = useState([]);
	const [languageInfo, setLanguageInfo] = useState([]);

	const Item = styled(Paper)(({ theme }) => ({
		backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
		...theme.typography.body2,
		padding: theme.spacing(1),
		textAlign: "center",
		color: theme.palette.text.secondary,
	}));

	return (
		<>
			<h1>
				Right to Work, Employment, Education, Qualification and Language History
			</h1>
			<div className="featureJobs">
				<h2>Employment History</h2>
				<p>
					We require information for the previous three years of your employment
					history.
				</p>
				<div className="paragraphAndModalButton">
					<p>
						Please click on the 'Add' button to add your employment history.
						Click on the text highlighted in red to edit your entry.
					</p>
					<EmploymentModal
						setEmploymentInfo={setEmploymentInfo}
						setUserDetails={setUserDetails}
						userDetails={userDetails}
						employment_history={employment_history}
					/>
				</div>
				<Stack spacing={2}>
					{employmentInfo.map((employment, index) => {
						return (
							//need to fix this layout
							<Item key={index}>
								Position: {employment.position}, Employer: {employment.employer}
								, Still Employed there:{" "}
								{employment.currentlyWorking ? "yes" : "no"}, Start Date:{" "}
								{JSON.stringify(employment.startDate.toLocaleString())}, End
								Date: {JSON.stringify(employment.endDate.toLocaleString())},
								Responsibilities: {employment.responsibilities}, Leaving/Gap
								Reason: {employment.leavingReason}
							</Item>
						);
					})}
				</Stack>
				<br />
				<br />
			</div>
			<div className="featureJobs">
				<h2>Education History</h2>
				<p>
					Please click on the 'Add' button to add schools / colleges /
					universities or courses attended. Click to EDIT
				</p>
				<div>
					<div className="paragraphAndModalButton">
						<p>
							Please click on the 'Add' button to add your education history.
							Click on the text highlighted in red to edit your entry.
						</p>
						<EducationHistoryModal
							setEducationInfo={setEducationInfo}
							setUserDetails={setUserDetails}
							userDetails={userDetails}
							education_history={education_history}
						/>
					</div>
					<Stack spacing={2}>
						{educationInfo.map((education, index) => {
							return (
								//need to fix this layout
								<Item key={index}>
									School: {education.school_name}, Course: {education.course_name}
									, Mobile: {education.mobile}, Grades: {education.grades},
									Telephone: {education.telephone}, Address1:{" "}
									{education.address1}, Address2: {education.address2}, Subject:{" "}
									{education.subject}, Town: {education.town},
								</Item>
							);
						})}
					</Stack>
				</div>
				<br />
			</div>
			<div className="featureJobs">
				<h2>Professional Qualifications</h2>
				<div className="paragraphAndModalButton">
					<p>
						Please click on the 'Add' button to add exams. Click on the text
						highlighted in red to edit your entry.
					</p>
					<ProfessionalQualificationsModal
						setQualificationInfo={setQualificationInfo}
						professional_qualifications={professional_qualifications}
						setUserDetails={setUserDetails}
						userDetails={userDetails}
					/>
				</div>
				<Stack spacing={2}>
					{qualificationInfo.map((qualification, index) => {
						return (
							//need to fix this layout
							<Item key={index}>
								Qualification: {qualification.title}, Date:{" "}
								{JSON.stringify(qualification.date.toLocaleString())}, Status:{" "}
								{qualification.status},
							</Item>
						);
					})}
				</Stack>
				<br />
				<br />
			</div>
			<div className="featureJobs">
				<h2>Languages</h2>
				<div className="paragraphAndModalButton">
					<p>
						Please click on the 'Add' button to add languages. Click on the text
						highlighted in red to edit your entry.
					</p>
					<LanguagesModal
						setLanguageInfo={setLanguageInfo}
						setUserDetails={setUserDetails}
						userDetails={userDetails}
						languages={languages}
					/>
				</div>
				<Stack spacing={2}>
					{languageInfo.map((language, index) => {
						return (
							//need to fix this layout
							<Item key={index}>
								Language: {language.language}, Fluency: {language.fluency},
								Spoken: {language.spoken}, Written: {language.written},
							</Item>
						);
					})}
				</Stack>
				<br />
				<br />
			</div>
		</>
	);
}

export default EmploymentPage4;
