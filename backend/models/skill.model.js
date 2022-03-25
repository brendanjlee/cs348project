const sql = require('./db.js')

const Skill = function(skill) {
  this.skill_id = skill.skill_id;
  this.name = skill.name;
}

// queries
Skill.getAll = (result) => {
  sql.query('select * from skill', (err, res) => {
    if (err) {
      console.log('error: ', err);
      result(null, err);
      return;
    }
    // print out result
    console.log('Skills: ', res);
    result(null, res);
  })
}

module.exports = Skill;