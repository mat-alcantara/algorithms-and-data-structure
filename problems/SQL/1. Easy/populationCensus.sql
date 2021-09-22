-- Challenge URL: https://www.hackerrank.com/challenges/asian-population/problem
SELECT SUM(CITY.POPULATION)
FROM CITY
  INNER JOIN COUNTRY ON CITY.CountryCode = COUNTRY.Code
WHERE COUNTRY.CONTINENT = 'Asia'