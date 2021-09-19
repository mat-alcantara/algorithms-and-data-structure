-- Query the NAME field for all American cities in the CITY table with populations larger than 120000. 
-- The CountryCode for America is USA.
-- Challenge URL: https://www.hackerrank.com/challenges/revising-the-select-query-2/problem
SELECT NAME
FROM city
WHERE(
    POPULATION > 120000
    AND COUNTRYCODE = 'USA'
  )