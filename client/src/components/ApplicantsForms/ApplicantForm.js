import React, { useState } from "react";

import Button from "@mui/material/Button";

import DetailsPage1 from "./DetailsPage1";
import CVPage2 from "./CVPage2";
import StatementPage3 from "./StatementPage3";
import EmploymentPage4 from "./EmploymentPage4";
import CriminalConvictionsPage5 from "./CriminalConvictionsPage5";
import EqualOpportunitiesPage6 from "./EqualOpportunitiesPage6";
import Confirm from "./ConfirmPage7";
import SubmitPage8 from "./SubmitPage8";

function ApplicantsForm() {
	// Steps
	const [activeStep, setActiveStep] = useState(0);

	const getSteps = () => {
		return [
			"Personal Details and Right to Work",
			"CV Upload and Supporting Statement",
			"Supporting Statement",
			"Employment, Education, Qualifications and Language History",
			"Criminal Convictions",
			"Equal Opportunities and Submission",
			"Confirm",
		];
	};
	const steps = getSteps();

	// State variables
	const [userDetails, setUserDetails] = useState({
		currently_work: Boolean,
		right_to_work: Boolean,
		cv: "",
		supp_statement: "",
		employment_history: "",
		education_history: "",
		exam_history: "",
		professional_qualifications: "",
		languages: "",
		dbs_work: Boolean,
		dbs_convictions: Boolean,
		disability: Boolean,
		age_band: "",
		ethnic_group: "",
		description: "",
		religion: "",
		sex_orientation: "",
		gender: "",
		caring: "",
	});

	console.log(userDetails);

	// Actions
	// Proceed to next step
	const handleNext = () => {
		setActiveStep((prevStep) => prevStep + 1);
	};

	// Go back to prev step
	const handleBack = () => {
		setActiveStep((prevStep) => prevStep - 1);
	};

	const handleReset = () => {
		setUserDetails({
			currently_work: Boolean,
			right_to_work: Boolean,
			cv: "",
			supp_statement: "",
			employment_history: "",
			education_history: "",
			exam_history: "",
			professional_qualifications: "",
			languages: "",
			dbs_work: Boolean,
			dbs_convictions: Boolean,
			disability: Boolean,
			age_band: "",
			ethnic_group: "",
			description: "",
			religion: "",
			sex_orientation: "",
			gender: "",
			caring: "",
		});
		setActiveStep(0);
	};

	// Handle fields change
	const handleChange = (input) => (e) => {
		setUserDetails({ ...userDetails, [input]: e.target.value });
	};

	return (
		<>
			{activeStep === steps.length ? (
				<div>
					<SubmitPage8 />
					<Button variant="contained" color="primary" onClick={handleReset}>
						Reset
					</Button>
				</div>
			) : (
				<>
					<div className="content">
						{activeStep === 0 && (
							<DetailsPage1 values={userDetails} handleChange={handleChange} />
						)}
						{activeStep === 1 && (
							<CVPage2 values={userDetails} handleChange={handleChange} />
						)}
						{activeStep === 2 && (
							<StatementPage3
								values={userDetails}
								handleChange={handleChange}
							/>
						)}
						{activeStep === 3 && (
							<EmploymentPage4
								values={userDetails}
								handleChange={handleChange}
							/>
						)}
						{activeStep === 4 && (
							<CriminalConvictionsPage5
								values={userDetails}
								handleChange={handleChange}
							/>
						)}
						{activeStep === 5 && (
							<EqualOpportunitiesPage6
								values={userDetails}
								handleChange={handleChange}
							/>
						)}
						{activeStep === 6 && <Confirm values={userDetails} />}
						{activeStep === 7 && <SubmitPage8 />}
					</div>
					<div className="buttons">
						<Button disabled={activeStep === 0} onClick={handleBack}>
							Back
						</Button>
						<Button
							disabled={activeStep === steps.length - 1}
							onClick={handleNext}
						>
							Next
						</Button>
					</div>
				</>
			)}
		</>
	);
}

export default ApplicantsForm;
