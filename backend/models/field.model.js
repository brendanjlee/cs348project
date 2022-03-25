const sql = require('./db.js');

const Field = function(field) {
  this.field_id = field.field_id;
  this.name = field.name;
}