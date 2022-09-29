
USE employee_trackerDB;

INSERT INTO department (name)
VALUES ('Sales'), ('Engineering'), ('Finance'), ('Legal');

INSERT INTO role (title, salary, department_id)
VALUES ("Sales Lead", 250000, 1),
       ("Sales Person", 198000, 1),
       ("Lead Engineer", 180000, 2),
       ("Software Engineer", 116000, 2),
	("Accountant", 98000, 3),
       ("Legal Team Lead", 150000, 4),
       ("Lawyer", 98000, 4);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Pack", "Alex", 1, 3),
       ("Chef", "Raekwon", 1, 1),
       ("Scott", "Madlib", 3, null),
       ("Throw", "Wildchild", 2, 3),
       ("Butterwolf", "Peanut", 3, null),
       ("Digital", "Bobby", 4, null),
       ("Finesse", "Lord", 4, 6),
       ("Sumo", "Defari", 2, 2);