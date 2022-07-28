{
	/* Do you consider yourself to have a disability or health condition?    */
}
import React from "react";

import {
	FormLabel,
	FormControl,
	FormControlLabel,
	RadioGroup,
	Radio,
} from "@mui/material";

function DisabilityEqualityForm({ equality, changeEqualityDetails }) {
	const disabilities = ["Yes", "No", "Prefer not to say"];
	return (
			<FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
				<FormLabel component="legend">
					<b>
						Do you consider yourself to have a disability or health condition?{" "}
					</b>
				</FormLabel>
				<RadioGroup
					required
					aria-label="disability"
					name="disability"
					value={equality.disability}
					onChange={changeEqualityDetails("disability")}
					sx={{
						display: "flex",
						flexDirection: "row",
						justifyContent: "flexStart",
					}}
				>
					{disabilities.map((disability, index) => {
						return (
							<FormControlLabel
								key={index}
								control={<Radio />}
								label={disability}
								value={disability}
							/>
						);
					})}
				</RadioGroup>
			</FormControl>
	);
}

export default DisabilityEqualityForm;
