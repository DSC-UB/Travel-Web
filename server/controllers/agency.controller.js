/**
 * Controller for the agencies
 * Contains methods for the crud operations
*/

let Agency = require("../models/agency.model");

const getAllAgencies = (req, res) => {
    let token = getToken(req.headers);
    if (token) {
        Agency.find(function (err, agencys) {
            if (err) return next(err);
            res.json(agencys);
        });
    } else {
        return res.status(403).send({success: false, msg: 'Unauthorized.'});
    }
};

const getAgencyById = (req, res, next) => {
    let token = getToken(req.headers);
    if (token) {
        Agency.findById(req.params.id, function (err, agency) {
            if (err) return next(err);
            res.json(agency);
        });
    } else {
        return res.status(403).send({success: false, msg: 'Unauthorized.'});
    }
};

const setAgency = (req, res, next) => {
    let token = getToken(req.headers);
    if (token) {
        Agency.create(req.body, function (err, agency) {
            if (err) return next(err);
            res.json(agency);
        });
    } else {
        return res.status(403).send({success: false, msg: 'Unauthorized.'});
    }
};

const updateAgency = (req, res, next) => {
    let token = getToken(req.headers);
    if (token) {
        Agency.findByIdAndUpdate(req.params.id, req.body, function (err, agency) {
            if (err) return next(err);
            res.json(agency);
        });
    } else {
        return res.status(403).send({success: false, msg: 'Unauthorized.'});
    }
};

const deleteAgency = (req, res, next) => {
    let token = getToken(req.headers);
    if (token) {
        Agency.findByIdAndRemove(req.params.id, req.body, function (err, agency) {
            if (err) return next(err);
            res.json(agency);
        });
    } else {
        return res.status(403).send({success: false, msg: 'Unauthorized.'});
    }
};

module.exports = {
    getAllAgencies,
    deleteAgency,
    updateAgency,
    setAgency,
    getAgencyById,
};

