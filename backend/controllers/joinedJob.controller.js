const JoinedJob = require('../models/JoinedJob.model');

//Find all joined jobs
exports.findAll = (req, res) => {
  JoinedJob.findAll((err, data) => {
    if (err) {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Job."
      });
    }
    else res.send(data);
  })
};

// Find by job title
exports.findByTitle = (req, res) => {
  JoinedJob.findByTitle(req.params.job_title, (err, data) => {
    if (err) {
      if (err.kind == 'not_found') {
        res.status(404).send({message: `Not found Applicant with id ${req.params.job_title}.`});
      } else {
        res.status(500).send({message: `Error retrieving Applicant with id: ${req.params.job_title}`});
      }
    }
    else res.send(data);
  })
}

// find by skillreq
exports.findBySkill = (req, res) => {
  JoinedJob.findBySkill(req.params.skill_req, (err, data) => {
    if (err) {
      if (err.kind == 'not_found') {
        res.status(404).send({message: `Not found Applicant with id ${req.params.skill_req}.`});
      } else {
        res.status(500).send({message: `Error retrieving Applicant with id: ${req.params.skill_id}`});
      }
    }
    else res.send(data);
  });
};

// find by experience
exports.findByExperience = (req, res) => {
  JoinedJob.findByExperience(req.params.experience, (err, data) => {
    if (err) {
      if (err.kind == 'not_found') {
        res.status(404).send({message: `Not found Applicant with id ${req.params.experience}.`});
      } else {
        res.status(500).send({message: `Error retrieving Applicant with id: ${req.params.experience}`});
      }
    }
    else res.send(data);
  })
}

// find by company
exports.findByComapny = (req, res) => {
  JoinedJob.findByCompany(req.params.company_name, (err, data) => {
    if (err) {
      if (err.kind == 'not_found') {
        res.status(404).send({message: `Not found Applicant with id ${req.params.company_name}.`});
      } else {
        res.status(500).send({message: `Error retrieving company with id: ${req.params.company_name}`});
      }
    }
    else res.send(data);
  })
}

// find by field
exports.findByField = (req, res) => {
  JoinedJob.findByField(req.params.field_name, (err, data) => {
    //print(req.params.field_name)
    if (err) {
      if (err.kind == 'not_found') {
        res.status(404).send({message: `Not found Job with field_name ${req.params.field_name}.`});
      } else {
        res.status(500).send({message: `Error retrieving Job with field_name: ${req.params.field_name}`});
      }
    }
    else res.send(data);
  })
}