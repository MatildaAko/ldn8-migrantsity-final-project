import React, { useState } from "react";
import TabPanel from "./TabPanel";
// import { axios } from "axios";
import "../../styles/Form.css";
import { styled } from "@mui/material/styles";

// import Button from "@mui/material/Button";

import { Tabs, Tab, Box } from "@mui/material";

import DetailsPage1 from "./DetailsPage1";
import CVPage2 from "./CVPage2";
import StatementPage3 from "./StatementPage3";
import EmploymentPage4 from "./EmploymentPage4";
import EqualityForm from "../../pages/EqualityForm";
import PersonalDetails from "./PersonalDetails";
import ApplicationForm from "./ApplicationForm";
import Loading from "../Auth0Login/Loading";
import { withAuthenticationRequired } from "@auth0/auth0-react";

const showFormPage = (index) => {
	return {
		id: `vertical-tab-${index}`,
		"aria-controls": `vertical-tabpanel-${index}`,
	};
};

const StyledTabs = styled((props) => (
	<Tabs
  {...props}
  TabIndicatorProps={{ children: <span className="MuiTabs-indicatorSpan" /> }}
	/>
  ))({
	"& .MuiTabs-indicator": {
		maxWidth: 6,
		width: "100%",
		backgroundColor: "#4c8a8f",
		textAlign: "left",
	},
	"& .MuiTabs-indicatorSpan": {
		maxWidth: 40,
		width: "100%",
		backgroundColor: "#4c8a8f",
	},
  });


function ApplicantsForm() {
	// Steps
	const [value, setValue] = useState(0);
    const [applicationDetails, setApplicationDetails] = useState({
		job_id: "",
		cover_letter: "",
		description: "",
	});

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
		current_employee: false,
		right_to_work: false,
		cv: "",
		supp_statement: "",
		employments: [],
		education: [],
		qualifications: [],
		languages: [],
		application: applicationDetails,
		equality: {
			gender: "",
			identify: "",
			age_band: "",
			ethnic_group: "",
			disability: "",
			sex_orientation: "",
			religion: "",
			working_pattern: "",
			flexible_working: "",
			caring: "",
		},
	});

	console.log(userDetails);

const [equality, setEquality] = useState({
	gender: "",
	identify: "",
	age_band: "",
	ethnic_group: "",
	disability: "",
	sex_orientation: "",
	religion: "",
	working_pattern: "",
	flexible_working: "",
	caring: "",
});

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
			current_employee: false,
			right_to_work: false,
			cv: "",
			supp_statement: "",
			employments: [],
			education: [],
			qualifications: [],
			languages: [],
			application: applicationDetails,
			equality: {
				gender: "",
				identify: "",
				age_band: "",
				ethnic_group: "",
				disability: "",
				sex_orientation: "",
				religion: "",
				working_pattern: "",
				flexible_working: "",
				caring: "",
			},
	});
		setEquality; ({
			gender: "",
			identify: "",
			age_band: "",
			ethnic_group: "",
			disability: "",
			sex_orientation: "",
			religion: "",
			working_pattern: "",
			flexible_working: "",
			caring: "",
		});
		setValue(0);
	};

	// Handle fields change
	const handleChange = (input) => (e) => {
		let value;
		switch (e.target.value) {
			case "Yes":
				value = true;
				break;
			case "true":
				value = true;
				break;
			case "No":
				value = false;
				break;
			case "false":
				value = false;
				break;
			default:
				value = e.target.value;
		}

		console.log("input:", value);
		setUserDetails({ ...userDetails, [input]: value });
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
			<StyledTabs
				orientation="vertical"
				variant="standard"
				indicatorColor="secondary"
				textColor="secondary"
				value={value}
				onChange={handleTabChange}
				aria-label="secondary tabs example"
				sx={{
					maxWidth:200,
					minWidth:200,
				}}
			>
				<Tab
					label="Application Data"
					{...showFormPage(0)}
				/>
				<Tab
					label="Right to Work, Personal Details, CV and Supporting Statement"
					{...showFormPage(1)}
				/>
				<Tab
					label="Employment, Education, Qualification and Language History"
					{...showFormPage(2)}
				/>
				<Tab label="Equal Opportunities and Submission" {...showFormPage(3)} />
			</StyledTabs>
			<TabPanel
				value={value}
				index={0}
				setValue={setValue}
				>
				<ApplicationForm
					values={userDetails}
					handleChange={handleChange}
					userDetails={userDetails}
					setUserDetails={setUserDetails}
					application={userDetails.application}
					setApplicationDetails={setApplicationDetails}
					applicationDetails={applicationDetails}
				/>
			</TabPanel>
			<TabPanel
				value={value}
				index={1}
				setValue={setValue}
				>
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
			<TabPanel value={value} index={2} setValue={setValue}>
				<EmploymentPage4
					values={userDetails}
					handleChange={handleChange}
					setUserDetails={setUserDetails}
					userDetails={userDetails}
					employments={userDetails.employments}
					education={userDetails.education}
					qualifications={userDetails.qualifications}
					languages={userDetails.languages}
				/>
			</TabPanel>
			<TabPanel
				value={value}
				index={3}
				setValue={setValue}
				userDetails={userDetails}
				handleReset={handleReset}
			>
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
export default withAuthenticationRequired(ApplicantsForm, {
	onRedirecting: () => <Loading />,
});