import React from "react";

import { TextField } from "@mui/material";

function StatementPage3({ values, handleChange }) {
	return (
		<>
			<h1>Supporting Statement</h1>
			<p>
				*Please use the space below to tell us how you meet the person
				specification for this role by taking into consider your knowledge,
				experience, and skills. We are also keen to understand what motivated
				you to apply for this role and why you’re interested in working for the
				Hackney migrant Centre.
			</p>

			<TextField
				label="Supporting Statement"
				multiline
				rows={4}
				variant="outlined"
				value={values.supp_statement}
				onChange={handleChange("supp_statement")}
				defaultValue={values.supp_statement}
			/>
			<br />
			<br />
		</>
	);
}

export default StatementPage3;
