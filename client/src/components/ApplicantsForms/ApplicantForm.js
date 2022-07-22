import React, { useState } from "react";
import TabPanel from "./TabPanel";
import "./form.css";

// import Button from "@mui/material/Button";

import { Tabs, Tab, Box } from "@mui/material";

import DetailsPage1 from "./DetailsPage1";
import CVPage2 from "./CVPage2";
import StatementPage3 from "./StatementPage3";
import EmploymentPage4 from "./EmploymentPage4";
// import CriminalConvictionsPage5 from "./CriminalConvictionsPage5";
// import EqualOpportunitiesPage6 from "./EqualOpportunitiesPage6";
import EqualityForm from "../../pages/EqualityForm";
import PersonalDetails from "./PersonalDetails";
// import ConfirmPage7 from "./ConfirmPage7";
// import ConfirmEqualityForm from "../EqualityFormControl/ConfirmEqualityForm";
// import SubmitPage8 from "./SubmitPage8";


const showFormPage = (index) => {
	return {
		id: `vertical-tab-${index}`,
		"aria-controls": `vertical-tabpanel-${index}`,
	};
};


function ApplicantsForm() {
	// Steps
	const [value, setValue] = useState(0);

  const handleTabChange = ( event, newValue) => {
    setValue(newValue);
  };

	// State variables
	const [userDetails, setUserDetails] = useState({
		first_name: "",
		last_name: "",
		address1: "",
		address2: "",
		address3: "",
		town: "",
		country: "",
		postcode: "",
		telephone: "",
		mobile: "",
		email: "",
		current_employee: "",
		right_to_work: "",
		cv: "",
		supp_statement: "",
		employment_history: [],
		education_history: [],
		professional_qualifications: [],
		languages: [],
	});

	console.log(userDetails);


	const handleReset = () => {
		setUserDetails({
			first_name: "",
			last_name: "",
			address1: "",
			address2: "",
			address3: "",
			town: "",
			country: "",
			postcode: "",
			telephone: "",
			mobile: "",
			email: "",
			current_employee: "",
			right_to_work: "",
			cv: "",
			supp_statement: "",
			employment_history: [],
			education_history: [],
			professional_qualifications: [],
			languages: [],
		});
		// handleTabChange(0);
	};
const [equality, setEquality] = useState({
	gender: "",
	identify: "",
	age_band: "",
	ethnic_group: "", // main_group
	disability: "",
	sex_orientation: "",
	religion: "",
	working_pattern: "",
	flexible_working: "",
	caring: "",
});
	// Handle fields change
	const handleChange = (input) => (e) => {
		setUserDetails({ ...userDetails, [input]: e.target.value });
	};

	return (
		<Box
			sx={{
				flexGrow: 1,
				bgcolor: "background.paper",
				display: "flex",
				height: 224,
			}}
		>
			<Tabs
				orientation="vertical"
				variant="standard"
				// selectionFollowsFocus={true}
				indicatorColor="secondary"
				centered={true}
				value={value}
				onChange={handleTabChange}
				aria-label="Form Steps"
				sx={{ borderRight: 1, borderColor: "divider" }}
			>
				<Tab
					label="Right to Work, Personal Details, CV and Supporting Statement"
					{...showFormPage(0)}
				/>
				<Tab
					label="Employment, Education, Qualification and Language History"
					{...showFormPage(1)}
				/>
				<Tab label="Equal Opportunities and Submission" {...showFormPage(2)} />
			</Tabs>
			<TabPanel value={value} index={0} setValue={setValue}>
				<DetailsPage1 values={userDetails} handleChange={handleChange} />
				<PersonalDetails
					values={userDetails}
					handleChange={handleChange}
					userDetails={userDetails}
					setUserDetails={setUserDetails}
					country={userDetails.country}
				/>
				<CVPage2 values={userDetails} handleChange={handleChange} />
				<StatementPage3 values={userDetails} handleChange={handleChange} />
			</TabPanel>
			<TabPanel value={value} index={1} setValue={setValue}>
				<EmploymentPage4
					values={userDetails}
					handleChange={handleChange}
					setUserDetails={setUserDetails}
					userDetails={userDetails}
					employment_history={userDetails.employment_history}
					education_history={userDetails.education_history}
					professional_qualifications={userDetails.professional_qualifications}
					languages={userDetails.languages}
				/>
			</TabPanel>
			<TabPanel value={value} index={2} setValue={setValue}>
				<EqualityForm
					values={userDetails}
					handleChange={handleChange}
					setUserDetails={setUserDetails}
					userDetails={userDetails}
					equality={equality}
					setEquality={setEquality}
				/>
			</TabPanel>
		</Box>
	);
}

export default ApplicantsForm;
