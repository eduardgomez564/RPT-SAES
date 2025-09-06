CREATE TABLE admin (
    admin_ID INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50) NOT NULL,
    password VARCHAR(255) NOT NULL
);

CREATE TABLE principal (
    principal_ID INT AUTO_INCREMENT PRIMARY KEY,
    email VARCHAR(100) NOT NULL,
    phone_number VARCHAR(20) NOT NULL,
    password VARCHAR(255) NOT NULL
);

CREATE TABLE master_teacher (
    teacher_ID INT AUTO_INCREMENT PRIMARY KEY,
    email VARCHAR(100) NOT NULL,
    phone_number VARCHAR(20) NOT NULL,
    first_name VARCHAR(50) NOT NULL,
    middle_name VARCHAR(50),
    last_name VARCHAR(50) NOT NULL,
    password VARCHAR(255) NOT NULL,
    username VARCHAR(50) NOT NULL,
    grade VARCHAR(20),
    section VARCHAR(20)
);

CREATE TABLE teacher (
    teacher_ID INT AUTO_INCREMENT PRIMARY KEY,
    email VARCHAR(100) NOT NULL,
    phone_number VARCHAR(20) NOT NULL,
    first_name VARCHAR(50) NOT NULL,
    middle_name VARCHAR(50),
    last_name VARCHAR(50) NOT NULL,
    password VARCHAR(255) NOT NULL,
    username VARCHAR(50) NOT NULL,
    grade VARCHAR(20),
    section VARCHAR(20)
);

CREATE TABLE student (
    child_ID INT AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(50) NOT NULL,
    middle_name VARCHAR(50),
    last_name VARCHAR(50) NOT NULL,
    grade_level VARCHAR(20),
    section VARCHAR(20),
    age INT
);

CREATE TABLE parent (
    parent_ID INT AUTO_INCREMENT PRIMARY KEY,
    email VARCHAR(100) NOT NULL,
    phone_number VARCHAR(20) NOT NULL,
    first_name VARCHAR(50) NOT NULL,
    middle_name VARCHAR(50),
    last_name VARCHAR(50) NOT NULL,
    password VARCHAR(255) NOT NULL,
    username VARCHAR(50) NOT NULL,
    child_ID INT NOT NULL,
    relationship VARCHAR(50),
    FOREIGN KEY (child_ID) REFERENCES student(child_ID)
);
