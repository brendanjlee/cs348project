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

// Find by job title (string)
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

// find by skillreq (string. i.e. Programming)
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

// find by experience (int i.e. 5)
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

// find by company (string i.e Facebook)
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

// find by field (string i.e Information Technology)
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

// update job applicant count by job_id
exports.updateApplicantCount = (req, res) => {
  JoinedJob.updateApplicantCount(req.params.field_name, (err, data) => {
    // Validate Request
    if (!req.body) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
    }
    console.log(req.body);

    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Job with id ${req.params.job_id}.`
        });
      } else {
        res.status(500).send({
          message: "Error updating Job with id " + req.params.job_id
        });
      }
    }
    else res.send(data);
  })
}