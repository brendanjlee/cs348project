const sql = require('./db.js')

const app_skill = function(applicant_skill) {
  this.applicant_name = applicant_skill.app_name;
  this.skill_name = applicant_skill.skill_name; 
}

// get
app_skill.getAll = (result) => {
  let queryString = 'select a.name as app_name, s.name skill_name from applicant a join skill s on a.skill_id = s.skill_id';
  sql.query(queryString, (err, res) => {
    if (err) {
      console.log('error: ', err);
      result(null, err);
      return;
    }
    // print out result
    console.log('joined_relation: ', res);
    result(null, res);
  })
}

module.exports = app_skill;

app_skill.getAll()