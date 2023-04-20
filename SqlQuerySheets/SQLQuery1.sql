CREATE TABLE usersignup(
Id int IDENTITY(1,1) PRIMARY KEY,
UserName varchar(100),
Email varchar(100),
Password varchar(100),
PhoneNumber BIGINT NOT NULL,
Gender varchar(15),
newPassword varchar(100),
confirmPassword varchar(100)
);

--DROP TABLE usersignup


INSERT INTO usersignup (Username, Email, Password, PhoneNumber, Gender)
VALUES ('KhawajaUsamaYasir', 'usamayasir32@gmail.com', 'Usama@123', 03492402306, 'Male')

select * from usersignup

UPDATE usersignup
SET Password = 'usama@123'
WHERE Password = 'Usama@123';
