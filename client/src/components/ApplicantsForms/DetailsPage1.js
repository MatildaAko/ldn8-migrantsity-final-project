import React, { useState } from "react";

function DetailsPage1() {
	const [radioState, setRadioState] = useState(null);
	const [radioStateRightWork, setRadioStateRightWork] = useState(null);

	const handleRadioChangeCurrentlyWork = (e) => {
		// console.log(e.target.value);
		setRadioState(e.target.value);
	};

	const handleRadioChangeRightWork = (e) => {
		setRadioStateRightWork(e.target.value);
	};

	return (
		<>
			<div>
				<h3>*Do you currently work/ volunteer for Hackney Migrant Centre?</h3>
				<div className="radio">
					<label>
						<input
							type="radio"
							value="yes"
							checked={radioState === "yes"}
							onChange={handleRadioChangeCurrentlyWork}
						/>
						Yes
						<br></br>
						<input
							type="radio"
							value="no"
							checked={radioState === "no"}
							onChange={handleRadioChangeCurrentlyWork}
						/>
						No
					</label>
				</div>
			</div>
			<div>
				<h1>Right to Work</h1>
				<h3>*Do you have the Right to Work in the UK?</h3>
				<div className="radio">
					<label>
						<input
							type="radio"
							value="yes"
							checked={radioStateRightWork === "yes"}
							onChange={handleRadioChangeRightWork}
						/>
						Yes
						<br></br>
						<input
							type="radio"
							value="no"
							checked={radioStateRightWork === "no"}
							onChange={handleRadioChangeRightWork}
						/>
						No
					</label>
				</div>
			</div>
		</>
	);
}

export default DetailsPage1;
