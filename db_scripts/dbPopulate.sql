--field
INSERT INTO `field`
(`field_id`,
`name`)
VALUES
(0, 'Other'),
(1, 'Information Technology'),
(2, 'Architecture and Engineering'),
(3, 'Entertainment'),
(4, 'Health Care'),
(5, 'Consumer Discretionary'),
(6, 'Consumer Staples'),
(7, 'Finance'),
(8, 'Telecommunication Services'),
(9, 'Utilities'),
(10, 'Real Estate');
--skill
INSERT INTO `skill`
(`skill_id`,
`name`)
VALUES
(1,'Engineering'),
(2,'Math'),
(3,'Programming'),
(4,'Accounting'),
(5,'HR'),
(6,'Management'),
(7,'Marketing'),
(8,'Writing'),
(9,'Counseling'),
(10,'Medicine'),
(11,'Caretaking'),
(12,'Mechanic'),
(13,'Eletrical'),
(14,'Plumbing'),
(15,'Labor'),
(16,'Driving'),
(17,'Law'),
(18,'Executive');
--company
INSERT INTO `company`
(`cid`,
`name`,
`field_id`,
`num_openings`)
VALUES
(1, 'Facebook', 1, 0),
(2, 'Apple', 1, 0),
(3, 'Amazon', 1, 0),
(4, 'Netflix', 3, 0),
(5, 'Google', 1, 0),
(6, 'Burger King', 5, 0),
(7, 'McDonalds', 5, 0),
(8, 'Target', 6, 0),
(9, 'Walmart', 6, 0),
(10, 'JPMorgan Chase & Co', 7, 0),
(11, 'Bank of America', 7, 0),
(12, 'Wells Fargo', 7, 0),
(13, 'GOldman Sachs', 7, 0);

INSERT INTO `testdatabase`.`job`
(`job_id`,
`job_title`,
`job_desc`,
`company_id`,
`min_experience`,
`skill_req`,
`num_applicants`,
`is_active`,
`date_posted`)
VALUES
(2, 'FrontEnd Dev', '', 1, 2, 3, 0, 1, null), --facebook
(3, 'BackEnd Dev', '', 1, 2, 3, 0, 1, null) --facebook

