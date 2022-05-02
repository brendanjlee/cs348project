module.exports = app => {
  const applicant = require('../controllers/applicant.controller.js')
  let router = require('express').Router();
  // Create new applicant
  router.post('/', applicant.create);
  // Retrieve all applicants
  router.get('/', applicant.findAll);
  // Retrieve a single applicant with email
  router.get('/:email', applicant.findOne);
  // Delete an applicant with id
  router.delete('/:id', applicant.delete);

  app.use('/api/applicant', router);
};