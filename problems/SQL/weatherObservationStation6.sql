--Query the list of CITY names starting with vowels (i.e., a, e, i, o, or u) from STATION. Your result cannot contain duplicates.
-- Challenge URL: https://www.hackerrank.com/challenges/weather-observation-station-6/problem
SELECT DISTINCT(CITY)
FROM STATION
WHERE CITY REGEXP '^[aeiou]'