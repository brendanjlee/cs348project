module.exports = app => {
  const job = require('../controllers/job.controller');
  let router = require('express').Router();

  // Retrieve all jobs
  router.get('/', job.findAll);
  // Retrieve by skill
  router.get('/byskill/:skill_id', job.findBySkillId);
  // Retrieve by min experience (years)
  router.get('/byexperience/:min_experience', job.findByExperience);
  // Retrieve by company_id 
  router.get('/bycompany/:company_id', job.findByCompany);

  app.use('/api/job', router)
}