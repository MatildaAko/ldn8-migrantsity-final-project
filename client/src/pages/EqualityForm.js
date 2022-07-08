import React, { useState, useEffect } from "react";

import { Button } from "@mui/material";

import GenderEqualityForm from "../components/EqualityFormControl/GenderEqualityForm";
import IdentifyEqualityForm from "../components/EqualityFormControl/IdentifyEqualityForm";
import AgeEqualityForm from "../components/EqualityFormControl/AgeEqualityForm";
import EthnicityEqualityForm from "../components/EqualityFormControl/EthnicityEqualityForm";
import DisabilityEqualityForm from "../components/EqualityFormControl/DisabilityEqualityForm";
import SexOrientationEqualityForm from "../components/EqualityFormControl/SexOrientationEqualityForm";
import ReligionEqualityForm from "../components/EqualityFormControl/ReligionEqualityForm";
import WorkingPatternEqualityForm from "../components/EqualityFormControl/WorkingPatternEqualityForm";
import WorkingArrangementEqualityForm from "../components/EqualityFormControl/WorkingArrangementEqualityForm";
import CaringEqualityForm from "../components/EqualityFormControl/CaringEqualityForm";
import ConfirmEqualityForm from "../components/EqualityFormControl/ConfirmEqualityForm";

const EqualityForm = () => {
	const [backToTopButton, setBackToTopButton] = useState(false);
	const [userInfo, setUserInfo] = useState({
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

	// Handle Reset data
	const handleReset = () => {
		setUserInfo({
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
		setBackToTopButton(true);
	};

	useEffect(() => {
		window.scrollTo(0, 0);
	}, [backToTopButton]);

	// Handle fields change
	const handleChange = (input) => (e) => {
		// console.log(e.target.value);
		setUserInfo({ ...userInfo, [input]: e.target.value });
	};

	console.log(userInfo);
	return (
		<>
			<h1>Hackney Migrant Centre Equal Opportunities Monitoring Form</h1>
			<p>
				Hackney Migrant Centre (HMC) recognises that its equal opportunities
				policy, in itself, does not necessarily ensure equal opportunities. It
				therefore has a system for checking whether the policy is being carried
				out and whether it is working. Without records it is virtually
				impossible to know whether or not people are being discriminated
				against.
			</p>
			<p>
				HMC collects statistics on job applicants, volunteers and service users
				to ensure we are providing an equal service to all and equal access to
				job and volunteer opportunities. Data from monitoring records will be
				analysed to see whether there are any disparities and whether
				discrimination might be occurring. We therefore ask you to complete the
				following form and return it to us. All data is anonymous and will only
				be kept for the purpose outlined above.
			</p>
			<p>
				Filling in this form is voluntary. It will be separated from your
				application before shortlisting.
			</p>
			<p>
				<b>
					Please return the completed form along with your CV and cover letter
					to
				</b>
				<a href="mailto:recruitment@hackneymigrantcentre.org.uk">
					recruitment@hackneymigrantcentre.org.uk
				</a>
			</p>
			<hr />

			{/* Gender */}
			<GenderEqualityForm handleChange={handleChange} />

			{/* Identify */}
			<IdentifyEqualityForm handleChange={handleChange} />

			<hr />

			{/* Age */}
			<AgeEqualityForm handleChange={handleChange} />

			<hr />

			{/* What is your ethnicity? */}
			<EthnicityEqualityForm handleChange={handleChange} />

			<hr />

			{/* Do you consider yourself to have a disability or health condition?    */}
			<DisabilityEqualityForm handleChange={handleChange} />
			<br />
			<br />
			<p>
				The information in this form is for monitoring purposes only. If you
				believe you need a ‘reasonable adjustment’, then please email our
				Recruitment team.
			</p>

			<hr />

			{/* What is your sexual orientation? */}
			<SexOrientationEqualityForm handleChange={handleChange} />

			<hr />

			{/* What is your religion or belief? */}
			<ReligionEqualityForm handleChange={handleChange} />

			<hr />

			{/* What is your working pattern?
			 */}
			<WorkingPatternEqualityForm handleChange={handleChange} />

			<hr />

			{/* What is your flexible working arrangement?
			 */}
			<WorkingArrangementEqualityForm handleChange={handleChange} />

			{/* Do you have caring responsibilities? If yes, please tick all that apply.
			 */}
			<CaringEqualityForm handleChange={handleChange} />

			<hr />

			<ConfirmEqualityForm values={userInfo} />

			<hr />
			<Button variant="contained" color="primary" onClick={handleReset}>
				Submit
			</Button>
		</>
	);
};

export default EqualityForm;
