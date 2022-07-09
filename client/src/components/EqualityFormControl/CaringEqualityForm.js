{
	/* Do you have caring responsibilities? If yes, please tick all that apply.
	 */
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

function CaringEqualityForm({ handleChange }) {
	const ref = useRef(null);
	return (
		<Box sx={{ display: "flex" }}>
			<FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
				<FormLabel component="legend">
					<b>
						Do you have caring responsibilities? If yes, please tick all that
						apply.
					</b>
				</FormLabel>
				<FormGroup row={true}>
					<FormControlLabel
						control={
							<Checkbox
								ref={ref}
								onChange={handleChange("caring")}
								name="None"
							/>
						}
						value="None"
						label="None"
						labelPlacement="start"
					/>
					<FormControlLabel
						control={
							<Checkbox
								ref={ref}
								onChange={handleChange("caring")}
								name="Primary carer of a child/children (under 18)"
							/>
						}
						value="Primary carer of a child/children (under 18)"
						label="Primary carer of a child/children (under 18)"
						labelPlacement="start"
					/>
					<FormControlLabel
						control={
							<Checkbox
								ref={ref}
								onChange={handleChange("caring")}
								name="Primary carer of disabled child/children"
							/>
						}
						value="Primary carer of disabled child/children"
						label="Primary carer of disabled child/children"
						labelPlacement="start"
					/>
					<FormControlLabel
						control={
							<Checkbox
								ref={ref}
								onChange={handleChange("caring")}
								name="Primary carer of disabled adult (18 and over)"
							/>
						}
						value="Primary carer of disabled adult (18 and over)"
						label="Primary carer of disabled adult (18 and over)"
						labelPlacement="start"
					/>
					<FormControlLabel
						control={
							<Checkbox
								ref={ref}
								onChange={handleChange("caring")}
								name="Primary carer of older person"
							/>
						}
						value="Primary carer of older person"
						label="Primary carer of older person"
						labelPlacement="start"
					/>
					<FormControlLabel
						control={
							<Checkbox
								ref={ref}
								onChange={handleChange("caring")}
								name="Secondary carer (another person carries out the main caring role) "
							/>
						}
						value="Secondary carer (another person carries out the main caring role)"
						label="Secondary carer (another person carries out the main caring role) "
						labelPlacement="start"
					/>
					<FormControlLabel
						control={
							<Checkbox
								ref={ref}
								onChange={handleChange("caring")}
								name="not-answered"
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

export default CaringEqualityForm;
