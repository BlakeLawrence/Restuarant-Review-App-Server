--TERMINAL COMMANDS FOR INFO
-- for help \?
-- list of databases \l
-- create database CREATE DATABASE database name
-- list all tables \d

-- To alter table (add or remove columns)...
ALTER TABLE products ADD COLUMN featured boolean;
ALTER TABLE products DROP COLUMN featured;

-- Restuarants table commands
CREATE TABLE restuarants (
id BIGSERIAL NOT NULL PRIMARY KEY,
name VARCHAR(50) NOT NULL,
location VARCHAR(50) NOT NULL,
price_range INT NOT NULL check(price_range >= 1 AND price_range <= 5)
);

INSERT INTO restuarants (id, name, location, price_range) VALUES (123, 'mcdonalds', 'new york', 3);

-- Reviews table commands
CREATE TABLE reviews (
id BIGSERIAL NOT NULL PRIMARY KEY,
name VARCHAR(50) NOT NULL,
review TEXT NOT NULL,
rating INT check(rating >= 1 AND rating <= 5)
);
