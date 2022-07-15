/* eslint-disable react/no-unescaped-entities */
import React, { useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Box, IconButton } from "@mui/material";
import Button from "@mui/material/Button";
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
	const [education, setEducation] = useState([
		{ id: 1, school: "Test1 School", degree: 180, description: "Nothing1" },
		{ id: 2, school: "Test2 School", degree: 280, description: "Nothing2" },
		{ id: 3, school: "Test3 School", degree: 380, description: "Nothing3" },
		{ id: 4, school: "Test4 School", degree: 480, description: "Nothing4" },
	]);

	const [eduOpen, setEduOpen] = useState(false);
	const [id, setId] = useState(1);
	const [school, setSchool] = useState(education.school);
	const [degree, setDegree] = useState(education.degree);
	const [description, setDescription] = useState(education.description);
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

	// const handleSubmitEvent = (submitEvent) => {
	// 	submitEvent.preventDefault();
	// 	setEduOpen(!eduOpen);
	// 	setId(Math.floor(Math.random()*10));
	// 	setId(Math.floor(Math.random()*10));
	// 	setEducation([...education, createNewEdu()]);
	// 	setFieldsEmpty();
	// };

	const handleAddClick = () => {
		setEduOpen(!eduOpen);
	};

	const handleEditClick = (params) => {
		console.log("Params : ", params.target.value);
		setEduOpen(!eduOpen);
	};

	const columns = [
		{
			field: "id",
			headerName: "Education ID",
			width: 120,
		},
		{
			field: "school",
			headerName: "School",
			width: 150,
			editable: false,
		},
		{
			field: "degree",
			headerName: "Degree",
			width: 150,
			editable: false,
		},
		{
			field: "description",
			headerName: "Description",
			description: "",
			width: 300,
			editable: false,
		},
		{
			headerName: "Action",
			width: 100,
			value: 1,
			editable: false,
			renderCell: () => (
				<>
					<IconButton aria-label="delete">
						<DeleteIcon />
					</IconButton>
					<IconButton
						aria-label="edit"
						variant="contained"
						onClick={handleEditClick}
					>
						<EditIcon />
					</IconButton>
				</>
			),
		},
	];

	const eduRows = education.map((edu) => {
		return {
			id: edu.id,
			school: edu.school,
			degree: edu.degree,
			description: edu.description,
		};
	});

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
					<EmploymentModal />
				</div>
				<br />
				<br />
				{/* <TextField
					id="outlined-multiline-static"
					label="Employment History"
					multiline
					rows={3}
					variant="outlined"
					onChange={handleChange("employment_history")}
					defaultValue={values.employment_history}
				/> */}
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
						<Button variant="contained" onClick={handleAddClick}>
							+Add
						</Button>
					</div>
					{eduOpen && <EducationHistoryModal setEduOpen={setEduOpen} />}
				</div>
				{/* <TextField
					id="outlined-multiline-static"
					label="Employment Education History"
					multiline
					rows={3}
					variant="outlined"
					onChange={handleChange("education_history")}
					defaultValue={values.education_history}
				/> */}
				<br />
				{/* <EducationModal education={education} setEducation={setEducation} /> */}
				<Box sx={{ height: 400, width: "100%" }}>
					<DataGrid
						getRowHeight={() => "auto"}
						getEstimatedRowHeight={() => 10}
						rows={eduRows}
						columns={columns}
						rowsPerPageOptions={[10, 25, 50, 100]}
						checkboxSelection
						disableSelectionOnClick
					/>
				</Box>
			</div>
			<div className="featureJobs">
				<h2>Professional Qualifications</h2>
				<div className="paragraphAndModalButton">
					<p>
						Please click on the 'Add' button to add exams. Click on the text
						highlighted in red to edit your entry.
					</p>
					<ProfessionalQualificationsModal />
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
					<LanguagesModal />
				</div>
				<br />
				<br />
			</div>
		</>
	);
}

export default EmploymentPage4;
