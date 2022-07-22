/* eslint-disable react/no-unescaped-entities */
import React, { useState } from "react";

import { TextField, Box, InputLabel, Select, MenuItem } from "@mui/material";


function SubmissionPage6({ setUserDetails,
userDetails, handleChange }) {
	const [disability, setDisability] = useState("");
	const [ageBand, setAgeBand] = useState("");
	const [ethnicGroup, setEthnicGroup] = useState("");
	const handleChangeDisability = (event) => {
		setDisability(event.target.value);
		setUserDetails({ ...userDetails, ["disability"]: event.target.value });
	};
	const handleChangeAgeBand = (event) => {
		setAgeBand(event.target.value);
		setUserDetails({ ...userDetails, ["age_band"]: event.target.value });
	};
	const handleChangeEthnicGroup = (event) => {
		setEthnicGroup(event.target.value);
		setUserDetails({ ...userDetails, ["ethnic_group"]: event.target.value });
		console.log(ethnicGroup === "Other ethnic Group");
	};


	return (
		<>
			<h1>Equal Opportunities and Submission</h1>
			<p>
				We seek to ensure that our organisation and our services are relevant
				and accessible to all. We welcome people from the widest possible
				diversity of background, culture and experience.
				<br></br>
				<br></br>
				We collect this data so that we can monitor the effectiveness of our
				approach and understand the diversity of our people. We recognise that
				the data disclosed in this section is highly sensitive and will be
				treated with strictest confidence.
				<br></br>
				<br></br>
				Elements of this section are mandatory to complete, however the
				information you provide is voluntary. If you do not wish to complete any
				question in this section, please select "prefer not to say".
				<br></br>
				<br></br>
				The information for sex and date of birth will be used for payroll
				purposes if you are successful. This information will not be seen or
				viewed by members of the shortlisting or interview panels throughout the
				recruitment process and will not affect the outcome of your application.
			</p>
			<Box>
				<InputLabel htmlFor="disability">
					*Do you consider yourself to have a disability?
				</InputLabel>
				<Select
					labelId="disability"
					value={disability}
					onChange={handleChangeDisability}
				>
					<MenuItem aria-label="no" value="No">
						No
					</MenuItem>
					<MenuItem value="Yes">Yes</MenuItem>
				</Select>
			</Box>
			<br />

			<Box>
				<InputLabel htmlFor="age-native-simple">Age band *</InputLabel>
				<Select
					labelId="age-band"
					value={ageBand}
					variant="outlined"
					onChange={handleChangeAgeBand}
				>
					<MenuItem value="18-25">18-25</MenuItem>
					<MenuItem value="26-33">26-33</MenuItem>
					<MenuItem value="34-41">34-41</MenuItem>
					<MenuItem value="42-49">42-49</MenuItem>
					<MenuItem value="50-57">50-57</MenuItem>
					<MenuItem value="58-64">58-64</MenuItem>
					<MenuItem value="65+">65+</MenuItem>
					<MenuItem value="prefer not to say">Prefer not to say</MenuItem>
				</Select>
			</Box>
			<br />
			<Box>
				<InputLabel htmlFor="ethnic-group">
					*What best describes your ethnic group?
				</InputLabel>
				<Select
					labelId="ethnic-group"
					value={ethnicGroup}
					onChange={handleChangeEthnicGroup}>
					<MenuItem aria-label="Other ethnic Group" value="Other ethnic Group">
						Other ethnic Group
					</MenuItem>
					<MenuItem value="Asian or Asian British">
						Asian or Asian British
					</MenuItem>
					<MenuItem value="Black African, Caribbean or Black British">
						Black African, Caribbean or Black British
					</MenuItem>
					<MenuItem value="Mixed or Multiple ethnic groups">
						Mixed or Multiple ethnic groups
					</MenuItem>
					<MenuItem value="White">White</MenuItem>
				</Select>
			</Box>
			<br />
			<Box>
				<InputLabel htmlFor="age-native-simple">
					If Other, please give details here:
				</InputLabel>
				<TextField
					id="outlined-multiline-static"
					label="Please give details here"
					multiline
					rows={3}
					variant="outlined"
					onChange={handleChange("description")}
					defaultValue={userDetails.description}
				/>
			</Box>
			<br />
			<Box>
				<InputLabel htmlFor="age-native-simple">
					*Which best describes your Religion or Belief?
				</InputLabel>
				<Select
					native
					value={userDetails.religion}
					onChange={handleChange("religion")}
				>
					<MenuItem aria-label="Please Select" value="">
						Please Select
					</MenuItem>
					<MenuItem value="No religion or belief">
						No religion or belief
					</MenuItem>
					<MenuItem value="Buddhist">Buddhist</MenuItem>
					<MenuItem value="Christian">Christian</MenuItem>
					<MenuItem value="Hindu">Hindu</MenuItem>
					<MenuItem value="Jewish">Jewish</MenuItem>
					<MenuItem value="Muslim">Muslim</MenuItem>
					<MenuItem value="Sikh">Sikh</MenuItem>
					<MenuItem value="prefer not to say">Prefer not to say</MenuItem>
				</Select>
			</Box>
			<br />
			<Box>
				<InputLabel htmlFor="age-native-simple">
					*Sexual Orientation:
				</InputLabel>
				<Select
					native
					value={userDetails.sex_orientation}
					onChange={handleChange("sex_orientation")}
				>
					<MenuItem aria-label="Please Select" value="">
						Please Select
					</MenuItem>
					<MenuItem value="Heterosexual">Heterosexual</MenuItem>
					<MenuItem value="Gay">Gay</MenuItem>
					<MenuItem value="Lesbian">Lesbian</MenuItem>
					<MenuItem value="Bisexual">Bisexual</MenuItem>
					<MenuItem value="Asexual">Asexual</MenuItem>
					<MenuItem value="Pansexual">Pansexual</MenuItem>
					<MenuItem value="Undecided">Undecided</MenuItem>
					<MenuItem value="prefer not to say">Prefer not to say</MenuItem>
				</Select>
			</Box>
			<Box>
				<InputLabel htmlFor="age-native-simple">
					*Which gender identity do you most identify with?
				</InputLabel>
				<Select
					native
					value={userDetails.gender}
					onChange={handleChange("gender")}
				>
					<MenuItem aria-label="Please Select" value="">
						Please Select
					</MenuItem>
					<MenuItem value="Male">Male</MenuItem>
					<MenuItem value="Female">Female</MenuItem>
					<MenuItem value="Intersex">Intersex</MenuItem>
					<MenuItem value="Non-binary">Non-binary</MenuItem>
					<MenuItem value="prefer not to say">Prefer not to say</MenuItem>
				</Select>
			</Box>
			<Box>
				<InputLabel htmlFor="age-native-simple">
					*Do you have caring responsibilities?If yes, please tick all that
					apply.
				</InputLabel>
				<Select
					native
					value={userDetails.caring}
					onChange={handleChange("caring")}
				>
					<MenuItem aria-label="Please Select" value="">
						Please Select
					</MenuItem>
					<MenuItem value="no">No</MenuItem>
					<MenuItem value="Primary carer of a child/children (under 18) ">
						Primary carer of a child/children (under 18){" "}
					</MenuItem>
					<MenuItem value="Primary carer of disabled child/children">
						Primary carer of disabled child/children
					</MenuItem>
					<MenuItem value="Primary carer of disabled adult (18 and over)">
						Primary carer of disabled adult (18 and over)
					</MenuItem>
					<MenuItem value="Primary carer of older person">
						Primary carer of older person
					</MenuItem>
					<MenuItem value="Secondary carer (another person carries out the main caring role)">
						Secondary carer (another person carries out the main caring role)
					</MenuItem>
					<MenuItem value="prefer not to say">Prefer not to say</MenuItem>
				</Select>
			</Box>
			<br />
		</>
	);
}

export default SubmissionPage6;
