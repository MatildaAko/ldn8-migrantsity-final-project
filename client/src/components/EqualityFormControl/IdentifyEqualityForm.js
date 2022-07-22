{
	/* Identify */
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

function IdentifyEqualityForm({ changeEqualityDetails }) {
	const ref = useRef(null);

	return (
		<Box sx={{ display: "flex" }}>
			<FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
				<FormLabel component="legend">
					Is the gender you identify with the same as your gender registered at
					birth?
				</FormLabel>
				<FormGroup row={true}>
					<FormControlLabel
						control={
							<Checkbox
								ref={ref}
								onChange={changeEqualityDetails("identify")}
								name="yes"
							/>
						}
						value="Yes"
						label="Yes"
						labelPlacement="start"
					/>
					<FormControlLabel
						control={
							<Checkbox
								ref={ref}
								onChange={changeEqualityDetails("identify")}
								name="no"
							/>
						}
						value="No"
						label="No"
						labelPlacement="start"
					/>
					<FormControlLabel
						control={
							<Checkbox
								ref={ref}
								onChange={changeEqualityDetails("identify")}
								name="prefer-not-to-say"
							/>
						}
						value="N/A"
						label="Prefer not to say"
						labelPlacement="start"
					/>
				</FormGroup>
			</FormControl>
		</Box>
	);
}

export default IdentifyEqualityForm;
