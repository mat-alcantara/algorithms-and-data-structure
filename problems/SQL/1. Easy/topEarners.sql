-- Challenge URL: https://www.hackerrank.com/challenges/earnings-of-employees/problem
SELECT MAX(salary * months),
  COUNT(*)
FROM Employee
GROUP BY salary * months DESC
LIMIT 1