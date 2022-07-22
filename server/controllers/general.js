import pool from "../db";

//////////--------- Select Queries --------////////////
const applicationsQueryString = `
	Select * from (Select applications.id as id, applicant_id, concat(first_name,' ',surname) as fullName, first_name, surname, email, 
			currently_work, right_to_work, skills, gap_reasons, city, job_id, 
			jobs.title as job_title, jobs.description as job_description, color as status_color,
			skills_require, cover_letter, applications.description, notes, status_id, status
	From applications 
	Inner join applicants on applicants.id = applicant_id
	Inner join cities on cities.id = city_id
	Inner join jobs on jobs.id = job_id
	Inner join application_status on application_status.id = status_id) selectTable `;

const appOnlyQueryString = `Select id, applicant_id, gap_reasons, job_id, job_title, job_description,
								skills_require, cover_letter, description, status_id, status 
							From (${applicationsQueryString}) TableSelect `;

const applicantsSelect = "Select * From applicants Where id = $1";
const applicantsQueryString = `		
	Select * from (Select applicants.*, role_name, genders.gender,
		sex_orientations.sex_orientation, cities.city, age_bands.age_band, 
		ethnic_groups.ethnic_group, religions.religion
	From applicants
	Inner join users on users.id = user_id
	Inner join roles on roles.role_id = users.role_id
	Inner join genders on genders.id = gender_id
	Inner join sex_orientations on sex_orientations.id = sex_orient_id
	Inner join cities on cities.id = city_id
	Inner join age_bands on age_bands.id = age_band_id
	Inner join ethnic_groups on ethnic_groups.id = ethnic_group_id
	Inner join religions on religions.id = religion_id) as selectTable `;
////////////////////////////////////////////////////////

const getTableName = (req) => {
    const regexp = "(?<=\/)(.*?)(?=\/)";
	const path = req.path;
	const firstPart = path.match(regexp);
	const isFirstPartNumber = Number.isInteger(parseInt(firstPart, 10));
	const lastPart = path.slice(path.lastIndexOf("/")+1);
	return path.match(/[/]/g).length==1 ? path.slice(1) : isFirstPartNumber?lastPart:firstPart ;
};

const get = (req, res, query = "") => {
	const table = getTableName(req);
    const queryString = query.length > 0 ? query : `Select * From ${table}`;
	pool.query(queryString)
	.then((result) => res.status(201).json(result.rows))
	.catch((error) => res.status(500).json(error));
};

const post = (req, res) => {
	const table = getTableName(req);
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

const put = (req, res) => {
	const table = getTableName(req);
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

const del = (req, res) => {
	const table = getTableName(req);
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

module.exports = {
    getTableName,
    get,
    post,
    put,
    del,
	applicationsQueryString,
	appOnlyQueryString,
	applicantsSelect,
	applicantsQueryString,
};