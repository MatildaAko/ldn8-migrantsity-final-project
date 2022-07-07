import { Router } from "express";
import pool from "./db";

const router = Router();

router.get("/", (_, res) => {
	res.json({ message: "Hello, world!" });
});

//////////--------- CRUD Data --------////////////

const getTableName = (req) => {
	const regexp = "(?<=\/)(.*?)(?=\/)";
	const path = req.path;
	const firstPart = path.match(regexp);
	const isFirstPartNumber = Number.isInteger(parseInt(firstPart, 10));
	const lastPart = path.slice(path.lastIndexOf("/")+1);
	return path.match(/[/]/g).length==1 ? path.slice(1) : isFirstPartNumber?lastPart:firstPart ;
};

const get = (table, req, res, query = "") => {
	const queryString = query.length > 0 ? query : `Select * From ${table}`;
	pool.query(queryString)
	.then((result) => res.status(201).json(result.rows))
	.catch((error) => res.status(500).json(error));
};

const post = (table, req, res) => {
	const params = [];
	const values = [];
	const fields = [];

	Object.keys(req.body).map((param, index) => {
		values.push(`$${index + 1}`);
		fields.push(param);
		params.push(req.body[param]);
	});

	const queryString = `Insert Into ${table} (${fields.join(",")}) 
  					   		Values (${values.join(",")})`;
	pool.query(queryString, params)
	.then(() => res.status(201).send("New record added."))
	.catch((error) => res.status(500).json(error));
};

const put = (table, req, res) => {
	const id = req.params[Object.keys(req.params)[0]];
	const insideParams = [];
	const params = [id];

	Object.keys(req.body).map((param, index) => {
    insideParams.push(`${param} = $${index + 2}`);
    params.push(req.body[param]);
	});

	const selectQuery = `Select * From ${table} Where id = $1`;
	const queryString = `Update ${table} Set ${insideParams.join(",")} 
  					   		Where id = $1`;
	pool.query(selectQuery, [id])
	.then((result) => {
		if (result.rows == 0) {
			res.status(400).send("Record doesn't exist!");
		} else {
			pool.query(queryString, params)
			.then(() => res.status(201).send("Record has been updated."))
			.catch((error) => res.status(500).json(error));
		}
	}).catch((error) => res.status(500).json(error));
};

const del = (table , req, res) => {
	const id = req.params[Object.keys(req.params)[0]];
	const selectQuery = `Select * From ${table} Where id = $1`;
	const queryString = `Delete From ${table} Where id = $1`;
	const params = [id];
	pool.query(selectQuery, [id])
	.then((result) => {
		if (result.rows == 0) {
			res.status(400).send("Record doesn't exist!");
		} else {
			pool.query(queryString, params)
			.then(() => res.status(201).send("Record has been deleted."))
			.catch((error) => res.status(500).json(error));
		}
	}).catch((error) => res.status(500).json(error));

};

const getApplicantData = (table, req, res, query = "") => {
	const id = req.params[Object.keys(req.params)[0]];
	const queryString = query.length > 0 ? `Select * From (${query}) as t Where applicant_id = $1` : `Select * From ${table} Where applicant_id = $1`;
	pool.query(queryString, [id])
	.then((result) => res.status(201).json(result.rows))
	.catch((error) => res.status(500).json(error));
};

//////////--------- Select Queries --------////////////
const applicantsSelect = "Select * From applicants Where id = $1";
const applicantsQueryString = `		
	Select * from (Select applicants.*, genders.gender,
		sex_orientations.sex_orientation, cities.city, age_bands.age_band, 
		ethnic_groups.ethnic_group, religions.religion
	From applicants
	Inner join users on users.id = user_id
	Inner join user_types on user_types.id = type_id
	Inner join genders on genders.id = gender_id
	Inner join sex_orientations on sex_orientations.id = sex_orient_id
	Inner join cities on cities.id = city_id
	Inner join age_bands on age_bands.id = age_band_id
	Inner join ethnic_groups on ethnic_groups.id = ethnic_group_id
	Inner join religions on religions.id = religion_id) as selectTable `;

const applicationsQueryString = `
	Select * from (Select applications.id as id, applicant_id, first_name, surname, email, 
			right_to_work, skills, gap_reasons, job_id, 
			jobs.title as job_title, jobs.description as job_description, 
			skills_require, cover_letter, applications.description, status_id, status
	From applications 
	Inner join applicants on applicants.id = applicant_id
	Inner join jobs on jobs.id = job_id
	Inner join application_status on application_status.id = status_id) selectTable `;

////////////////////////////////////////////////////////

//Applicants
router.get("/applicants", (req, res) => get(getTableName(req), req, res, applicantsQueryString));

router.get("/applicants/:applicantId", (req, res) => {
	const applicantId = req.params.applicantId;
	const params = [applicantId];
	const queryString = `${applicantsQueryString} Where id = $1`;

	pool.query(applicantsSelect, params)
	.then((result) => {
		if (result.rows == 0) {
			res.status(400).send("Applicant doesn't exist!");
		} else {
			pool.query(queryString, params )
			.then((result) => res.status(201).json(result.rows))
			.catch((error) => res.status(500).json(error));
		}
	}).catch((error) => res.status(500).json(error));
});

router.post("/applicants", (req, res) => {
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
});

router.put("/applicants/:applicantId", (req, res) => {
	const applicantId = req.params.applicantId;
	const insideParams = [];
	const params = [applicantId];

	Object.keys(req.body).map((param, index) => {
    insideParams.push(`${param} = $${index + 2}`);
    params.push(req.body[param]);
	});

	const queryString = `Update applicants Set ${insideParams.join(",")} 
  					   		Where id = $1`;

	pool.query(applicantsSelect, [applicantId])
	.then((result) => {
		if (result.rows == 0) {
			res.status(400).send("Applicant doesn't exist!");
		} else {
			pool.query(queryString, params)
			.then(() => res.status(201).send("Applicant has been updated."))
			.catch((error) => res.status(500).json(error));
		}
	}).catch((error) => res.status(500).json(error));
});

router.delete("/applicants/:applicantId", (req, res) => {
	const applicantId = req.params.applicantId;
	const queryString = "Delete From applicants Where id = $1";
	const params = [applicantId];

	pool.query(applicantsSelect, [applicantId])
	.then((result) => {
		if (result.rows == 0) {
			res.status(400).send("Applicant doesn't exist!");
		} else {
			pool.query(queryString, params)
			.then(() => res.status(201).send("Applicant has been deleted."))
			.catch((error) => res.status(500).json(error));
		}
	}).catch((error) => res.status(500).json(error));

});

//Users
router.get("/users", (req, res) => get(getTableName(req), req, res));
router.post("/users", (req, res) => post(getTableName(req), req, res));
router.put("/users/:userId", (req, res) => put(getTableName(req), req, res));
router.delete("/users/:userId", (req, res) => del(getTableName(req), req, res));

//Jobs
router.get("/jobs", (req, res) => get(getTableName(req), req, res));
router.post("/jobs", (req, res) => post(getTableName(req), req, res));
router.put("/jobs/:jobId", (req, res) => put(getTableName(req), req, res));
router.delete("/jobs/:jobId", (req, res) => del(getTableName(req), req, res));

//Cities
router.get("/cities", (req, res) => get(getTableName(req), req, res));
router.post("/cities", (req, res) => post(getTableName(req), req, res));
router.put("/cities/:cityId", (req, res) => put(getTableName(req), req, res));
router.delete("/cities/:cityId", (req, res) => del(getTableName(req), req, res));

//Flexible Working
router.get("/flexible_working", (req, res) => get(getTableName(req), req, res));
router.post("/flexible_working", (req, res) => post(getTableName(req), req, res));
router.put("/flexible_working/:id", (req, res) => put(getTableName(req), req, res));
router.delete("/flexible_working/:id", (req, res) => del(getTableName(req), req, res));

//Working Pattern
router.get("/working_pattern", (req, res) => get(getTableName(req), req, res));
router.post("/working_pattern", (req, res) => post(getTableName(req), req, res));
router.put("/working_pattern/:id", (req, res) => put(getTableName(req), req, res));
router.delete("/working_pattern/:id", (req, res) => del(getTableName(req), req, res));

//Genders
router.get("/genders", (req, res) => get(getTableName(req), req, res));

//Sex Orientations
router.get("/sex_orientations", (req, res) => get(getTableName(req), req, res));

//Age Bands
router.get("/age_bands", (req, res) => get(getTableName(req), req, res));

//Religions
router.get("/religions", (req, res) => get(getTableName(req), req, res));

//Ethnic Groups
router.get("/ethnic_groups", (req, res) => get(getTableName(req), req, res));

//Applications
router.get("/applications/:applicationId", (req, res) => {
	const applicationId = req.params.applicationId;
	const queryString = `${applicationsQueryString} where id = $1`;
	pool.query(queryString, [applicationId])
	.then((result) => res.status(201).json(result.rows))
	.catch((error) => res.status(500).json(error));
});

router.get("/applications", (req, res) => get(getTableName(req), req, res, applicationsQueryString ));
router.get("/:applicantId/applications", (req, res) => getApplicantData(getTableName(req), req, res, applicationsQueryString));
router.post("/applications", (req, res) => post(getTableName(req), req, res));
router.put("/applications/:applicationId", (req, res) => put(getTableName(req), req, res));
router.delete("/applications/:applicationId", (req, res) => del(getTableName(req), req, res));

//Education
router.get("/education", (req, res) => get(getTableName(req), req, res));
router.get("/:applicantId/education", (req, res) => getApplicantData(getTableName(req), req, res));
router.post("/education", (req, res) => post(getTableName(req), req, res));
router.put("/education/:educationId", (req, res) => put(getTableName(req), req, res));
router.delete("/education/:educationId", (req, res) => del(getTableName(req), req, res));

//Exams
router.get("/exams", (req, res) => get(getTableName(req), req, res));
router.get("/:applicantId/exams", (req, res) => getApplicantData(getTableName(req), req, res));
router.post("/exams", (req, res) => post(getTableName(req), req, res));
router.put("/exams/:examId", (req, res) => put(getTableName(req), req, res));
router.delete("/exams/:examId", (req, res) => del(getTableName(req), req, res));

//Qualifications
router.get("/qualifications", (req, res) => get(getTableName(req), req, res));
router.get("/:applicantId/qualifications", (req, res) => getApplicantData(getTableName(req), req, res));
router.post("/qualifications", (req, res) => post(getTableName(req), req, res));
router.put("/qualifications/:qualificationId", (req, res) => put(getTableName(req), req, res));
router.delete("/qualifications/:qualificationId", (req, res) => del(getTableName(req), req, res));

//Languages
router.get("/languages", (req, res) => get(getTableName(req), req, res));
router.get("/:applicantId/languages", (req, res) => getApplicantData(getTableName(req), req, res));
router.post("/languages", (req, res) => post(getTableName(req), req, res));
router.put("/languages/:languageId", (req, res) => put(getTableName(req), req, res));
router.delete("/languages/:languageId", (req, res) => del(getTableName(req), req, res));

/////////// Get All Related to Applicants ////////////
router.get("/:applicantId/applicantAllData", (req, res) => {
	const allResult = [];
	const applicantId = req.params.applicantId;

	const educQuery = "Select * From education Where applicant_id = $1";
	const examQuery = "Select * From exams Where applicant_id = $1";
	const qualQuery = "Select * From qualifications Where applicant_id = $1";
	const langQuery = "Select * From languages Where applicant_id = $1";

	pool.query(`${applicantsQueryString} Where id = $1`, [applicantId])
	.then((result) => result.rows.length>0&&allResult.push({ "Applicant": result.rows }))
	.catch((error) => res.status(500).json(error));

	pool.query(educQuery, [applicantId])
	.then((result) => result.rows.length>0&&allResult.push({ "Education": result.rows }))
	.catch((error) => res.status(500).json(error));

	pool.query(examQuery, [applicantId])
	.then((result) => result.rows.length>0&&allResult.push({ "Exams": result.rows }))
	.catch((error) => res.status(500).json(error));

	pool.query(qualQuery, [applicantId])
	.then((result) => result.rows.length>0&&allResult.push({ "Qualifications": result.rows }))
	.catch((error) => res.status(500).json(error));

	pool.query(langQuery, [applicantId])
	.then((result) => {
		result.rows.length>0&&allResult.push({ "Languages": result.rows });
		res.status(201).json(allResult);
	}).catch((error) => res.status(500).json(error));
});

export default router;
