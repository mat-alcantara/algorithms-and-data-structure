-- Challenge URL: https://www.hackerrank.com/challenges/average-population-of-each-continent/problem
SELECT COUNTRY.CONTINENT,
  FLOOR(AVG(CITY.POPULATION))
FROM CITY
  INNER JOIN COUNTRY ON CITY.CountryCode = COUNTRY.Code
GROUP BY COUNTRY.CONTINENT