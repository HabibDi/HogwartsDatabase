// Exercice effectué sur DBfiddle en MySQL v5.7 sur le fichier hogwarts.js
// A réécrire en SQLite



CREATE TABLE houses(house_id INTEGER PRIMARY KEY AUTO_INCREMENT, house_name VARCHAR(50) UNIQUE);

CREATE TABLE teachers(teacher_id INTEGER PRIMARY KEY AUTO_INCREMENT, teacher_name VARCHAR(50) UNIQUE, course_name VARCHAR(50));


CREATE TABLE students(student_id INTEGER PRIMARY KEY AUTO_INCREMENT, student_name VARCHAR(50) UNIQUE, age INTEGER, house_id INTEGER, FOREIGN KEY(house_id) REFERENCES houses(house_id));

/* CREATE TABLE students_to_teachers (student_to_teacher_id INTEGER AUTO_INCREMENT, teacher_id INTEGER, student_id INTEGER, FOREIGN KEY (teacher_id) REFERENCES teachers(teacher_id), FOREIGN KEY students(student_id) ); */


/* INSERT INTO students_to_teachers(teacher_id, student_id, student_id) VALUES (1, 1, 2); */


CREATE TABLE animals(animal_id INTEGER PRIMARY KEY AUTO_INCREMENT, animal_name VARCHAR(50) UNIQUE, type VARCHAR(50)UNIQUE);

INSERT INTO houses(house_name) VALUES('gryffindor');
INSERT INTO houses(house_name) VALUES('slytherin');
INSERT INTO houses(house_name) VALUES('ravenclaw');
INSERT INTO houses(house_name) VALUES('hufflepuff');

INSERT INTO teachers(teacher_name, course_name) VALUES('minerva macgonagall', 'metamorphose');
INSERT INTO teachers(teacher_name, course_name) VALUES('severus rogue', 'potions');
INSERT INTO teachers(teacher_name, course_name) VALUES('filius flitwick', 'sortilèges');
INSERT INTO teachers(teacher_name, course_name) VALUES('pomona chourave', 'botanique');


INSERT INTO students(student_name, house_id, age) VALUES('harry potter', 1, 11);
INSERT INTO students(student_name, house_id, age) VALUES('ron weasley', 1, 12);
INSERT INTO students(student_name, house_id, age) VALUES('hermione granger', 1, 12);
INSERT INTO students(student_name, house_id, age) VALUES('draco malefoy', 2, 12);
INSERT INTO students(student_name, house_id, age) VALUES('vincent crabbe', 2, 12);
INSERT INTO students(student_name, house_id, age) VALUES('gregory goyle', 2, 12);

INSERT INTO animals(animal_name, type) VALUES('hedwige', 'chouette');
INSERT INTO animals(animal_name, type) VALUES('pattenrond', 'chat');
INSERT INTO animals(animal_name, type) VALUES('croutard', 'rat');