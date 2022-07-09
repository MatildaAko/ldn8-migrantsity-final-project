{
	/* Gender */
}
import React, { useRef } from "react";

import {
	Box,
	TextField,
	FormLabel,
	FormControl,
	FormGroup,
	FormControlLabel,
	Checkbox,
} from "@mui/material";

function GenderEqualityForm({ handleChange }) {
    const ref = useRef(null);

	return (
		<Box sx={{ display: "flex" }}>
			<FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
				<FormLabel component="legend">
					<b>Gender</b>
				</FormLabel>
				<FormGroup row={true}>
					<FormControlLabel
						control={
							<Checkbox
								ref={ref}
								onChange={handleChange("gender")}
								name="male"
							/>
						}
						value="Male"
						label="Male"
						labelPlacement="start"
					/>
					<FormControlLabel
						control={
							<Checkbox
								ref={ref}
								onChange={handleChange("gender")}
								name="female"
							/>
						}
						value="Female"
						label="Female"
						labelPlacement="start"
					/>
					<FormControlLabel
						control={
							<Checkbox
								ref={ref}
								onChange={handleChange("gender")}
								name="intersex"
							/>
						}
						value="Intersex"
						label="Intersex"
						labelPlacement="start"
					/>
					<FormControlLabel
						control={
							<Checkbox
								ref={ref}
								onChange={handleChange("gender")}
								name="non-binary"
							/>
						}
						value="Non-binary"
						label="Non-binary"
						labelPlacement="start"
					/>
					<FormControlLabel
						control={
							<Checkbox
								ref={ref}
								onChange={handleChange("gender")}
								name="prefer-not-to-say"
							/>
						}
						value="N/A"
						label="Prefer not to say"
						labelPlacement="start"
					/>
				</FormGroup>
				<FormControlLabel
					control={
						<TextField
							id="standard-basic"
							label=""
							variant="standard"
							onChange={handleChange("gender")}
						/>
					}
					label="If you prefer to use your own gender identity, please write in:"
					labelPlacement="start"
				/>
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

export default GenderEqualityForm;
