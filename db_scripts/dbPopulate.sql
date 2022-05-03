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
(13,'Electrical'),
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
(13, 'Goldman Sachs', 7, 0);

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
(2, 'FrontEnd Dev', 'Responsibilities include determining the structure and design of web pages, ensuring user experience determines 
design choices, and developing features to enhance the user experience.', 1, 2, 3, 0, 0, '2022-1-15'), --facebook
(3, 'BackEnd Dev', 'Responsibilities include designing and implementing devices experiences and backend services powering the identity
platform for Oculus AR/VR, debugging complex device-side and backend infrastructure issues, and understanding software components from
multiple partner teams, lead the integration of those components into the product code base, and drive their continued development', 
1, 2, 3, 0, 1, '2021-12-14'), --facebook
(4, 'Software Eng', 'Responsibilities include gathering user requirements, defining system functionality and writing code in various 
languages, like Java, Ruby on Rails or .NET programming languages (e.g. C++ or JScript.NET.).', 2, 1, 3, 0, 0, '2021-08-24'), --apple
(5, 'Accountant', 'Responsibilities include compiling, analyzing, and reporting financial data, creating periodic reports, such as 
balance sheets, etc., maintaining accurate financial records, keeping informed about finance and accounting, assisting management in 
the decision-making process by preparing budgets and financial forecasts.', 2, 3, 4, 0, 1, '2021-10-04'), --apple
(6, 'Entry-level programmer', 'Responsibilities include code and test programming for software and mobile apps, developing and 
deploying computer applications, and resolving user-submitted problems and questions.', 3, 3, 3, 0, 1, '2022-03-27'), --amazon
(7, 'Area Manager', 'In this role, you will manage a team of shift leads and associates, including hiring and onboarding new team 
members, providing regular feedback, and supporting career development and employee growth, and managing and delegating daily 
operations to drive exceptional results.', 3, 5, 6, 0, 0, '2021-07-09'), --amazon
(8, 'Graphic Designer', 'Responsibilities include creating a wide range of graphics and layouts for product illustrations, company 
logos, and websites with software such as photoshop, reviewing final layouts and suggesting improvements when necessary.', 4, 2, 3, 
0, 1, '2022-05-03'), --netflix
(9, 'Sales Specialist', 'Responsibilities include actively understanding each customers technology footprint, strategic growth plans 
and business drivers, and technology strategy and competitive landscape, driving business development, forecast accurately, and 
achieving strategic goals by leading customers through the entire business cycle.', 5, 3, 2, 0, 1, '2022-11-19'), --google
(10, 'Team Member', 'For this position, you must be at least 16 years old, and you must be able to work in a fast-paced environment 
with your team', 6, 1, 15, 0, 1, '2022-03-25'), --burger king
(11, 'General Manager', 'Responsibilities include managing all aspects within the restaurant, including food production, guest service
 and experience, and direct crew and manager work, proactively leading and managing all people processes', 7, 1, 6, 0, 1, '2022-06-30'), --mcdonalds
(12, 'Small Format Team Leader', 'Responsibilities include understanding sales goals, plannning and executing daily/weekly workload to 
deliver on guest engagement, and leading promotional signing processes for your assigned department(s)', 8, 1, 6, 0, 1, '2021-12-09'), --target
(13, 'Cashier', 'Responsibilities include checking out customers quickly and accurately answering customer questions and help them with their needs',
 9, 1, 4, 0, 1, '2022-02-18'), --walmart
(14, 'Senior Associate', 'Responsibilities include performing literature reviews, editing and drafting reports and other research 
materials, working alongside other researchers, PhD fellows, academic advisors, and internal thought-leaders to create cutting-edge 
analyses, using Institute data alone or in combination with existing publicly available data that add to both the public and academic 
discourse.', 10, 3, 3, 0, 1, '2021-10-11'), --jpmorgan chase and co
(15, 'Senior Architect', 'Responsibilities include adhering to and helping create enterprise principles and standards based on 
industry best practices, creating and maintaining the target application architecture and blueprints along with strategic roadmaps, 
and offering technical guidance on technical standards, including coding standards, tools, or platforms', 11, 10, 6, 0, 1, '2022-04-08'), --bank of america
(16, 'Finance Analyst', 'Responsibilities include participating in functions related to financial research and reporting, collaborate
and consulting with peers, colleagues and managers to resolve issues and achieve goals', 12, 2, 4, 0, 1, '2021-07-23'), --wells fargo
(17, 'Fraud Investigations Specialist', 'Responsibilities include evaluating the circumstances of cases of suspected or confirmed 
fraud and making recommendations about future measures, as well as identification, development and investigation of consumer financial
services fraud', 13, 2, 4, 0, 1, '2021-11-04') --goldman sachs
