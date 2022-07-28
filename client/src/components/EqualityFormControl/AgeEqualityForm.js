{
	/* Age */
}
import React from "react";

import {
	Box,
	FormLabel,
	FormControl,
	FormControlLabel,
	RadioGroup,
	Radio,
} from "@mui/material";

function AgeEqualityForm({ equality, changeEqualityDetails }) {
	const ageBand = [
		"16-24",
		"25-29",
		"30-34",
		"35-39",
		"40-44",
		"45-49",
		"50-54",
		"55-59",
		"60-64",
		"65+",
		"Prefer not to say",
	];

	return (
		<Box sx={{ display: "flex" }}>
			<FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
				<FormLabel component="legend">
					<b>Age</b>
				</FormLabel>
				<RadioGroup
					required
					aria-label="age"
					name="age"
					value={equality.age_band}
					onChange={changeEqualityDetails("age_band")}
					sx={{
						display: "flex",
						flexDirection: "row",
						justifyContent: "flexStart",
					}}
				>
					{ageBand.map((age, index) => {
						return (
							<FormControlLabel
								key={index}
								control={<Radio />}
								label={age}
								value={age}
							/>
						);
					})}
				</RadioGroup>
			</FormControl>
			<FormControl
				required
				error={"error"}
				component="fieldset"
				sx={{ m: 3 }}
				variant="standard"
			></FormControl>
		</Box>
	);
}

export default AgeEqualityForm;
