import generalController  from "./general";
import pool from "../db";

const getJobs = (req, res) => {
    const queryString = " Select jobs.*, (select count(id)>0 from applications where job_id = jobs.id) as used from jobs";
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