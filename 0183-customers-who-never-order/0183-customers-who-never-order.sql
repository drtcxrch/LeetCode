# Write your MySQL query statement below
SELECT name as Customers
FROM Customers c
WHERE NOT EXISTS (
    SELECT id
    FROM Orders o
    WHERE o.customerId = c.id
    );