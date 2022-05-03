CREATE DATABASE if not exists cs348_project_db;

-- tables
-- company
CREATE TABLE if not exists `company` (
  `cid` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NULL,
  `field_id` INT NULL,
  `num_openings` INT NULL,
  PRIMARY KEY (`cid`),
	FOREIGN KEY (`field_id`) REFERENCES field(field_id)
) ENGINE=INNODB;
-- job
CREATE TABLE if not exists `job` (
	`job_id` INT NOT NULL,
	`job_title` VARCHAR(45) NULL,
	`job_desc` VARCHAR (500) NULL,
	`company_id` INT NULL,
	`min_experience` INT NULL,
	`skill_req` INT NULL,
	`num_applicants` INT NULL,
	`is_active` INT NULL,
	`date_posted` DATE Null,
	  PRIMARY KEY (`job_id`),
    FOREIGN KEY (`company_id`) REFERENCES company(cid),
    FOREIGN KEY (`skill_req`) REFERENCES skill(skill_id)
  );

-- applicant
CREATE TABLE if not exists `applicant` (
  `applicant_id` INT NOT NULL,
  `name` VARCHAR(45) NULL,
  `experience` INT NULL,
  `skill_id` INT NULL,
  `phone` VARCHAR(45) NULL,
  `email` VARCHAR(45) NULL,
  PRIMARY KEY (`applicant_id`),
  Foreign key (`skill_id`) references skill(skill_id)
  );

-- field
CREATE TABLE if not exists `field` (
  `field_id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NULL AUTO_INCREMENT
  PRIMARY KEY (`field_id`));

-- skills
CREATE TABLE if not exists `skill` (
  `skill_id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NULL,
  PRIMARY KEY (`skill_id`));

--- relationships
