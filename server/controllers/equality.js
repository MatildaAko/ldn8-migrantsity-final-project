import generalController from "./general";
import pool from "../db";

const getFlexibleWorking = (req, res) => generalController.get(req, res);
const getWorkingPattern = (req, res) => generalController.get(req, res);
const getGenders = (req, res) => generalController.get(req, res);
const getSexOrientations = (req, res) => generalController.get(req, res);
const getAgeBands = (req, res) => generalController.get(req, res);
const getReligions = (req, res) => generalController.get(req, res);
const getEthnicGroups = (req, res) => generalController.get(req, res);
const getEquality = (req, res) => {
    const queryString = `
   select * from (
   Select 'cities' as tableName, city as title, country as groupName from cities union 
   Select 'age_bands' , age_band , '' from age_bands union
   Select 'sex_orientations' , sex_orientation , '' from sex_orientations union 
   Select 'genders' , gender , '' from genders union
   Select 'working_pattern' , pattern , '' from working_pattern union
   Select 'flexible_working' , flexible, '' from flexible_working union
   Select 'religions' , religion, '' from religions union
   Select 'ethnic_groups' , ethnic_group , '' from ethnic_groups 
   ) AllEqualities order by tableName, groupName, title   
   `;
	console.log(queryString);
    pool.query(queryString)
	.then((result) => res.status(201).json(result.rows))
	.catch((error) => res.status(500).json(error));
};

const getEquality = (req, res) => {
    const queryString = `select * from (
    Select 'cities' as tableName, id, city as title, country as group From cities union
    Select 'genders', id, gender, null From genders 
    ) as allTables
    order by tableName, id
    `;
	pool.query(queryString)
	.then((result) => res.status(201).json(result.rows))
	.catch((error) => res.status(500).json(error));
};

module.exports = {
    getFlexibleWorking,
    getWorkingPattern,
    getGenders,
    getSexOrientations,
    getAgeBands,
    getReligions,
    getEthnicGroups,
    getEquality,
};