import React, { useState } from "react";

function StatementPage3() {
	const [textarea, setTextarea] = useState();

	const handleChange = (e) => {
		setTextarea(e.target.value);
	};

	const onSubmit = (e) => {
		e.preventDefault();
		console.log(textarea);
	};

	return (
		<form onSubmit={onSubmit}>

			<label>
				*Please use the space below to tell us how you meet the person
				specification for this role by taking into consider your knowledge,
				experience, and skills. We are also keen to understand what motivated
				you to apply for this role and why you’re interested in working for the
				Hackney migrant Centre.
				<br></br>
				<textarea
					placeholder="Comments here.."
					value={textarea}
					onChange={handleChange}
				/>
			</label>
			<br></br>
			<button>Submit</button>
		</form>
	);
}

export default StatementPage3;
