import React, { useState } from "react";
import SubmissionPage6 from "./SubmissionPage6";
import CriminalConvictionsPage5 from "./CriminalConvictionsPage5";
import CVPage2 from "./CVPage2";
import DetailsPage1 from "./DetailsPage1";
import EmploymentPage4 from "./EmploymentPage4";
import StatementPage3 from "./StatementPage3";

function MonitoringForm() {
	const [page, setPage] = useState(0);

	const FormTitles = [
		"Personal Details and Right to Work",
		"CV Upload and Supporting Statement",
		"Supporting Statement",
		"Employment, Education, Qualifications and Language History",
		"Criminal Convictions",
		"Equal Opportunities and Submission",
	];

	const PageDisplay = () => {
		if (page == 0) {
			return <DetailsPage1 />;
		} else if (page == 1) {
			return <CVPage2 />;
		} else if (page == 2) {
			return <StatementPage3 />;
		} else if (page == 3) {
			return <EmploymentPage4 />;
		} else if (page == 4) {
			return <CriminalConvictionsPage5 />;
		} else {
			return <SubmissionPage6 />;
		}
	};

	return (
		<div className="form">
			<div className="header">
				<h1>{FormTitles[page]}</h1>
			</div>
			<div className="content">{PageDisplay()}</div>
			<div className="footer">
				<button
					disabled={page == 0}
					onClick={() => {
						setPage((currPage) => currPage - 1);
					}}
				>
					Prev
				</button>
				<button
					disabled={page == FormTitles.length - 1}
					onClick={() => {
						setPage((currPage) => currPage + 1);
					}}
				>
					Next
				</button>
			</div>
		</div>
	);
}

export default MonitoringForm;
