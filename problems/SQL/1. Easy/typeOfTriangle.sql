-- Challenge URL: https://www.hackerrank.com/challenges/what-type-of-triangle/problem
SELECT CASE
    WHEN A + B > C
    AND B + C > A
    AND A + C > B THEN CASE
      WHEN A = B
      AND A = C THEN 'Equilateral'
      WHEN (
        A != B
        AND A = C
      )
      OR (
        A = B
        AND A != C
      )
      OR (
        A != B
        AND A != C
        AND B = C
      ) THEN 'Isosceles'
      WHEN A != B
      AND A != C
      AND B != C THEN 'Scalene'
    END
    ELSE 'Not A Triangle'
  END
FROM TRIANGLES