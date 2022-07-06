/* eslint-disable react/no-unescaped-entities */
import React, { useState } from "react";

function EmploymentPage4() {
	const [textarea, setTextarea] = useState();

	const handleChange = (e) => {
		setTextarea(e.target.value);
	};

	const onSubmit = (e) => {
		e.preventDefault();
        alert("Thanks for your application");
		console.log(textarea);
	};

	return (
		<>
			<form onSubmit={onSubmit}>
				<h2>Employment History</h2>
				<p>
					We require information for the previous three years of your employment
					history.
				</p>
				<p>
					We require information for the previous three years of your employment
					history.
				</p>

				<label>
					If you have any gaps in your last 5 years of employment history,
					please provide information on the reason(s) for this.
					<br></br>
					<textarea
						placeholder="Information here.."
						value={textarea}
						onChange={handleChange}
					/>
				</label>
				<br></br>
				<h2>Education History</h2>
				<p>
					Please click on the 'Add' button to add schools / colleges /
					universities or courses attended. Click to EDIT
				</p>
				<h2>Exam History</h2>
				<p>
					Please click on the 'Add' button to add exams. Click on the text
					highlighted in red to edit your entry.
				</p>
				<h2>Professional Qualifications</h2>
				<p>
					Please click on the 'Add' button to add professional qualifications.
					Click on the text highlighted in red to edit your entry.
				</p>
				<h2>Languages</h2>
				<table>
					<thead>
						<tr>
							<th>Language</th>
							<th>Spoken</th>
							<th>Written</th>
							<th>Degree of Fluency</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>English</td>
							<td>Yes</td>
							<td>Yes</td>
							<td>---</td>
						</tr>
					</tbody>
				</table>
			</form>
		</>
	);
}

export default EmploymentPage4;
