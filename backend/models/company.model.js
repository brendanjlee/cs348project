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
      return;
    }

    // print out result
    console.log('FindAll (Company): ', res);
    result(null, res);
  });
};

// GET - find by company name
Company.findByName = (companyName, result) => {
  let queryString = `select * from company where name = \'${companyName}\'`;

  sql.query(queryString, (err, res) => {
    if (err) {
      console.log(err);
      //result(err, null);
      return;
    }
    // more than one
    if (res.length) {
      console.log('FindByID (Company): ', res[0]);
      //result(null, res[0]);
      return;
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


//test
const bigTechDetails = {
  cid: 1,
  name: "BigTech",
  field_id: 7,
  num_openings: 0
}

const bigTech = new Company(bigTechDetails);