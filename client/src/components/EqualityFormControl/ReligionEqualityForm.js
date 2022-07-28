{
	/* What is your religion or belief? */
}
import React from "react";

import {
	TextField,
	FormLabel,
	FormControl,
	FormControlLabel,
	Radio,
	RadioGroup,
} from "@mui/material";

function ReligionEqualityForm({ equality, changeEqualityDetails }) {
	const religions = [
		"No religion or belief",
		"Buddhist",
		"Christian",
		"Hindu",
		"Jewish",
		"Muslim",
		"Sikh",
		"Prefer not to say"	];
	return (
		<>
			<FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
				<FormLabel component="legend">
					<b>What is your religion or belief?</b>
				</FormLabel>
				<RadioGroup
					required
					aria-label="religions"
					name="religions"
					value={equality.religion}
					onChange={changeEqualityDetails("religion")}
					sx={{
						display: "flex",
						flexDirection: "row",
						justifyContent: "flexStart",
					}}
				>
					{religions.map((religion, index) => {
						return (
							<FormControlLabel
								key={index}
								control={<Radio />}
								label={religion}
								value={religion}
							/>
						);
					})}
				</RadioGroup>
				<FormControlLabel
					control={
						<TextField
							onChange={changeEqualityDetails("religion")}
							id="standard-basic"
							label=""
							variant="standard"
						/>
					}
					label="If other religion or belief, please write in:"
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

export default ReligionEqualityForm;
