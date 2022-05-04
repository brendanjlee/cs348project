module.exports = app => {
  const joinedJob = require('../controllers/joinedJob.controller');
  let router = require('express').Router();

  // Retrieve all jobs
  router.get('/', joinedJob.findAll);
  // Retrieve by skill (string, ex: Programming)
  router.get('/byskill/:skill_req', joinedJob.findBySkill);
  // Retrieve by min experience (int, ex: 5)
  router.get('/byexperience/:experience', joinedJob.findByExperience);
  // Retrieve by company_name (string, ex: Facebook)
  router.get('/bycompany/:company_name', joinedJob.findByComapny);
  // Retrieve by field name (string, ex: Information Technology)
  router.get('/byfield/:field_name', joinedJob.findByField);
  // Update job applicant count by job_id
  router.put('/:job_id', joinedJob.updateApplicantCount);

  app.use('/api/joinedJob', router)
}