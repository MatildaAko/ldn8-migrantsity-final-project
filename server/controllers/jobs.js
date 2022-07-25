import generalController  from "./general";
import pool from "../db";

const getJobs = (req, res) => {
    const queryString = " Select jobs.*, case when job_id>0 then true else false end as used from jobs left join applications on job_id = jobs.id ";
    pool.query(queryString)
    .then((result) => res.status(200).json(result.rows))
    .catch((error) => res.status(500).json(error));
};
const createNewJob = (req, res) => generalController.post(req, res);
const updateJob = (req, res) => generalController.put(req, res);
const deleteJob = (req, res) => generalController.del(req, res);

module.exports = {
    getJobs,
    createNewJob,
    updateJob,
    deleteJob,
};