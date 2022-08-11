
Drop table if exists applications;
Drop table if exists education;
Drop table if exists qualifications;
Drop table if exists languages;
Drop table if exists applicants;
Drop table if exists users;
Drop table if exists roles;
Drop table if exists jobs;
Drop table if exists status;

Create Table jobs (
	id serial primary key,
	title varchar(100) not null,
	description text not null,
	skills_require text
	);

Create Table roles (
    role_id serial primary key,
    role_name varchar(255) not null
    );
	
Create Table users (
	id serial primary key,
	username varchar(255) not null,
	password varchar(255) not null,
	created_at timestamp default CURRENT_TIMESTAMP,
	last_login timestamp,
	role_id int references roles(id)
	);
	
Create Table applicants	(
	id serial primary key,
	user_id int references users(id),
	title varchar(5),
	first_name varchar(30),
	last_name varchar(30),
	email varchar(20),
	telephone varchar(15),
	current_employee boolean default false,
	right_to_work boolean not null,
	cv varchar(500),
	gap_reasons text,
	identify varchar(30),
	caring varchar(200),
	skills text,
	reg_date timestamp default CURRENT_TIMESTAMP,
    address1 varchar(200) not null,
    address2 varchar(200) not null,
    address3 varchar(200) ,
    town varchar(50) not null,
    country varchar(100) not null,
    postcode varchar(10) not null,
    mobile varchar(15) not null,
	supp_statement text
	);

Create Table education (
	id serial primary key,
	applicant_id int references applicants(id),
	school_name varchar(150) not null,
	subject varchar(50), 
	course_name varchar(100), 
	address1 varchar(100), 
	address2 varchar(100), 
	town varchar(50), 
	country varchar(50), 
	telephone varchar(15), 
	mobile varchar(15), 
	grades varchar(15), 
	);

Create Table qualifications (
	id serial primary key,
	applicant_id int references applicants(id),
	title varchar(50) not null,
	date date,
	status varchar(15)
	);
	
Create Table languages (
	id serial primary key,
	applicant_id int references applicants(id),
	language varchar(20) not null,
	spoken boolean,
	written boolean,
	fluency varchar(50)	
	);

Create Table status (
	id serial primary key,
	status varchar(30) not null
	);

Create Table applications (
	id serial primary key,
	applicant_id int references applicants(id),
	job_id int references jobs(id),
	cover_letter text not null,
	description text,
	status_id int references status(id),
    notes text,
    apply_date timestamp default CURRENT_TIMESTAMP 
	);

Insert Into status (status) values
 ('Applied')
,('In progress')
,('In HR Department')
,('Management Department')
,('Rejected')
,('Accepted');

Insert Into roles (role_name) values
 ('SuperAdmin')
,('Admin')
,('Applicant');
