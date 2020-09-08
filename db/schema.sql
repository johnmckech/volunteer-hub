/*
DROP DATABASE IF EXISTS volunteers;
DROP DATABASE IF EXISTS opportunities;
*/
DROP DATABASE IF EXISTS volunteerHub;

CREATE DATABASE volunteerHub;

/*
USE volunteerHub;

CREATE TABLE volunteers
(
    id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    email VARCHAR(50) NOT NULL,
    languages VARCHAR(30) NOT NULL,
    techKnowledge VARCHAR (30),
    specialKnowledge VARCHAR (30),
    hoursPerWeek VARCHAR (2),
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

)

CREATE TABLE opportunities
(
  id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  opportunityName VARCHAR(50) NOT NULL,
  languages VARCHAR(30) NOT NULL,
  techKnowledge VARCHAR (30),
  specialKnowledge VARCHAR (30),
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP
  description TEXT
);
*/