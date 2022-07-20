/* eslint-disable react/no-unescaped-entities */
import React, { useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Box, IconButton, Stack, styled, Button, Paper } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/DeleteOutlined";
import { Applicant } from "../../models/applicant";
import "../../styles/JobsHistory.css";

import EmploymentModal from "../Modals/EmploymentModal";
import EducationHistoryModal from "../Modals/EducationHistoryModal";
import EducationModal from "./EducationModal";
import ProfessionalQualificationsModal from "../Modals/ProfessionalQualificationsModal";
import LanguagesModal from "../Modals/LanguagesModal";

function EmploymentPage4(/*{ values, handleChange }*/) {
	// const newApp = new Applicant();
	// newApp.education.school = "The school";
	// const newSchool = new Applicant.Ed

	const [eduOpen, setEduOpen] = useState(false);
	const [id, setId] = useState(1);
	const [school, setSchool] = useState(education.school);
	const [degree, setDegree] = useState(education.degree);
	const [description, setDescription] = useState(education.description);
	const [employmentInfo, setEmploymentInfo] = useState([]);
	const [educationInfo, setEducationInfo] = useState([]);
	const [qualificationInfo, setQualificationInfo] = useState([]);
	const [languageInfo, setLanguageInfo] = useState([])
	console.log(educationInfo);

	const Item = styled(Paper)(({ theme }) => ({
		backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
		...theme.typography.body2,
		padding: theme.spacing(1),
		textAlign: "center",
		color: theme.palette.text.secondary,
	}));
	const createNewEdu = () => {
		const newEdu = {
			id: id,
			school: school,
			degree: degree,
			description: description,
		};
		return newEdu;
	};
	const setFieldsEmpty = () => {
		setSchool("");
		setDegree("");
		setDescription("");
	};

	const handleAddClick = () => {
		setEduOpen(!eduOpen);
	};

	const handleEditClick = (params) => {
		console.log("Params : ", params.target.value);
		setEduOpen(!eduOpen);
	};

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
					/>
				</div>
				<Stack spacing={2}>
					{employmentInfo.map((employment, index) => {
						return (
							//need to fix this layout
							<Item>
								{employment.position}
								{employment.employer}
								{employment.currentlyWorking ? "yes" : "no"}
								{JSON.stringify(employment.startDate.toLocaleString())}
								{JSON.stringify(employment.endDate)}
								{employment.responsibilities}
								{employment.leavingReason}
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
						<EducationHistoryModal setEducationInfo={setEducationInfo} />
					</div>
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
					/>
				</div>
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
					<LanguagesModal setLanguageInfo={setLanguageInfo} />
				</div>
				<br />
				<br />
			</div>
		</>
	);
}

export default EmploymentPage4;
