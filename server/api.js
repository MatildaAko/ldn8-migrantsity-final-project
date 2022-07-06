import { Router } from "express";
import pool from "./db";
// import { query } from "./db";

const router = Router();

router.get("/", (_, res) => {
	res.json({ message: "Hello, world!" });
});

//////--------- Basic Data --------//////

//Applicants
router.get("/applicants", (req, res) => {
	const queryString = `
		Select applicants.*, username, email, reg_date, user_types.user_type, genders.gender,
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
		Inner join religions on religions.id = religion_id`;
	pool.query(queryString)
	.then((result) => res.status(201).json(result.rows))
	.catch((error) => res.status(500).json(error));
});

router.get("/applicants/:applicantId", (req, res) => {
	const applicantId = req.params.applicantId;
	const params = [applicantId];
	const selectQuery = "Select * From applicants Where id = $1";
	const queryString = `
		Select applicants.*, username, email, reg_date, user_types.user_type, genders.gender,
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
		Inner join religions on religions.id = religion_id
		Where applicants.id = $1`;
console.log(applicantId, selectQuery, queryString);
	pool.query(selectQuery, params)
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

	Object.keys(req.body).map((param, index) => {
    values.push(`$${index + 1}`);
    fields.push(param);
    params.push(req.body[param]);
	});

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

	const selectQuery = "Select * From applicants Where id = $1";
	const queryString = `Update applicants Set ${insideParams.join(",")} 
  					   		Where id = $1`;

	pool.query(selectQuery, [applicantId])
	.then((result) => {
		if (result.rows == 0) {
			res.status(400).send("Applicant doesn't exist!");
		} else {
			pool.query(queryString, params)
			.then(() => res.status(201).send("Applicant created."))
			.catch((error) => res.status(500).json(error));
		}
	}).catch((error) => res.status(500).json(error));
});

router.delete("/applicants/:applicantId", (req, res) => {
	const applicantId = req.params.applicantId;
	const selectQuery = "Select * From applicants Where id = $1";
	const queryString = "Delete From applicants Where id = $1";
	const params = [applicantId];
	pool.query(selectQuery, [applicantId])
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
router.get("/users", (req, res) => {
	const queryString = "Select user_types.user_type, users.* From users Inner join user_types on user_types.id = type_id";
	pool.query(queryString)
	.then((result) => res.status(201).json(result.rows))
	.catch((error) => res.status(500).json(error));
});

router.post("/users", (req, res) => {
	const { username, email, type_id } = req.body;
	const queryString = "Insert Into users (username, email, type_id) Values ($1, $2, $3)";
	const params = [ username, email, type_id ];
	pool.query(queryString, params)
	.then(() => res.status(201).send("User created."))
	.catch((error) => res.status(500).json(error));
});

//Jobs
router.get("/jobs", (req, res) => {
	const queryString = "Select * From jobs";
	pool.query(queryString)
	.then((result) => res.status(201).json(result.rows))
	.catch((error) => res.status(500).json(error));
});

//Applications
router.get("/applications/:applicationId", (req, res) => {
	const id = req.params.applicationId;
	const queryString = "Select * From applications where id = $1";
	pool.query(queryString, [id])
	.then((result) => res.status(201).json(result.rows))
	.catch((error) => res.status(500).json(error));
});

router.get("/applications", (req, res) => {
	const queryString = "Select * From applications";
	pool.query(queryString)
	.then((result) => res.status(201).json(result.rows))
	.catch((error) => res.status(500).json(error));
});

router.get("/:applicantId/applications", (req, res) => {
	const id = req.params.applicantId;
	const queryString = "Select * From applications where applicant_id = $1";
	pool.query(queryString, [id])
	.then((result) => res.status(201).json(result.rows))
	.catch((error) => res.status(500).json(error));
});

export default router;
