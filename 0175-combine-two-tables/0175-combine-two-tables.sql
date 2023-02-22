# Write your MySQL query statement below
SELECT Person.firstName, Person.lastName, Address.city, address.state  FROM Person LEFT JOIN Address ON Person.personId = Address.personId;