module.exports = app => {
  const joinedJob = require('../controllers/joinedJob.controller');
  let router = require('express').Router();

  // Retrieve all jobs
  router.get('/', joinedJob.findAll);
  // Retrieve by skill
  router.get('/byskill/:skill_req', joinedJob.findBySkill);
  // Retrieve by min experience (years)
  router.get('/byexperience/:experience', joinedJob.findByExperience);
  // Retrieve by company_id 
  router.get('/bycompany/:company_name', joinedJob.findByComapny);
  // Retrieve by field
  router.get('/byfield/:field_name', joinedJob.findByField);

  app.use('/api/joinedJob', router)
}