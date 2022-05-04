const sql = require('./db.js')

//const queryString = "select j.job_id as job_id, c.name as company_name, j.job_title as job_title, j.job_desc as job_desc, s.name as skill_req, j.date_posted as date_posted, j.is_active as is_active, j.min_experience as experience from job j join company c on j.company_id = c.cid join skill s on j.skill_req = s.skill_id;"

const JoinedJob = function(job) {
    this.job_id = job.job_id;
    this.job_title = job.job_title;
    this.job_desc = job.job_desc;
    this.company_name = job.company_name;
    this.experience = job.experience;
    this.skill_req = job.skill_req;
    this.num_applicants = job.num_applicants;
    this.is_active = job.is_active;
    this.date_posted = job.date_posted;
    this.field_name = job.field_name;
}


// GET - retrieve all jobs
JoinedJob.findAll = (result) => {
  const queryString = "select j.job_id as job_id, c.name as company_name, j.job_title as job_title, j.job_desc as job_desc, s.name as skill_req, j.date_posted as date_posted, j.is_active as is_active, j.min_experience as experience, f.name as field_name from job j join company c on j.company_id = c.cid join skill s on j.skill_req = s.skill_id join field f on c.field_id = f.field_id;"
  sql.query(queryString, (err, res) => {
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
JoinedJob.findByTitle = (job_title, result) => {
  const queryString = `select j.job_id as job_id, c.name as company_name, j.job_title as job_title, j.job_desc as job_desc, s.name as skill_req, j.date_posted as date_posted, j.is_active as is_active, j.min_experience as experience, f.name as field_name\
   from job j join company c on j.company_id = c.cid join skill s on j.skill_req = s.skill_id join field f on c.field_id = f.field_id\
   where j.job_title = \"${job_title}\";` 
  sql.query(queryString, (err, res) => {

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

// GET -- find by skill_req string
JoinedJob.findBySkill = (skill_req, result) => {
  const queryString = `select j.job_id as job_id, c.name as company_name, j.job_title as job_title, j.job_desc as job_desc, s.name as skill_req, j.date_posted as date_posted, j.is_active as is_active, j.min_experience as experience, f.name as field_name\
   from job j join company c on j.company_id = c.cid join skill s on j.skill_req = s.skill_id join field f on c.field_id = f.field_id\
   where s.name = \"${skill_req}\";` 
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
JoinedJob.findByExperience = (experience, result) => {
  const queryString = `select j.job_id as job_id, c.name as company_name, j.job_title as job_title, j.job_desc as job_desc, s.name as skill_req, j.date_posted as date_posted, j.is_active as is_active, j.min_experience as experience, f.name as field_name\
   from job j join company c on j.company_id = c.cid join skill s on j.skill_req = s.skill_id join field f on c.field_id = f.field_id\
   where j.min_experience <= \"${experience}\";` 
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

// GET -- find by company name string
JoinedJob.findByCompany = (company_name, result) => {
  const queryString = `select j.job_id as job_id, c.name as company_name, j.job_title as job_title, j.job_desc as job_desc, s.name as skill_req, j.date_posted as date_posted, j.is_active as is_active, j.min_experience as experience, f.name as field_name\
   from job j join company c on j.company_id = c.cid join skill s on j.skill_req = s.skill_id join field f on c.field_id = f.field_id\
   where c.name = \"${company_name}\";` 
  sql.query(queryString, (err, res) => {
    if (err) {
      console.log('error: ', err);
      result(err, null);
      return -1;
    }
    if (res.length) {
      console.log('Found Job by Company', res);
      result(null, res);
      return 1;
    }

    return({kind: 'not_found'}, null);
  });
}

JoinedJob.findByField = (field_name, result) => {
  const queryString = `select j.job_id as job_id, c.name as company_name, j.job_title as job_title, j.job_desc as job_desc, s.name as skill_req, j.date_posted as date_posted, j.is_active as is_active, j.min_experience as experience, f.name as field_name\
   from job j join company c on j.company_id = c.cid join skill s on j.skill_req = s.skill_id join field f on c.field_id = f.field_id\
   where f.name = \"${field_name}\";` 
  sql.query(queryString, (err, res) => {
    if (err) {
      console.log('error: ', err);
      result(err, null);
      return -1;
    }
    if (res.length) {
      console.log('Found Job by field', res);
      result(null, res);
      return 1;
    }

    return({kind: 'not_found'}, null);
  });
}

// Put -- Updates the applicant count per job by id
JoinedJob.updateApplicantCount = (job_id, result) => {
  const queryString = `UPDATE job\
  SET\
  num_applicants = num_applicants + 1\
  WHERE job_id = ${job_id};`;

  sql.query(queryString, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return -1;
    }
    if (res.affectedRows == 0) {
      result({ kind: "not_found" }, null);
      return 1;
    }
    console.log("updated joblisting: ");
    result(null, { id: job_id });
  })
}

module.exports = JoinedJob;
//JoinedJob.updateApplicantCount(1)