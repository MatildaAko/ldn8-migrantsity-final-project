/* eslint-disable react/no-unescaped-entities */
import React, { useState } from "react";

import "../../styles/JobsHistory.css";

import EmploymentModal from "../Modals/EmploymentModal";
import EducationHistoryModal from "../Modals/EducationHistoryModal";
import ProfessionalQualificationsModal from "../Modals/ProfessionalQualificationsModal";
import LanguagesModal from "../Modals/LanguagesModal";

function EmploymentPage4(/*{ values, handleChange }*/) {
	const [employmentInfo, setEmploymentInfo] = useState([]);
	const [educationInfo, setEducationInfo] = useState([]);
	const [professionalInfo, setProfessionalInfo] = useState([]);
	const [languageInfo, setLanguageInfo] = useState([]);

	// console.log(employmentInfo);

	return (
		<>
			<h1>
				Right to Work, Employment, Education, Qualification and Language History
			</h1>
			<div className="featureJobs">
				<h2>Employment History</h2>
				<p>
					We require information for the previous three years of your employment
					history.
				</p>
				<div className="paragraphAndModalButton">
					<p>
						Please click on the 'Add' button to add your employment history.
						Click on the text highlighted in red to edit your entry.
					</p>
					<EmploymentModal
						setEmploymentInfo={setEmploymentInfo}
						employmentInfo={employmentInfo}
					/>
				</div>
				{employmentInfo.map((employment, index) => {
					return (
						<div key={index}>
							<ul>
								<li>{employment.position}</li>
								<li>{employment.employer}</li>
								<li>{employment.currentlyWorking ? "yes" : "no"}</li>
								<li>{JSON.stringify(employment.startDate.toLocaleString())}</li>
								<li>{JSON.stringify(employment.endDate)}</li>
								<li>{employment.responsibilities}</li>
								<li>{employment.leavingReason}</li>
							</ul>
						</div>
					);
				})}
				<br />
				<br />
			</div>
			<div className="featureJobs">
				<h2>Education History</h2>
				<p>
					Please click on the 'Add' button to add schools / colleges /
					universities or courses attended. Click to EDIT
				</p>
				<div>
					<div className="paragraphAndModalButton">
						<p>
							Please click on the 'Add' button to add your education history.
							Click on the text highlighted in red to edit your entry.
						</p>
						<EducationHistoryModal
							setEducationInfo={setEducationInfo}
							educationInfo={educationInfo}
						/>
					</div>
					{educationInfo.map((education, index) => {
						return (
							<div key={index}>
								<ul>
									<li>{education.schoolName}</li>
									<li>{education.course}</li>
									<li>{education.subject}</li>
									<li>{education.address1}</li>
									<li>{education.address2}</li>
									<li>{education.town}</li>
									<li>{education.country}</li>
									<li>{education.telephone}</li>
									<li>{education.mobile}</li>
									<li>{education.responsibilities}</li>
									<li>{education.leavingReason}</li>
								</ul>
							</div>
						);
					})}
				</div>
				<br />
			</div>
			<div className="featureJobs">
				<h2>Professional Qualifications</h2>
				<div className="paragraphAndModalButton">
					<p>
						Please click on the 'Add' button to add exams. Click on the text
						highlighted in red to edit your entry.
					</p>
					<ProfessionalQualificationsModal
						setProfessionalInfo={setProfessionalInfo}
						professionalInfo={professionalInfo}
					/>
				</div>
				{professionalInfo.map((professional, index) => {
					return (
						<div key={index}>
							<ul>
								<li>{professional.title}</li>
								<li>{JSON.stringify(professional.date.toLocaleString())}</li>
								<li>{professional.status}</li>
							</ul>
						</div>
					);
				})}
				<br />
				<br />
			</div>
			<div className="featureJobs">
				<h2>Languages</h2>
				<div className="paragraphAndModalButton">
					<p>
						Please click on the 'Add' button to add languages. Click on the text
						highlighted in red to edit your entry.
					</p>
					<LanguagesModal
						setLanguageInfo={setLanguageInfo}
						languageInfo={languageInfo}
					/>
				</div>
				<br />
				<br />
			</div>
		</>
	);
}

export default EmploymentPage4;
