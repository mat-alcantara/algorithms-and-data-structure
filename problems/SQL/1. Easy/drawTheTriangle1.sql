-- Challenge URL: https://www.hackerrank.com/challenges/draw-the-triangle-1/problem
set @i = 21;
select repeat('* ', @i := @i - 1)
from (
    select 1
    union
    select 2
    union
    select 3
  ) a,
  (
    select 1
    union
    select 2
    union
    select 3
  ) b,
  (
    select 1
    union
    select 2
    union
    select 3
  ) c
limit 20;