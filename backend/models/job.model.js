const sql = require('./db.js')

const Job = function(job) {
    this.job_id = job.job_id;
    this.job_title = job.job_title;
    this.job_desc = job.job_desc;
    this.cid = job.cid;
    this.min_exper = job.min_exper;
    this.skill_req = job.skill_req;
    this.num_applicants = job.num_applicants;
    this.is_active = job.is_active;
    this.date_posted = job.date_posted;
}


// GET - retrieve all jobs
Job.findAll = (result) => {
  sql.query('select * from job', (err, res) => {
    if (err) {
      console.log('error: ', err);
      result(null, err);
      return;
    }
    // print out result
    console.log('Jobs: ', res);
    result(null, res);
  })
}


// GET - find by job title
Job.findByTitle = (job_title, result) => {
  sql.query(`SELECT * FROM job WHERE job_title = ${job_title}`, (err, res) => {

    // add intersect with select query for specified field if a field is filled in, change initial query to select * from Job

    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }
    if (res.length) {
      console.log("Found Job: ", res);
      result(null, res);
      return;
    }
    // not found Job with the title
    result({ kind: "not_found" }, null);
  });
};

// GET -- find by skill
Job.findBySkill = (skill_id, result) => {
  let queryString = `select * from job where skill_req = ${skill_id}`;
  sql.query(queryString, (err, res) => {
    if (err) {
      console.log('error: ', err);
      result(err, null);
      return -1;
    }
    if (res.length) {
      console.log('Found Job by skill', res);
      result(null, res);
      return 1;
    }

    return({kind: 'not_found'}, null);
  });
}

// GET -- find by experience level (years)
Job.findByExperience = (experience, result) => {
  let queryString = `select * from job where min_experience <= ${experience}`;
  sql.query(queryString, (err, res) => {
    if (err) {
      console.log('error: ', err);
      result(err, null);
      return -1;
    }
    if (res.length) {
      console.log('Found Job by min experience', res);
      result(null, res);
      return 1;
    }

    return({kind: 'not_found'}, null);
  });
}

// POST - create a job
Job.create = (newJob, result) => {
  sql.query("insert into job set ?", newJob, (err, res) => {
    if (err) {
      console.log("error:", err);
      result(err, null);
      return;
    }
    console.log("Created job: ", {id: res.insertId, ...newJob});
    result(null, {id: res.insertId, ...newJob});
  });
};


// DELETE - delete by id
Job.remove = (job_id, result) => {
  let queryString = `delete from job where job_id = ${job_id}`;
  sql.query(queryString, (err, res) => {
    if (err) {
      console.log(err);
      result(null, err);
      return;
    }
    if (res.affectedRows == 0) {
      // no jobs with id
      result({kind: 'not_found'}, null);
    }
    console.log('deleted job with job_id: ', job_id);
    result(null, res);
  })
}

module.exports = Job;