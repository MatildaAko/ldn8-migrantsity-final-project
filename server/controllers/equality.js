import generalController from "./general";

const getFlexibleWorking = (req, res) => generalController.get(req, res);
const getWorkingPattern = (req, res) => generalController.get(req, res);
const getGenders = (req, res) => generalController.get(req, res);
const getSexOrientations = (req, res) => generalController.get(req, res);
const getAgeBands = (req, res) => generalController.get(req, res);
const getReligions = (req, res) => generalController.get(req, res);
const getEthnicGroups = (req, res) => generalController.get(req, res);

module.exports = {
    getFlexibleWorking,
    getWorkingPattern,
    getGenders,
    getSexOrientations,
    getAgeBands,
    getReligions,
    getEthnicGroups,
};