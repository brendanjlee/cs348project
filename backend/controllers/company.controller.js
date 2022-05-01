const Company = require('../models/company.model');

// Find all companies
exports.findAll = (req, res) => {
  Company.findAll((err, data) => {
    if (err) {
      req.status(500).send({message: err.message});
    }
    else res.send(data);
  })
}

// Find company by id
exports.findOne = (req, res) => {
  Company.findById(req.params.id, (err, data) => {
    if (err) {
      if (err.kind == 'not_found') {
        res.status(404).send({message: `Not found Company with id ${req.params.id}.`});
      } else {
        res.status(500).send({message: `Error retrieving Company with id: ${req.params.id}`});
      }
    }
    else res.send(data);
  })
}