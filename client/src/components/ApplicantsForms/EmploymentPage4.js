/* eslint-disable react/no-unescaped-entities */
import React from "react";

import {
	TextField,
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
	Paper,
} from "@mui/material";

function EmploymentPage4({ values, handleChange }) {

	function createData(language, spoken, written, degree_of_fluency) {
		return { language, spoken, written, degree_of_fluency };
	}

	const rows = [createData("English", "Yes", "Yes", "---")];

	return (
		<>
			<h1>Employment, Education, Qualifications and Language History</h1>
			<div>
				<h3>Employment History</h3>
				<p>
					We require information for the previous three years of your employment
					history.
				</p>
				<p>
					We require information for the previous three years of your employment
					history.
				</p>
				<br />
				<br />
				<TextField
					id="outlined-multiline-static"
					label="Employment History"
					multiline
					rows={3}
					variant="outlined"
					onChange={handleChange("employment_history")}
					defaultValue={values.employment_history}
				/>
				<br />
				<br />
			</div>
			<div>
				<h3>Education History</h3>
				<p>
					Please click on the 'Add' button to add schools / colleges /
					universities or courses attended. Click to EDIT
				</p>
				<br />
				<br />
				<TextField
					id="outlined-multiline-static"
					label="Employment Education History"
					multiline
					rows={3}
					variant="outlined"
					onChange={handleChange("education_history")}
					defaultValue={values.education_history}
				/>
				<br />
				<br />
			</div>
			<div>
				<h3>Exam History</h3>
				<p>
					Please click on the 'Add' button to add exams. Click on the text
					highlighted in red to edit your entry.
				</p>
				<br />
				<br />
				<TextField
					id="outlined-multiline-static"
					label="Exam History"
					multiline
					rows={3}
					variant="outlined"
					onChange={handleChange("exam_history")}
					defaultValue={values.exam_history}
				/>
				<br />
				<br />
			</div>
			<div>
				<h3>Professional Qualifications</h3>
				<p>
					Please click on the 'Add' button to add exams. Click on the text
					highlighted in red to edit your entry.
				</p>
				<br />
				<br />
				<TextField
					id="outlined-multiline-static"
					label="Professional Qualifications"
					multiline
					rows={3}
					variant="outlined"
					onChange={handleChange("professional_qualifications")}
					defaultValue={values.professional_qualifications}
				/>
				<br />
				<br />
			</div>
			<div>
				<h3>Languages</h3>
				<TableContainer component={Paper}>
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
				</TableContainer>
				<br />
				<br />
			</div>
		</>
	);
}

export default EmploymentPage4;
