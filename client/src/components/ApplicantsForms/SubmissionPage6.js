/* eslint-disable react/no-unescaped-entities */
import React from "react";

function SubmissionPage6() {
	return (
		<>
			<p>
				We seek to ensure that our organisation and our services are relevant
				and accessible to all. We welcome people from the widest possible
				diversity of background, culture and experience.
				<br></br>
				<br></br>
				We collect this data so that we can monitor the effectiveness of our
				approach and understand the diversity of our people. We recognise that
				the data disclosed in this section is highly sensitive and will be
				treated with strictest confidence.
				<br></br>
				<br></br>
				Elements of this section are mandatory to complete, however the
				information you provide is voluntary. If you do not wish to complete any
				question in this section, please select "prefer not to say".
				<br></br>
				<br></br>
				The information for sex and date of birth will be used for payroll
				purposes if you are successful. This information will not be seen or
				viewed by members of the shortlisting or interview panels throughout the
				recruitment process and will not affect the outcome of your application.
			</p>
			<form>
				<h3>*Do you consider yourself to have a disability?</h3>
				<select>
					<option value="no">No</option>
					<option value="yes">Yes</option>
				</select>
				<h3>Age Band</h3>
				<select>
					<option value="">Please Select</option>
					<option value="18-25">18-25</option>
					<option value="26-33">26-33</option>
					<option value="34-41">34-41</option>
					<option value="42-49">42-49</option>
					<option value="50-57">50-57</option>
					<option value="58-64">58-64</option>
					<option value="65+">65+</option>
					<option value="prefer not to say">Prefer not to say</option>
				</select>
				<h3>*What best describes your ethnic group?</h3>
				<select>
					<option value="Other ethnic Group">Other ethnic Group</option>
					<option value="Asian or Asian British">Asian or Asian British</option>
					<option value="Black African, Caribbean or Black British">
						Black African, Caribbean or Black British
					</option>
					<option value="Mixed or Multiple ethnic groups">
						Mixed or Multiple ethnic groups
					</option>
					<option value="White">White</option>
				</select>
				<h3>If Other, please give details here *insert a text box here*</h3>
				<textarea />
				<h3>*Which best describes your Religion or Belief?</h3>
				<select>
					<option value="">Please Select</option>
					<option value="No religion or belief">No religion or belief</option>
					<option value="Buddhist">Buddhist</option>
					<option value="Christian">Christian</option>
					<option value="Hindu">Hindu</option>
					<option value="Jewish">Jewish</option>
					<option value="Muslim">Muslim</option>
					<option value="Sikh">Sikh</option>
					<option value="prefer not to say">Prefer not to say</option>
				</select>
				<h3>*Sexual Orientation:</h3>
				<select>
					<option value="">Please Select</option>
					<option value="Heterosexual">Heterosexual</option>
					<option value="Gay">Gay</option>
					<option value="Lesbian">Lesbian</option>
					<option value="Bisexual">Bisexual</option>
					<option value="Asexual">Asexual</option>
					<option value="Pansexual">Pansexual</option>
					<option value="Undecided">Undecided</option>
					<option value="prefer not to say">Prefer not to say</option>
				</select>
				<h3>*Which gender identity do you most identify with?</h3>
				<select>
					<option value="">Please Select</option>
					<option value="Male">Male</option>
					<option value="Female">Female</option>
					<option value="Intersex">Intersex</option>
					<option value="Non-binary">Non-binary</option>
					<option value="prefer not to say">Prefer not to say</option>
				</select>
				<h3>
					*Do you have caring responsibilities?If yes, please tick all that
					apply.
				</h3>
				<select>
					<option value="">Please Select</option>
					<option value="no">No</option>
					<option value="Primary carer of a child/children (under 18) ">
						Primary carer of a child/children (under 18){" "}
					</option>
					<option value="Primary carer of disabled child/children">
						Primary carer of disabled child/children
					</option>
					<option value="Primary carer of disabled adult (18 and over)">
						Primary carer of disabled adult (18 and over)
					</option>
					<option value="Primary carer of older person">
						Primary carer of older person
					</option>
					<option value="Secondary carer (another person carries out the main caring role)">
						Secondary carer (another person carries out the main caring role)
					</option>
					<option value="prefer not to say">Prefer not to say</option>
				</select>
				<br></br>
				<br></br>
				<button>Submit</button>
			</form>
			<p>
				Please Note: after clicking ‘Submit’, you will no longer have the
				opportunity to edit your application. Please ensure you have included
				everything you want us to review.
			</p>
		</>
	);
}

export default SubmissionPage6;
