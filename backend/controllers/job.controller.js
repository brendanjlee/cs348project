const Job = require('../models/job.model.js');

// Find all jobs
exports.findAll = (req, res) => {
  Job.findAll((err, data) => {
    if (err) {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Job."
      });
    }
    else res.send(data);
  })
};

// find by skill
exports.findBySkillId = (req, res) => {
  Job.findBySkill(req.params.skill_id, (err, data) => {
    if (err) {
      if (err.kind == 'not_found') {
        res.status(404).send({message: `Not found Applicant with id ${req.params.skill_id}.`});
      } else {
        res.status(500).send({message: `Error retrieving Applicant with id: ${req.params.skill_id}`});
      }
    }
    else res.send(data);
  });
};

// find by experience
exports.findByExperience = (req, res) => {
  Job.findByExperience(req.params.min_experience, (err, data) => {
    if (err) {
      if (err.kind == 'not_found') {
        res.status(404).send({message: `Not found Applicant with id ${req.params.min_experience}.`});
      } else {
        res.status(500).send({message: `Error retrieving Applicant with id: ${req.params.min_experience}`});
      }
    }
    else res.send(data);
  })
}

// find by company
exports.findByCompany = (req, res) => {
  Job.findByCompany(req.params.company_id, (err, data) => {
    if (err) {
      if (err.kind == 'not_found') {
        res.status(404).send({message: `Not found Applicant with company_id ${req.params.company_id}.`});
      } else {
        res.status(500).send({message: `Error retrieving Applicant with company_id: ${req.params.company_id}`});
      }
    }
    else res.send(data);
  })
}