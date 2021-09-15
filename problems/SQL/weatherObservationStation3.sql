-- Query a list of CITY names from STATION for cities that have an even ID number. Print the results in any order, 
-- but exclude duplicates from the answer.
-- Challenge URL: https://www.hackerrank.com/challenges/weather-observation-station-3/problem
SELECT DISTINCT(CITY)
FROM STATION
WHERE ID % 2 = 0