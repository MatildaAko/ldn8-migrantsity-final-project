import React, { useState } from "react";
import { Box, FormControl, MenuItem, Select, TextField } from "@mui/material";
import { countries } from "./CountryOptions";

const PersonalDetails = ({ handleChange, userDetails, setUserDetails }) => {
	const [knownCountries, setKnownCountries] = useState("");
	const handleChangeCountries = (event) => {
		setKnownCountries(event.target.value);
		setUserDetails({ ...userDetails, ["country"]: event.target.value });
	};
	const [mobile, setMobile] = useState("");
	const [telephone, setTelephone] = useState("");
		const setTelephoneValue = (e) => {
			e.target.value = e.target.value.replace(/[^0-9+-]/g, "");
			setTelephone(e.target.value);
			setUserDetails({
				...userDetails,
				["telephone"]: telephone,
			});
		};

		const setMobileValue = (e) => {
			e.target.value = e.target.value.replace(/[^0-9+-]/g, "");
			setMobile(e.target.value);
			setUserDetails({
				...userDetails,
				["mobile"]: mobile,
			});
		};
	return (
		<>
			<h2>Personal Details</h2>
			<p>
				Bear in mind we take care of your personal data. Personal information
				such as below will be kept anonymous and only be revealed to our
				recruiters if you are shortlisted.
			</p>
			<Box
				component="form"
				sx={{
					display: "flex",
					flexDirection: "column",
					"& > :not(style)": { m: 1 },
				}}
				autoComplete="off"
			>
				<label htmlFor="first_name">
					First Name<span className="asterisk">*</span>
				</label>
				<TextField
					id="first_name"
					label=""
					variant="outlined"
					onChange={handleChange("first_name")}
				/>
				<label htmlFor="last_name">
					Last Name<span className="asterisk">*</span>
				</label>
				<TextField
					id="last_name"
					label=""
					variant="outlined"
					onChange={handleChange("last_name")}
				/>
				<label htmlFor="address1">
					Address1<span className="asterisk">*</span>
				</label>
				<TextField
					id="address1"
					label=""
					variant="outlined"
					onChange={handleChange("address1")}
				/>
				<label htmlFor="address2">
					Address2<span className="asterisk">*</span>
				</label>
				<TextField
					id="address2"
					label=""
					variant="outlined"
					onChange={handleChange("address2")}
				/>
				<label htmlFor="address3">Address3</label>
				<TextField
					id="address3"
					label=""
					variant="outlined"
					onChange={handleChange("address3")}
				/>
				<label htmlFor="town">Town</label>
				<TextField
					id="town"
					label=""
					variant="outlined"
					onChange={handleChange("town")}
				/>
				<FormControl
					variant="standard"
					sx={{ m: 1, minWidth: 200 }}
					size="small"
				>
					<label htmlFor="country">Country</label>
					<Select
						labelId="country"
						value={knownCountries}
						label=""
						onChange={handleChangeCountries}
						variant="outlined"
					>
						{countries.map((country, index) => {
							return (
								<MenuItem key={index} value={country}>
									{country}
								</MenuItem>
							);
						})}
					</Select>
				</FormControl>
				<label htmlFor="postcode">
					Postcode / Zip Code<span className="asterisk">*</span>
				</label>
				<TextField
					id="postcode"
					label=""
					variant="outlined"
					onChange={handleChange("postcode")}
				/>
				<label htmlFor="telephone">Telephone</label>
				<TextField
					id="telephone"
					type="tel"
					value={telephone}
					label=""
					variant="outlined"
					size="small"
					onChange={setTelephoneValue}
				/>
				<label htmlFor="mobile">Mobile</label>
				<TextField
					id="mobile"
					type="tel"
					value={mobile}
					label=""
					variant="outlined"
					size="small"
					onChange={setMobileValue}
				/>
				<label htmlFor="email">
					Email<span className="asterisk">*</span>
				</label>
				<TextField
					type={"email"}
					id="email"
					label=""
					variant="outlined"
					onChange={handleChange("email")}
				/>
			</Box>
		</>
	);
};

export default PersonalDetails;
