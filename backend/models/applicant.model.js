const sql = require('./db.js');

const Applicant = function(applicant) {
  this.applicant_id = applicant.applicant_id;
  this.name = applicant.name;
  this.experience = applicant.experience;
  this.skill_id = applicant.skill_id;
  this.phone = applicant.phone;
  this.email = applicant.email;
}