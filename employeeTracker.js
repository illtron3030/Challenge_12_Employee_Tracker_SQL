const mysql = require('mysql');
const inquirer = require('inquirer');
const cTable = require('console.table');

const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'SnowPlants45',
    database: 'employee_trackerdb'
  });
  
  connection.connect((err) => {
    if (err) {
      console.error(`error connecting: ${err.stack}`);
      return;
    }
    questions(); //Prompt for user questions
  });

const questions = () => {
    inquirer.prompt([{
      name: 'questionList',
      type: 'list',
      message: 'What would you like to do?',
      choices: ['View All Departments', 'View All Roles', 'View All Employees', 'Add A Department', 'Add A Role', 'Add An Employee', 'Update Employee Role'],
    }]).then((answer) =>{

        switch(answer.questionList)
        {
            case 'View All Departments':
                viewAllDepartments();
                break;
            
            case 'View All Roles':
                viewAllRoles();
                break;
            
            case 'View All Employees':
                viewAllEmployees();
                break;
            
            case 'Add A Department':
                addADepartment();
                break;
            
            case 'Add A Role':
                addARole();
                break;            
        
            case 'Add An Employee':
                addAnEmployee();
                break;            
        
            case 'Update Employee Role':
                updateEmployeeRole();
                break;     

            default:
                break;
        }
    });
    }

const viewAllDepartments = () => {
    connection.query(`SELECT * FROM department`, (err, res) => {
        console.table(res); 
        questions();
    });
};

const viewAllRoles = () => {
    connection.query(`SELECT * FROM role`,(err, res) => {
        console.table(res); 
        questions();
    }); 
};

const viewAllEmployees = () => {
    connection.query(`SELECT employee.id, employee.first_name AS 'First Name', employee.last_name AS 'Last Name', role.title as Title, department.name AS Department, 
    CONCAT('$', format(role.salary,0)) AS Salary, CONCAT(manager.first_name, ' ', manager.last_name) AS Manager 
    FROM employee 
    JOIN role ON employee.role_id = role.id 
    JOIN department ON role.department_id = department.id 
    LEFT JOIN employee AS manager ON employee.manager_id = manager.id ORDER BY employee.id ASC;`,(err, res) => {
        console.table(res); 
        questions();
    }); 
};