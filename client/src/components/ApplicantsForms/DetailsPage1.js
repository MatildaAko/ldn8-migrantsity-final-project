import React from "react";

import "../../styles/RightWorkPage.css";

import {
	Box,
	FormLabel,
	FormControl,
	FormControlLabel,
	Radio,
	RadioGroup,
	Paper,
} from "@mui/material";

function DetailsPage1({ values, handleChange }) {

	return (
		<div>
			<Paper>
				<h1>
					Right to Work, Employment, Education, Qualification, Language History
				</h1>
				<div className="rightWorkFeature">
					<Box>
						<h2>Right to Work</h2>
						<FormControl>
							<FormLabel id="currently-work">
								<span className="asterisk">*</span>Do you currently work/ volunteer for Hackney Migrant Centre?
							</FormLabel>
							<br />
							<RadioGroup
								required
								aria-label="currently-work"
								value={values.currently_work}
								onChange={handleChange("currently_work")}
								sx={{
									width: 420,
									height: 50,
									display: "flex",
									flexDirection: "row",
									justifyContent: "flexStart",
								}}
							>
								<FormControlLabel control={<Radio />} label="Yes" value="Yes" />
								<FormControlLabel control={<Radio />} label="No" value="No" />
							</RadioGroup>
						</FormControl>
					</Box>
					<br />
					<Box>
						<FormControl>
							<FormLabel id="right-to-work">
							<span className="asterisk">*</span>Do you have the Right to Work in the UK?
							</FormLabel>
							<br />
							<RadioGroup
								required
								aria-label="right-to-work"
								value={values.right_to_work}
								onChange={handleChange("right_to_work")}
								sx={{
									width: 420,
									height: 50,
									display: "flex",
									flexDirection: "row",
									justifyContent: "flexStart",
								}}
							>
								<FormControlLabel control={<Radio />} label="Yes" value="Yes" />
								<FormControlLabel control={<Radio />} label="No" value="No" />
							</RadioGroup>
						</FormControl>
					</Box>
					<p className="rightWorkParagraph">
						<strong>Please note:</strong> if you are successful in securing an
						interview, you will be required to provide proof of your right to
						work. Hackney Migrant Centre is unable to provide visa sponsorship.
						You will need to have secured a Right to Work prior to applying for
						the role.
					</p>
				</div>
			</Paper>
		</div>
	);
}

export default DetailsPage1;
