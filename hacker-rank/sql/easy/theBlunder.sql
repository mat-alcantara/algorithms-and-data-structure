-- Challenge URL: https://www.hackerrank.com/challenges/the-blunder/problem
SELECT CEILING(AVG(Salary) - AVG(REPLACE(Salary, '0', '')))
FROM EMPLOYEES;