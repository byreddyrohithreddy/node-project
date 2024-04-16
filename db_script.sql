CREATE DATABASE applicants_db;

\connect applicants_db;

CREATE TABLE applicants (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100),
  age INT,
  email VARCHAR(100)
);

INSERT INTO applicants (name, age, email) VALUES ('Rohith', 24, 'byreddyrohith@gmail.com');
