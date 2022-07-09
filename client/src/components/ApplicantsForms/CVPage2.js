import React from "react";

import { TextField } from "@mui/material";

function CVPage2({ values, handleChange }) {
	return (
		<>
			<div>CV Upload and Supporting Statement</div>
			<br />
			<TextField
				id="outlined-multiline-static"
				label="CV"
				multiline
				rows={4}
				variant="outlined"
				onChange={handleChange("cv")}
				defaultValue={values.cv}
			/>
			<br />
			<br />
		</>
	);
}

export default CVPage2;
