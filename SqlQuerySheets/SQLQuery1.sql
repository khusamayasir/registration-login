CREATE TABLE usersignup(
Id int IDENTITY(1,1) PRIMARY KEY,
UserName varchar(100),
Email varchar(100),
Password varchar(100),
PhoneNumber BIGINT NOT NULL,
Gender varchar(15)
);
--
-- DROP TABLE usersigunp
-- DROP TABLE usersignup



INSERT INTO usersignup (Username, Email, Password, PhoneNumber)
VALUES ('KhawajaUsamaYasir', 'usamayasir32@gmail.com', 'Usama@123', 03492402306)