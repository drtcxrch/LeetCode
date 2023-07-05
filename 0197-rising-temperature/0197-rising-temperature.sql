# Write your MySQL query statement below
SELECT w2.id
FROM (SELECT * FROM Weather ORDER BY recordDate) w1
INNER JOIN
(SELECT * FROM Weather ORDER BY recordDate) w2 ON w2.recordDate = DATE_ADD(w1.recordDate, INTERVAL 1 DAY)
WHERE
w2.temperature > w1.temperature;