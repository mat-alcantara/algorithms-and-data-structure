-- Query the list of CITY names from STATION that either do not start with vowels or do not end with vowels. 
-- Your result cannot contain duplicates.
-- Challenge URL: https://www.hackerrank.com/challenges/weather-observation-station-11/problem
SELECT DISTINCT(CITY)
FROM STATION
WHERE CITY RLIKE '^[^aeiouAEIOU].*|.*[^AEIOUaeiou]$'