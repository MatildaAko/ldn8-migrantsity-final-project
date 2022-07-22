import React from "react";
import { Box, Button, Typography } from "@mui/material";
import { PropTypes } from "prop-types";
import axios from "axios";

const TabPanel = ({ children, value, index, setValue,postApplication, postEquality, handleReset, userDetails, ...other }) => {
  // console.log(handleTabChange);
  return (
		<div
			role="tabpanel"
			hidden={value !== index}
			id={`step-${index}`}
			aria-labelledby={`vertical-tab-${index}`}
			{...other}
		>
			{value === index && (
				<Box sx={{ p: 3 }}>
					<Typography>{children}</Typography>
					{index !== 0 && (
						<Button onClick={() => setValue((value) => (value -= 1))}>
							Back
						</Button>
					)}
					{index !== 2 && (
						<Button onClick={() => setValue((value) => (value += 1))}>
							Next
						</Button>
					)}
					{index === 2 && (
						<Button onClick={()=>{
							axios
								.post("/api/applications", userDetails)
								.then(function (response) {
									console.log(response);
								})
								.catch(function (error) {
									console.log(error);
								});
							handleReset();
}}>
							Submit
						</Button>
					)}
				</Box>
			)}
		</div>
	);
};

TabPanel.propTypes = {
	children: PropTypes.node,
	index: PropTypes.number.isRequired,
	value: PropTypes.number.isRequired,
};

export default TabPanel;