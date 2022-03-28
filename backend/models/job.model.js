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
Job.getAll = (result) => {
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


// POST - create company
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