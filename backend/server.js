const express = require("express");
const cors = require("cors");
const app = express();
var corsOptions = {
  origin: "http://localhost:3000"
};
app.use(cors(corsOptions));
// parse requests of content-type - application/json
app.use(express.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// Routing
app.get("/", (req, res) => {
  res.json({ message: "Welcome to Job Finder." });
});

//require("./app/routes/tutorial.routes.js")(app);
// set port, listen for requests
const PORT = process.env.PORT || 8080;

//require('./routes/applicant.routes.js')(app);
const applicantRouter = require('./routes/applicant.routes.js')
applicantRouter(app);

const companyRouter = require('./routes/company.routes.js');
companyRouter(app);

const jobRouter = require('./routes/job.routes');
jobRouter(app);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});