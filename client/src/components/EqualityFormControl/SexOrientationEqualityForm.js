{
	/* What is your sexual orientation? */
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

function SexOrientationEqualityForm({ equality, changeEqualityDetails }) {
	const sexOrientation = [
		"Heterosexual",
		"Gay",
		"Lesbian",
		"Bisexual",
		"Asexual",
		"Pansexual",
		"Undecided",
		"Prefer not to say"	];
	return (
		<>
			<FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
				<FormLabel component="legend">
					<b>What is your sexual orientation?</b>
				</FormLabel>
				<RadioGroup
					required
					aria-label="sexOrientation"
					name="sexOrientation"
					value={equality.sex_orientation}
					onChange={changeEqualityDetails("sex_orientation")}
					sx={{
						display: "flex",
						flexDirection: "row",
						justifyContent: "flexStart",
					}}
				>
					{sexOrientation.map((orientation, index) => {
						return (
							<FormControlLabel
								key={index}
								control={<Radio />}
								label={orientation}
								value={orientation}
							/>
						);
					})}
				</RadioGroup>
				<FormControlLabel
					sx={{
						display: "flex",
						flexDirection: "row-reverse",
						justifyContent: "flexStart",
					}}
					control={
						<TextField
							onChange={changeEqualityDetails("sex_orientation")}
							id="standard-basic"
							label=""
							variant="standard"
						/>
					}
					label="If you prefer to use your own identity, please write in:"
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

export default SexOrientationEqualityForm;
