import React, { useState } from "react";

function CriminalConvictionsPage5() {
	const [radioStateOne, setRadioStateOne] = useState(null);
	const [radioStateTwo, setRadioStateTwo] = useState(null);

	const handleRadioChangeOne = (e) => {
		// console.log(e.target.value);
		setRadioStateOne(e.target.value);
	};

	const handleRadioChangeTwo = (e) => {
		setRadioStateTwo(e.target.value);
	};
	return (
		<form>
			This role is exempt from the Rehabilitation of Offenders Act 1974 as it
			involves regulated activities with children and/or adults at risk.
			Successful candidates will be required to undertake an enhanced criminal
			record check provided by DBS England. Having a conviction will not
			necessarily bar candidates from working at Hackney Migrant Centre, this
			will depend on the circumstances and background to the offence(s).
			<h3>
				*Is there any reason why you could not work with vulnerable adults or
				children?
			</h3>
			<div className="radio">
				<label>
					<input
						type="radio"
						value="yes"
						checked={radioStateOne === "yes"}
						onChange={handleRadioChangeOne}
					/>
					Yes
					<br></br>
					<input
						type="radio"
						value="no"
						checked={radioStateOne === "no"}
						onChange={handleRadioChangeOne}
					/>
					No
				</label>
			</div>
			<h3>
				*Do you have any convictions, cautions, reprimands or final warnings
				(spent and unspent)?
			</h3>
			<div className="radio">
				<label>
					<input
						type="radio"
						value="yes"
						checked={radioStateTwo === "yes"}
						onChange={handleRadioChangeTwo}
					/>
					Yes
					<br></br>
					<input
						type="radio"
						value="no"
						checked={radioStateTwo === "no"}
						onChange={handleRadioChangeTwo}
					/>
					No
				</label>
			</div>
		</form>
	);
}

export default CriminalConvictionsPage5;
