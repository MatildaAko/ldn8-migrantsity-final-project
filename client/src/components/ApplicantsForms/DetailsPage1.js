import React from "react";

import {
	Box,
	FormLabel,
	FormControl,
	FormControlLabel,
	Radio,
	RadioGroup,
} from "@mui/material";

function DetailsPage1({ values, handleChange }) {
	return (
		<>
			<h1>Personal Details and Right to Work</h1>
			<Box>
				<FormControl>
					<FormLabel id="currently-work">
						*Do you currently work/ volunteer for Hackney Migrant Centre?
					</FormLabel>
					<RadioGroup
						aria-label="currently-work"
						value={values.currently_work}
						onChange={handleChange("currently_work")}
					>
						<FormControlLabel control={<Radio />} label="yes" value="yes" />
						<FormControlLabel control={<Radio />} label="no" value="no" />
					</RadioGroup>
				</FormControl>
			</Box>
			<h1>Right to Work</h1>
			<Box>
				<FormControl>
					<FormLabel id="right-to-work">
						*Do you have the Right to Work in the UK?
					</FormLabel>
					<RadioGroup
						aria-label="right-to-work"
						value={values.right_to_work}
						onChange={handleChange("right_to_work")}
					>
						<FormControlLabel control={<Radio />} label="yes" value="yes" />
						<FormControlLabel control={<Radio />} label="no" value="no" />
					</RadioGroup>
				</FormControl>
			</Box>
			<p>
				Please note: if you are successful in securing an interview, you will be
				required to provide proof of your right to work. Hackney Migrant Centre
				is unable to provide visa sponsorship. You will need to have secured a
				Right to Work prior to applying for the role.
			</p>
		</>
	);
}

export default DetailsPage1;
