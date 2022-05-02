module.exports = app => {
  const company = require('../controllers/company.controller.js');
  let router = require('express').Router();

  // find all companies
  router.get('/', company.findAll);

  // find company by id
  router.get('/:id', company.findOne);

  app.use('/api/company', router);
}