{
	/* What is your flexible working arrangement?
	 */
}
import React from "react";

import {
	TextField,
	FormLabel,
	FormControl,
	FormControlLabel,
	RadioGroup,
	Radio,
} from "@mui/material";

function WorkingArrangementEqualityForm({ equality, changeEqualityDetails }) {
	const workingArrangement = [
		"None",
		"Flexi-time",
		"Staggered hours",
		"Term-time hours",
		"Annualised hours",
		"Job-share",
		"Flexible shifts",
		"Compressed hours",
		"Homeworking",
		"Prefer not to say"	];

	return (
		<>
			<FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
				<FormLabel component="legend">
					<b>What is your flexible working arrangement?</b>
				</FormLabel>

				<RadioGroup
					required
					aria-label="workingArrangement"
					name="workingArrangement"
					value={equality.flexible_working}
					onChange={changeEqualityDetails("flexible_working")}
					sx={{
						display: "flex",
						flexDirection: "row",
						justifyContent: "flexStart",
					}}
				>
					{workingArrangement.map((arrangement, index) => {
						return (
							<FormControlLabel
								key={index}
								control={<Radio />}
								label={arrangement}
								value={arrangement}
							/>
						);
					})}
				</RadioGroup>
				<FormControlLabel
					control={
						<TextField
							onChange={changeEqualityDetails("flexible_working")}
							id="standard-basic"
							label=""
							variant="standard"
						/>
					}
					label="If other, please write in:"
					labelPlacement="start"
				/>
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

export default WorkingArrangementEqualityForm;
