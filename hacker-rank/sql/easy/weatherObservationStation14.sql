-- Challenge URL: https://www.hackerrank.com/challenges/weather-observation-station-14/problem?h_r=next-challenge&h_v=zen
SELECT ROUND(LAT_N, 4)
FROM STATION
WHERE LAT_N < 137.2345
ORDER BY LAT_N DESC
LIMIT 1