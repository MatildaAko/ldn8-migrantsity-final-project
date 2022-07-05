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
 pool.query(`Select applicants.*, users.*, user_types.user_type, genders.gender,
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
 			`)
 .then((result) => res.status(201).json(result.rows))
 .catch((error) => res.status(500).json(error));
});

router.post("/applicants", (req, res) => {
  const { _user_id, _title, _firstName, _surname, _gender_id, _sex_orient_id, _city_id, _phone } = req.body;
  const { _skills, _currently_work, _right_to_work, _cv,	_gap_reasons, _supp_statement, _dbs_work } = req.body;
  const { _dbs_convictions, _age_band_id, _ethnic_group_id, _religion_id } = req.body;
  const queryString = `Insert Into applicants (user_id, title, firstName, surname, gender_id, sex_orient_id, 
									city_id, phone, skills, currently_work, right_to_work, cv, 
									gap_reasons, supp_statement, dbs_work, dbs_convictions, age_band_id, ethnic_group_id, 
									religion_id ) Values ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19)`;
  const params = [ _user_id, _title, _firstName, _surname, _gender_id, _sex_orient_id, _city_id, _phone, _skills, _currently_work, _right_to_work, _cv, _gap_reasons, _supp_statement, _dbs_work, _dbs_convictions, _age_band_id, _ethnic_group_id, _religion_id ];
  pool.query(queryString, params)
  .then(() => res.status(201).send("Applicant created."))
  .catch((error) => res.status(500).json(error));
});

router.delete("/applicants/:applicantId", (req, res) => {
  const id = req.params.applicantId;
  const queryString = "Delete From applicants Where id = $1";
  const params = [ id ];
  pool.query(queryString, params)
  .then(() => res.status(201).send("Applicant has been deleted."))
  .catch((error) => res.status(500).json(error));
});

//Users
router.get("/users", (req, res) => {
  const queryString = "Select user_types.user_type, users.* From users Inner join user_types on user_types.id = type_id";
  pool.query(queryString)
  .then((result) => res.status(201).json(result.rows))
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
router.get("/applications/:applicantId", (req, res) => {
  const id = req.params.applicantId;
  const queryString = "Select * From applications where applicant_id = $1";
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

export default router;
