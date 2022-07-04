import React, { useState } from "react";

function ApplicantsForm() {
	const [inputs, setInputs] = useState({
		firstName: "",
		surname: "",
		email: "",
		phone: "",
	});

	const handleChange = (event) => {
		const name = event.target.name;
		const value = event.target.value;
		setInputs((values) => ({ ...values, [name]: value }));
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		console.log(inputs);
	};

	return (
		<form onSubmit={handleSubmit}>
			<label>
				Name:
				<input
					type="text"
					name="firstName"
					placeholder="First Name"
					value={inputs.firstName}
					onChange={handleChange}
					required
				/>
			</label>
			<br></br>
			<label>
				Surname:
				<input
					type="text"
					name="surname"
					placeholder="Surname"
					value={inputs.surname}
					onChange={handleChange}
					required
				/>
			</label>
			<br></br>
			<label>
				Email:
				<input
					type="email"
					name="email"
					placeholder="Email"
					value={inputs.email}
					onChange={handleChange}
					required
				/>
			</label>
			<br></br>
			<label>
				Phone:
				<input
					type="number"
					name="phone"
					placeholder="Phone Number"
					value={inputs.phone}
					onChange={handleChange}
				/>
			</label>
			<br></br>
			<button>Submit Application</button>
		</form>
	);
}

export default ApplicantsForm;
