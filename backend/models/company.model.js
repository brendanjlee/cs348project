const sql = require('./db.js')
const Company = function(company) {
  this.cid = company.cid;
  this.name = company.name;
  this.field_id = company.field_id;
  this.num_openings = company.num_openings;
};

// Queries

// GET - find all 
Company.findAll = (result) => {
  let queryString = 'select * from company';

  sql.query(queryString, (err, res) => {
    if (err) {
      console.log('Error: ', err);
      result(null, err);
      return -1;
    }

    // print out result
    console.log('FindAll (Company): ', res);
    result(null, res);
    return 1;
  });
};

// Get -- find by id
Company.findById = (id, result) => {
  let queryString = `select * from company where cid = ${id}`;
  sql.query(queryString, (err, res) => {
    if (err) {
      console.log(err);
      result(null, err);
      return -1;
    }

    if (res.length) {
      console.log('found company: ', res[0]);
      result(null, res[0]);
      return 1;
    }

    result({kind: 'not_found'}, null);
  })
}

// GET - find by company name
Company.findByName = (companyName, result) => {
  let queryString = `select * from company where name = \'${companyName}\'`;
  sql.query(queryString, (err, res) => {
    if (err) {
      console.log(err);
      result(err, null);
      return -1;
    }
    // more than one
    if (res.length) {
      console.log('found compnay: ', res[0]);
      result(null, res[0]);
      return 1;
    }
    // None found
    result({kind: "not_found"}, null);
  });
}


// POST - create company
Company.create = (newCompany, result) => {
  sql.query("insert into company set ?", newCompany, (err, res) => {
    if (err) {
      console.log(err);
      result(err, null);
      return;
    }
    console.log("created company: ", {id: res.insertId, ...newCompany});
    result(null, {id: res.insertId, ...newCompany});
  });
};

// DELETe - delete by id
Company.remove = (id, result) => {
  let queryString = `delete from company where id = ${id}`;
  sql.query(queryString, (err, res) => {
    if (err) {
      console.log(err);
      result(null, err);
      return;
    }
    if (res.affectedRows == 0) {
      // no companies with id
      result({kind: 'not_found'}, null);
    }
    console.log('deleted tutorial with id: ', id);
    result(null, res);
  })
}

module.exports = Company;

//Company.findAll()