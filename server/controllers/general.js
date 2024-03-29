import pool from "../db";

//////////--------- Select Queries --------////////////
const applicationsQueryString = `
	Select * from (Select applications.id as id, applicant_id, first_name, last_name, supp_statement, cv, 
		(case when status_id = 5 then cast(applicant_id as varchar) else concat(first_name,' ',last_name) end)  as fullName,
      email, telephone, mobile, town, country, address1, address2, address3, postcode, 
			current_employee, right_to_work, skills, job_id, 
			jobs.title as job_title, jobs.description as job_description, 
			skills_require, cover_letter, applications.description, notes, status_id, status
	From applications 
	Inner join applicants on applicants.id = applicant_id
	Inner join jobs on jobs.id = job_id
	Inner join status on status.id = status_id) selectTable `;

const appOnlyQueryString = `Select id, applicant_id, job_id, job_title, job_description,
								skills_require, cover_letter, description, status_id, status 
							From (${applicationsQueryString}) TableSelect `;

const applicantsSelect = "Select * From applicants Where id = $1";
const applicantsQueryString = `		
	Select * from (Select applicants.id as applicant_id, 
		concat(first_name,' ',last_name) as fullname, 
		applicants.*, role_name
	From applicants
	Inner join users on users.id = user_id
	Inner join roles on roles.role_id = users.role_id ) TableSelect `;
////////////////////////////////////////////////////////

const getTableName = (req) => {
	const path = req.path;
	const firstPart = req.path.slice(1).split("/")[0];
	const lastPart = path.slice(path.lastIndexOf("/")+1);
	const isFirstPartNumber = Number.isInteger(parseInt(firstPart, 10));
	const isLastPartNumber = Number.isInteger(parseInt(lastPart, 10));
	console.log(path, firstPart);
	return path.match(/[/]/g).length==1 ? path.slice(1) : (!isFirstPartNumber && !isLastPartNumber)?lastPart:isFirstPartNumber?lastPart:firstPart ;
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