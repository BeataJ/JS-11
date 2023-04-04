// This is how a comment is added to JavaScript
// Comments are not executed - they are just there to provide extra
// information to you or other developers

// Exercise Time!

// 1) Create three new variables:
//    - A variable that stores the name of an online course of your choice
//    - A variable that stores the price of that course
//    - A variable that stores the three main goals that you have, when taking this course

let onLineCourse = '100 days DevOps';
let price = 16;
let goals = ['javascript','html', 'css'];

// 2) Output ("alert") the three variable values

alert(onLineCourse);
alert(price);
alert(goals);

// 3) Try "grouping" the three variables together and still output their values thereafter

let group = [onLineCourse,price,goals];
alert(group);

let newGroup = {
    name: onLineCourse,
    price1: price,
    newGoals: ['javascript','html', 'css']
}

alert(newGroup.name)
alert(newGroup.price1);
alert(newGroup.newGoals)

// 4) Also output the second element in your "main goals" variable
let second = goals[1];
alert(second);

// let second1 = newGroup.newGoals[1];
alert(newGroup.newGoals[1]);

// 5) Add a custom command that does the following:
//    - Use your "main goals" variable and access an element by its identifier
//    - The concrete identifier value should be dynamic / flexible 
//      (i.e. the command can be executed for different identifier)
//    - The "main goals" variable should also be dynamic: The command should work 
//      with ANY list of values
//    - The custom command should provide the accessed value (i.e. the list element)


function custom(array,i) {
    let result;
    result = array[i];
    return result;  
}

// 6) Execute your custom command from (5) and output ("alert") the result

let firstItem = custom(goals,0)
alert(firstItem);

let firstEl1 = custom(newGroup.newGoals,0);
alert(firstEl1);
