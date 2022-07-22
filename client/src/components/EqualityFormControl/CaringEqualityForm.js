{
	/* Do you have caring responsibilities? If yes, please tick all that apply.
	 */
}
import React from "react";

import {
	Box,
	Select,
	FormControl,
	FormLabel,
} from "@mui/material";

function CaringEqualityForm({ values, changeEqualityDetails }) {
	return (
		<Box sx={{ display: "flex" }}>
			<FormControl sx={{ m: 3 }} component="fieldset" variant="outlined">
			<FormLabel component="legend">
					<b>
						Do you have caring responsibilities? If yes, please tick all that
						apply.
					</b>
				</FormLabel>
				<br />
				<Select native value={values.caring} onChange={changeEqualityDetails("caring")}>
					<option aria-label="Please Select" value="">
						Please Select
					</option>
					<option value="no">No</option>
					<option value="Primary carer of a child/children (under 18) ">
						Primary carer of a child/children (under 18){" "}
					</option>
					<option value="Primary carer of disabled child/children">
						Primary carer of disabled child/children
					</option>
					<option value="Primary carer of disabled adult (18 and over)">
						Primary carer of disabled adult (18 and over)
					</option>
					<option value="Primary carer of older person">
						Primary carer of older person
					</option>
					<option value="Secondary carer (another person carries out the main caring role)">
						Secondary carer (another person carries out the main caring role)
					</option>
					<option value="prefer not to say">Prefer not to say</option>
				</Select>
			</FormControl>
		</Box>
	);
}

export default CaringEqualityForm;
