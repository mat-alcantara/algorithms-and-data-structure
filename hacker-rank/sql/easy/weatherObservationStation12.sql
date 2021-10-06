-- Query the list of CITY names from STATION that do not start with vowels and do not end with vowels. 
-- Your result cannot contain duplicates.
-- Challenge URL: https://www.hackerrank.com/challenges/weather-observation-station-12/problem
SELECT DISTINCT City
FROM STATION
WHERE City NOT LIKE '[a,e,i,o,u]%'
  AND City NOT LIKE '%[a,e,i,o,u]'