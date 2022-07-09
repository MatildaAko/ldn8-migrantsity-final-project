{
	/* Do you consider yourself to have a disability or health condition?    */
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

function DisabilityEqualityForm({ handleChange }) {
	const ref = useRef(null);
	return (
		<Box sx={{ display: "flex" }}>
			<FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
				<FormLabel component="legend">
					<b>
						Do you consider yourself to have a disability or health condition?{" "}
					</b>
				</FormLabel>
				<FormGroup row={true}>
					<FormControlLabel
						control={
							<Checkbox
								ref={ref}
								onChange={handleChange("disability")}
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
								onChange={handleChange("disability")}
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
								onChange={handleChange("disability")}
								name="not-answered"
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

export default DisabilityEqualityForm;
