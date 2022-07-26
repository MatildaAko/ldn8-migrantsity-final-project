import pool from "../db";
import generalController from "./general";


const getApplicantById = (req, res) => {
    const applicantId = req.params.applicantId;
	const params = [applicantId];
	const queryString = `${generalController.applicantsQueryString} Where id = $1`;

	pool.query(generalController.applicantsSelect, params)
	.then((result) => {
		if (result.rows == 0) {
			res.status(400).send("Applicant doesn't exist!");
		} else {
			pool.query(queryString, params )
			.then((result) => res.status(201).json(result.rows))
			.catch((error) => res.status(500).json(error));
		}
	}).catch((error) => res.status(500).json(error));
};

const updateApplicant = (req, res) => {
    const applicantId = req.params.applicantId;
	const insideParams = [];
	const params = [applicantId];

	Object.keys(req.body).map((param, index) => {
    insideParams.push(`${param} = $${index + 2}`);
    params.push(req.body[param]);
	});

	const queryString = `Update applicants Set ${insideParams.join(",")} 
  					   		Where id = $1`;

	pool.query(generalController.applicantsSelect, [applicantId])
	.then((result) => {
		if (result.rows == 0) {
			res.status(400).send("Applicant doesn't exist!");
		} else {
			pool.query(queryString, params)
			.then(() => res.status(201).send("Applicant has been updated."))
			.catch((error) => res.status(500).json(error));
		}
	}).catch((error) => res.status(500).json(error));
};

const deleteApplicant = (req, res) => {
	const applicantId = req.params.applicantId;
	const queryString = "Delete From applicants Where id = $1";
	const params = [applicantId];

	pool.query(generalController.applicantsSelect, [applicantId])
	.then((result) => {
		if (result.rows == 0) {
			res.status(400).send("Applicant doesn't exist!");
		} else {
			pool.query(queryString, params)
			.then(() => res.status(201).send("Applicant has been deleted."))
			.catch((error) => res.status(500).json(error));
		}
	}).catch((error) => res.status(500).json(error));
};

const createNewApplicant = (req, res) => {
	const params = [];
	const values = [];
	const fields = [];

	// const username = `${req.body.first_name}-${req.body.surname}`;

	Object.keys(req.body).map((param, index) => {
    values.push(`$${index + 1}`);
    fields.push(param);
    params.push(req.body[param]);
	});

// Extra line to don't use users---------------------
	values.push(`$${Object.keys(req.body).length+1}`);
	fields.push("user_id");
    params.push(1);
//---------------------------------------------------

	const queryString = `Insert Into applicants (${fields.join(",")}) 
  					   		Values (${values.join(",")})`;
	pool.query(queryString, params)
	.then(() => res.status(201).send("Applicant created."))
	.catch((error) => res.status(500).json(error));
};

const getAllApplicants = (req, res) => {
    generalController.get(req, res, generalController.applicantsQueryString);
};

const getApplicantData = (req, res, query = "") => {
	const table = generalController.getTableName(req);
	const id = req.params[Object.keys(req.params)[0]];
	const queryString = query.length > 0 ? `Select * From (${query}) as t Where applicant_id = $1` : `Select * From ${table} Where applicant_id = $1`;
	pool.query(queryString, [id])
	.then((result) => res.status(201).json(result.rows))
	.catch((error) => res.status(500).json(error));
};

const getApplicantAllData = async (req, res) => {
	const allResult = [];
	const applicantId = req.params.applicantId;

	const educQuery = "Select * From education Where applicant_id = $1";
	const emplQuery = "Select * From employments Where applicant_id = $1";
	const qualQuery = "Select * From qualifications Where applicant_id = $1";
	const langQuery = "Select * From languages Where applicant_id = $1";
	const appQuery  = generalController.appOnlyQueryString+" Where applicant_id = $1";

	await pool.query(`${generalController.applicantsQueryString} Where id = $1`, [applicantId])
	.then((result) => result.rows.length>0&&allResult.push({ "Applicant": result.rows }))
	.catch((error) => res.status(500).json(error));

	await pool.query(educQuery, [applicantId])
	.then((result) => result.rows.length>0&&allResult.push({ "Education": result.rows }))
	.catch((error) => res.status(500).json(error));

	await pool.query(emplQuery, [applicantId])
	.then((result) => result.rows.length>0&&allResult.push({ "Employments": result.rows }))
	.catch((error) => res.status(500).json(error));

	await pool.query(qualQuery, [applicantId])
	.then((result) => result.rows.length>0&&allResult.push({ "Qualifications": result.rows }))
	.catch((error) => res.status(500).json(error));

	await pool.query(langQuery, [applicantId])
	.then((result) => result.rows.length>0&&allResult.push({ "Languages": result.rows }))
	.catch((error) => res.status(500).json(error));

	await pool.query(appQuery, [applicantId])
	.then((result) => {
		result.rows.length>0&&allResult.push({ "Applications": result.rows });
		res.status(201).json(allResult);
	}).catch((error) => res.status(500).json(error));
};

const createApplicantWithAllData = (req, res) => {
	let items  = [];
	let params = [];
	let values = [];
	let fields = [];
	let queryString = "";
	let lastValuesLength = 0;
	const addValue = (n) => {
		values.push(`$${n+1}`);
	};
	const addEducation = () => {
		fields = [];
		items  = [];
		req.body.education.map((param) => {
			fields = Object.keys(param);
			items.push(Object.values(param));
		});

		Object.values(items).map((param, index) => {
			params = params.concat(param);

		lastValuesLength = parseInt(values[values.length-1].replace("$", ""));
		values = [];
		fields.forEach((el, index) => {
			addValue(lastValuesLength+index);
		});
		queryString += ` educ${index} as (Insert Into education (${fields.join(",")}, applicant_id) 
			Values (${values.join(",")}, (select id from app) ) returning *), `;
		});
	};

	const addEmployments = () => {
		fields = [];
		items  = [];
		req.body.employments.map((param) => {
			fields = Object.keys(param);
			items.push(Object.values(param));
		});

		Object.values(items).map((param, index) => {
			params = params.concat(param);

		lastValuesLength = parseInt(values[values.length-1].replace("$", ""));
		values = [];
		fields.forEach((el, index) => {
			addValue(lastValuesLength+index);
		});
		queryString += ` employment${index} as (Insert Into employments (${fields.join(",")}, applicant_id) 
			Values (${values.join(",")}, (select id from app) ) returning *), `;
		});
	};

	const addQualification = () => {
		fields = [];
		items  = [];
		req.body.qualifications.map((param) => {
			fields = Object.keys(param);
			items.push(Object.values(param));
		});

		Object.values(items).map((param, index) => {
			params = params.concat(param);

		lastValuesLength = parseInt(values[values.length-1].replace("$", ""));
		values = [];
		fields.forEach((el, index) => {
			addValue(lastValuesLength+index);
		});
		queryString += ` qual${index} as (Insert Into qualifications (${fields.join(",")}, applicant_id) 
			Values (${values.join(",")}, (select id from app) ) returning *), `;
		});
	};

	const addLanguages = () => {
		fields = [];
		items  = [];
		req.body.languages.map((param) => {
			fields = Object.keys(param);
			items.push(Object.values(param));
		});

		Object.values(items).map((param, index) => {
			params = params.concat(param);

		lastValuesLength = parseInt(values[values.length-1].replace("$", ""));
		values = [];
		fields.forEach((el, index) => {
			addValue(lastValuesLength+index);
		});
		queryString += ` lang${index} as ( Insert Into languages (${fields.join(",")}, applicant_id) 
			Values (${values.join(",")}, (select id from app)) returning *), `;
		});
	};

	const addApplication = () => {
		fields = [];
		items  = [];
		req.body.application.map((param) => {
			fields = Object.keys(param);
			items.push(Object.values(param));
		});

		Object.values(items).map((param, index) => {
			params = params.concat(param);

		lastValuesLength = parseInt(values[values.length-1].replace("$", ""));
		values = [];
		fields.forEach((el, index) => {
			addValue(lastValuesLength+index);
		});
		queryString += ` application${index} as ( Insert Into applications (${fields.join(",")}, applicant_id) 
			Values (${values.join(",")}, (select id from app)) returning *), `;
		});
	};

	//prepare query to add applicant
	Object.keys(req.body).filter((obj) => obj!=="education" && obj!=="employments"&& obj!=="application"&& obj!=="qualifications"&& obj!=="languages" ).map((param) => {
		addValue(values.length);
		fields.push(param);
		params.push(req.body[param]);
	});

	// Extra line to don't use users---------------------
	addValue(values.length);
	fields.push("user_id");
	params.push(1);
	//---------------------------------------------------

	queryString += ` with app as (Insert Into applicants (${fields.join(",")}) 
		Values (${values.join(",")}) returning id ), `;
	addEducation();
	addEmployments();
	addQualification();
	addLanguages();
	addApplication();

	queryString = queryString.slice(0, -2);
	queryString += " select * from app;";

	console.log( params, params.length);
	console.log(queryString);

	pool.query(queryString, params)
	.then(() => {
		res.status(201).send("All records added.");
	}).catch((error) => {
		res.status(500).json(error);
		console.error(error);
	});
};

module.exports = {
	getApplicantById,
    createNewApplicant,
    updateApplicant,
    deleteApplicant,
    getAllApplicants,
	getApplicantData,
	getApplicantAllData,
	createApplicantWithAllData,
};