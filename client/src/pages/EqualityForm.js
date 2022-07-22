import React from "react";

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

const EqualityForm = ({
	setEquality,
	equality,
}) => {
	// Handle fields change
	const changeEqualityDetails = (input) => (e) => {
		// console.log(e.target.value);
		setEquality({ ...equality, [input]: e.target.value });
	};

	console.log(equality);
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

			<hr />

			{/* Gender */}
			<GenderEqualityForm
				changeEqualityDetails={changeEqualityDetails}
				setEquality={setEquality}
	equality={equality}
			/>

			{/* Identify */}
			<IdentifyEqualityForm changeEqualityDetails={changeEqualityDetails} />

			<hr />

			{/* Age */}
			<AgeEqualityForm changeEqualityDetails={changeEqualityDetails} />

			<hr />

			{/* What is your ethnicity? */}
			<EthnicityEqualityForm changeEqualityDetails={changeEqualityDetails} />

			<hr />

			{/* Do you consider yourself to have a disability or health condition?    */}
			<DisabilityEqualityForm changeEqualityDetails={changeEqualityDetails} />
			<br />
			<br />
			<p>
				The information in this form is for monitoring purposes only. If you
				believe you need a ‘reasonable adjustment’, then please email our
				Recruitment team.
			</p>

			<hr />

			{/* What is your sexual orientation? */}
			<SexOrientationEqualityForm
				changeEqualityDetails={changeEqualityDetails}
			/>

			<hr />

			{/* What is your religion or belief? */}
			<ReligionEqualityForm changeEqualityDetails={changeEqualityDetails} />

			<hr />

			{/* What is your working pattern?
			 */}
			<WorkingPatternEqualityForm
				changeEqualityDetails={changeEqualityDetails}
			/>

			<hr />

			{/* What is your flexible working arrangement?
			 */}
			<WorkingArrangementEqualityForm
				changeEqualityDetails={changeEqualityDetails}
			/>

			{/* Do you have caring responsibilities? If yes, please tick all that apply.
			 */}
			<CaringEqualityForm
				changeEqualityDetails={changeEqualityDetails}
				values={equality}
			/>

			<hr />

			<ConfirmEqualityForm values={equality} />

			<hr />
		</>
	);
};

export default EqualityForm;
