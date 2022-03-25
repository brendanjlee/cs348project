const sql = require('./db.js')

const Company = function(company) {
  this.cid = company.cid;
  this.name = company.name;
  this.field_id = company.field_id;
  this.num_openings = company.num_openings;
};