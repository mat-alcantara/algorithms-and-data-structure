-- Query all attributes of every Japanese city in the CITY table. The COUNTRYCODE for Japan is JPN.
-- Challenge URL: https://www.hackerrank.com/challenges/japanese-cities-attributes/problem
SELECT *
FROM CITY
WHERE COUNTRYCODE = 'JPN'