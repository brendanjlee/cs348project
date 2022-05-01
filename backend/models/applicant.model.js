const sql = require('./db.js');
const Applicant = function(applicant) {
  this.applicant_id = applicant.applicant_id;
  this.name = applicant.name;
  this.experience = applicant.experience;
  this.skill_id = applicant.skill_id;
  this.phone = applicant.phone;
  this.email = applicant.email;
}

// Query Fucntions
// get - Find all
Applicant.findAll = (result) => {
  let queryString = 'select * from applicant';
  sql.query(queryString, (err, res) => {
    if (err) {
      console.log(err);
      result(null, err);
      return -1;
    }

    console.log('FindAll Applicants: ', res);
    result(null, res);
    return 1;
  });
}

// Get - find by id
Applicant.findById = (id, result) => {
  let queryString = `select * from applicant where applicant_id = ${Number(id)}`;
  sql.query(queryString, (err, res) => {
    if (err) {
      console.log(err);
      result(null, err);
      return -1;
    }
    // no id found
    if (res.length) {
      console.log('found applicant: ', res[0]);
      result(null, res[0]);
      return 1;
    }

    result({kind: 'not_found'}, null);
  })
}

// POST - Create Applicant
Applicant.create = (newApplicant, result) => {
  sql.query('insert into applicant set ?', newApplicant, (err, res) => {
    if (err) {
      console.log(err);
      result(err, null);
      return -1;
    }

    console.log('Created Applicant: ', {id: res.insertId, ...newApplicant});
    result(null, {id: res.insertId, ...newApplicant});
    return 1;
  });
};

// DELETE - delete applicant
Applicant.remove = (id, result) => {
  let queryString = `delete from applicant where applicant_id = ${id}`;
  sql.query(queryString, (err, res) => {
    if (err) {
      console.log(err);
      result(null, err);
      return -1;
    }
    // No id found
    if (res.affectedRows == 0) {
      result({kind: 'not_found'}, null);
      return 0;
    }

    console.log(`Successfully deleted applicant: ${id}`);
    result(null, res);
    return 1;
  });
}

module.exports = Applicant;

//Applicant.findAll()