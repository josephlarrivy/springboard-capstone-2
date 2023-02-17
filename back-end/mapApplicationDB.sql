
\echo 'Delete and recreate mapApplicationDB db?'
\prompt 'Return for yes or control C to cancel' yes

DROP DATABASE IF EXISTS mapApplicationDB;
CREATE DATABASE mapApplicationDB;
\connect mapApplicationDB

DROP TABLE IF EXISTS users;

CREATE TABLE users (
  username varchar(255) PRIMARY KEY NOT NULL,
  password varchar(255) NOT NULL,
  first_name varchar(255) NOT NULL,
  last_name varchar(255) NOT NULL,
  email varchar(255) NOT NULL,
  privilegeLevel int NOT NULL
);
