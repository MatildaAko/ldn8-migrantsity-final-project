{
	/* What is your working pattern?
	 */
}
import React from "react";

import {
	FormLabel,
	FormControl,
	FormControlLabel,
	RadioGroup,
	Radio,
} from "@mui/material";

function WorkingPatternEqualityForm({ changeEqualityDetails }) {
	const workingPattern = ["Full-time", "Part-time", "Prefer not to say"];
	return (
		<>
			<FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
				<FormLabel component="legend">
					<b>What is your working pattern?</b>
				</FormLabel>
				<RadioGroup
					required
					aria-label="workingPattern"
					name="workingPattern"
					onChange={changeEqualityDetails("working_pattern")}
					sx={{
						display: "flex",
						flexDirection: "row",
						justifyContent: "flexStart",
					}}
				>
					{workingPattern.map((pattern, index) => {
						return (
							<FormControlLabel
								key={index}
								control={<Radio />}
								label={pattern}
								value={pattern}
							/>
						);
					})}
				</RadioGroup>
			</FormControl>
			<FormControl
				required
				error={"error"}
				component="fieldset"
				variant="standard"
			></FormControl>
		</>
	);
}

export default WorkingPatternEqualityForm;
