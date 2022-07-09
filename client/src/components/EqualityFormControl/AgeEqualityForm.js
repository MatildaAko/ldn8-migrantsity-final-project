{
	/* Age */
}
import React, { useRef } from "react";

import {
	Box,
	FormLabel,
	FormControl,
	FormGroup,
	FormControlLabel,
	Checkbox,
} from "@mui/material";

function AgeEqualityForm({ handleChange }) {
	const ref = useRef(null);

	return (
		<Box sx={{ display: "flex" }}>
			<FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
				<FormLabel component="legend">
					<b>Age</b>
				</FormLabel>
				<FormGroup row={true}>
					<FormControlLabel
						control={
							<Checkbox
								ref={ref}
								onChange={handleChange("age_band")}
								name="16-24"
							/>
						}
						value="16-24"
						label="16-24"
						labelPlacement="start"
					/>
					<FormControlLabel
						control={
							<Checkbox
								ref={ref}
								onChange={handleChange("age_band")}
								name="25-29"
							/>
						}
						value="25-29"
						label="25-29"
						labelPlacement="start"
					/>
					<FormControlLabel
						control={
							<Checkbox
								ref={ref}
								onChange={handleChange("age_band")}
								name="30-34"
							/>
						}
						value="30-34"
						label="30-34"
						labelPlacement="start"
					/>
					<FormControlLabel
						control={
							<Checkbox
								ref={ref}
								onChange={handleChange("age_band")}
								name="35-39"
							/>
						}
						value="35-39"
						label="35-39"
						labelPlacement="start"
					/>
					<FormControlLabel
						control={
							<Checkbox
								ref={ref}
								onChange={handleChange("age_band")}
								name="40-44"
							/>
						}
						value="40-44"
						label="40-44"
						labelPlacement="start"
					/>
					<FormControlLabel
						control={
							<Checkbox
								ref={ref}
								onChange={handleChange("age_band")}
								name="45-49"
							/>
						}
						value="45-49"
						label="45-49"
						labelPlacement="start"
					/>
					<FormControlLabel
						control={
							<Checkbox
								ref={ref}
								onChange={handleChange("age_band")}
								name="50-54"
							/>
						}
						value="50-54"
						label="50-54"
						labelPlacement="start"
					/>
					<FormControlLabel
						control={
							<Checkbox
								ref={ref}
								onChange={handleChange("age_band")}
								name="55-59"
							/>
						}
						value="55-59"
						label="55-59"
						labelPlacement="start"
					/>
					<FormControlLabel
						control={
							<Checkbox
								ref={ref}
								onChange={handleChange("age_band")}
								name="60-64"
							/>
						}
						value="60-64"
						label="60-64"
						labelPlacement="start"
					/>
					<FormControlLabel
						control={
							<Checkbox
								ref={ref}
								onChange={handleChange("age_band")}
								name="65+"
							/>
						}
						value="65+"
						label="65+"
						labelPlacement="start"
					/>
					<FormControlLabel
						control={
							<Checkbox
								ref={ref}
								onChange={handleChange("age_band")}
								name="Prefer not to say"
							/>
						}
						value="N/A"
						label="Prefer not to say"
						labelPlacement="start"
					/>
				</FormGroup>
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
