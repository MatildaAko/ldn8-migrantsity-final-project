/* eslint-disable react/no-unescaped-entities */
import React, { useState } from "react";
import { DataGrid } from "@mui/x-data-grid";

import "../../styles/JobsHistory.css";

import EmploymentModal from "../Modals/EmploymentModal";
import EducationHistoryModal from "../Modals/EducationHistoryModal";
import EducationModal from "./EducationModal";
import ProfessionalQualificationsModal from "../Modals/ProfessionalQualificationsModal";
import LanguagesModal from "../Modals/LanguagesModal";


function EmploymentPage4(/*{ values, handleChange }*/) {
	const [education, setEducation] = useState([
		{ id: 1, school: "Test School", degree: 80, description: "Nothing" },
	]);

	const columns = [
		{
			field: "id",
			headerName: "Education ID",
			width: 120,
			// renderCell: (params) => (
			// 	// <Link to={`/applicationdetails/${params.id}`}>
			// 	// 	<Button>{params.id}</Button>
			// 	// </Link>
			// ),
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
			width: 160,
			editable: false,
		},
	];
	const eduRows = education.map((edu) => {
		// console.log("education: ",education);
		// console.log("school: ",edu.school);
		return {
			id: edu.id,
			school: edu.school,
			degree: edu.degree,
			description: edu.description,
		};
	});

	return (
		<>
			<h1>Right to Work, Employment, Education, Qualification and Language History</h1>
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
				<div className="paragraphAndModalButton">
					<p>
						Please click on the 'Add' button to add your education history.
						Click on the text highlighted in red to edit your entry.
					</p>
					<EducationHistoryModal />
				</div>
				<br />
				<br />
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
				<br />
				<EducationModal setEducation={setEducation} />
				<DataGrid
					getRowHeight={() => "auto"}
					getEstimatedRowHeight={() => 10}
					rows={eduRows}
					columns={columns}
					rowsPerPageOptions={[10, 25, 50, 100]}
					checkboxSelection
					disableSelectionOnClick
				/>
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
				{/* <ProfessionalQualificationsModal setProfessional={setProfessional} />
				<DataGrid
					getRowHeight={() => "auto"}
					getEstimatedRowHeight={() => 10}
					rows={profRows}
					columns={columns}
					rowsPerPageOptions={[10, 25, 50, 100]}
					checkboxSelection
					disableSelectionOnClick
				/> */}
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
				{/* <TableContainer component={Paper}>
					<Table aria-label="simple table">
						<TableHead>
							<TableRow>
								<TableCell>Language</TableCell>

								<TableCell align="right">Spoken</TableCell>
								<TableCell align="right">Written</TableCell>
								<TableCell align="right">Degree of Fluency</TableCell>
							</TableRow>
						</TableHead>
						<TableBody>
							{rows.map((row) => (
								<TableRow key={row.language}>
									<TableCell component="th" scope="row">
										{row.language}
									</TableCell>
									<TableCell align="right">{row.spoken}</TableCell>
									<TableCell align="right">{row.written}</TableCell>
									<TableCell align="right">{row.degree_of_fluency}</TableCell>
								</TableRow>
							))}
						</TableBody>
					</Table>
				</TableContainer> */}
				<br />
				<br />
			</div>
		</>
	);
}

export default EmploymentPage4;
