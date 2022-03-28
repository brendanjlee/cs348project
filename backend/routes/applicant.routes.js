module.exports = app => {
  const applicant = require('../controllers/applicant.controller')
  let router = require('express').Router();

  // Create new applicant
  router.post('/', applicant.create);
  // Retrieve all applicants
  router.get('/', applicant.findAll);
  // Delete an applicant with id
  router.delete('/:id', applicant.delete);
}