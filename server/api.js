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
		Select applicants.*, genders.gender,
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
		Select applicants.*, genders.gender,
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

	const selectQuery = "Select * From applicants Where id = $1";
	const queryString = `Update applicants Set ${insideParams.join(",")} 
  					   		Where id = $1`;

	pool.query(selectQuery, [applicantId])
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

//Genders
router.get("/genders", (req, res) => {
	const queryString = "Select * From genders";
	pool.query(queryString)
	.then((result) => res.status(201).json(result.rows))
	.catch((error) => res.status(500).json(error));
});

//Sex Orientations
router.get("/sex_orientations", (req, res) => {
	const queryString = "Select * From sex_orientations";
	pool.query(queryString)
	.then((result) => res.status(201).json(result.rows))
	.catch((error) => res.status(500).json(error));
});

//Age Bands
router.get("/age_bands", (req, res) => {
	const queryString = "Select * From age_bands";
	pool.query(queryString)
	.then((result) => res.status(201).json(result.rows))
	.catch((error) => res.status(500).json(error));
});

//Flexible Working
router.get("/flexible_working", (req, res) => {
	const queryString = "Select * From flexible_working";
	pool.query(queryString)
	.then((result) => res.status(201).json(result.rows))
	.catch((error) => res.status(500).json(error));
});

//Working Pattern
router.get("/working_pattern", (req, res) => {
	const queryString = "Select * From working_pattern";
	pool.query(queryString)
	.then((result) => res.status(201).json(result.rows))
	.catch((error) => res.status(500).json(error));
});

//Religions
router.get("/religions", (req, res) => {
	const queryString = "Select * From religions";
	pool.query(queryString)
	.then((result) => res.status(201).json(result.rows))
	.catch((error) => res.status(500).json(error));
});

//Ethnic Groups
router.get("/ethnic_groups", (req, res) => {
	const queryString = "Select * From ethnic_groups";
	pool.query(queryString)
	.then((result) => res.status(201).json(result.rows))
	.catch((error) => res.status(500).json(error));
});

//Cities
router.get("/cities", (req, res) => {
	const queryString = "Select * From cities";
	pool.query(queryString)
	.then((result) => res.status(201).json(result.rows))
	.catch((error) => res.status(500).json(error));
});

//Applications
router.get("/applications/:applicationId", (req, res) => {
	const applicationId = req.params.applicationId;
	const queryString = "Select * From applications where id = $1";
	pool.query(queryString, [applicationId])
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
	const applicationId = req.params.applicantId;
	const queryString = "Select * From applications where applicant_id = $1";
	pool.query(queryString, [applicationId])
	.then((result) => res.status(201).json(result.rows))
	.catch((error) => res.status(500).json(error));
});

//Education
router.get("/:applicantId/education", (req, res) => {
	const applicantId = req.params.applicantId;
	const queryString = "Select * From education Where applicant_id = $1";
	pool.query(queryString, [applicantId])
	.then((result) => res.status(201).json(result.rows))
	.catch((error) => res.status(500).json(error));
});

router.post("/education", (req, res) => {
	const params = [];
	const values = [];
	const fields = [];

	Object.keys(req.body).map((param, index) => {
		values.push(`$${index + 1}`);
		fields.push(param);
		params.push(req.body[param]);
	});

	const queryString = `Insert Into education (${fields.join(",")}) 
  					   		Values (${values.join(",")})`;
	pool.query(queryString, params)
	.then(() => res.status(201).send("Education added."))
	.catch((error) => res.status(500).json(error));
});

router.put("/education/:educationId", (req, res) => {
	const educationId = req.params.educationId;
	const insideParams = [];
	const params = [educationId];

	Object.keys(req.body).map((param, index) => {
    insideParams.push(`${param} = $${index + 2}`);
    params.push(req.body[param]);
	});

	const selectQuery = "Select * From education Where id = $1";
	const queryString = `Update education Set ${insideParams.join(",")} 
  					   		Where id = $1`;

	pool.query(selectQuery, [educationId])
	.then((result) => {
		if (result.rows == 0) {
			res.status(400).send("Education doesn't exist!");
		} else {
			pool.query(queryString, params)
			.then(() => res.status(201).send("Education has been updated."))
			.catch((error) => res.status(500).json(error));
		}
	}).catch((error) => res.status(500).json(error));
});

router.delete("/education/:educationId", (req, res) => {
	const educationId = req.params.educationId;
	const selectQuery = "Select * From education Where id = $1";
	const queryString = "Delete From education Where id = $1";
	const params = [educationId];
	pool.query(selectQuery, [educationId])
	.then((result) => {
		if (result.rows == 0) {
			res.status(400).send("Education doesn't exist!");
		} else {
			pool.query(queryString, params)
			.then(() => res.status(201).send("Education has been deleted."))
			.catch((error) => res.status(500).json(error));
		}
	}).catch((error) => res.status(500).json(error));

});


export default router;
