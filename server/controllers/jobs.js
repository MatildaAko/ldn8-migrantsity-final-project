import generalController  from "./general";

const getJobs = (req, res) => generalController.get(req, res);
const createNewJob = (req, res) => generalController.post(req, res);
const updateJob = (req, res) => generalController.put(req, res);
const deleteJob = (req, res) => generalController.del(req, res);

module.exports = {
    getJobs,
    createNewJob,
    updateJob,
    deleteJob,
};