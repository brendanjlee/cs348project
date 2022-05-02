const Applicant = require('../models/applicant.model.js');

// Create new applicant
exports.create = (req, res) => {
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  // Create new applicant
  const applicant = new Applicant({
    applicant_id: req.body.applicant_id,
    name: req.body.name,
    experience: req.body.experience, 
    skill_id: req.body.skill_id,
    phone: req.body.phone,
    email: req.body.email
  })

  // Save to db
  Applicant.create(applicant, (err, data) => {
    if (err) {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Applicant."
      });
    }
    else res.send(data);
  })
};

// Find all applicants
exports.findAll = (req, res) => {
  Applicant.findAll((err, data) => {
    if (err) {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Applicant."
      });
    }
    else res.send(data);
  })
};

// find applicant by email
exports.findOne = (req, res) => {
  Applicant.findByEmail(req.params.email, (err, data) => {
    if (err) {
      if (err.kind == 'not_found') {
        //res.status(404).send({message: `Not found Applicant with id ${req.params.id}.`});
        res.status(404).send({message: `Not found Applicant with email ${req.params.email}.`});
      } else {
        //res.status(500).send({message: `Error retrieving Applicant with id: ${req.params.id}`});
        res.status(500).send({message: `Error retrieving Applicant with email: ${req.params.email}`});
      }
    }
    else res.send(data);
  });
};

// Delete with id
exports.delete = (req, res) => {
  Applicant.remove(req.params.id, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Applicant with id ${req.params.id}.`
        });
      } else {
        res.status(500).send({
          message: "Could not delete Applicant with id " + req.params.id
        });
      }
    } else res.send({ message: `Applicant was deleted successfully!` });
  });
};