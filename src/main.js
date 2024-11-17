//
// Variable or Const
//

console.log("$ Variable or Const $")


// let, const
{
    let age = 30; 
    age = 31;
    
    console.log(age);
}

// 
// Data types
// 

// String, Numbers, Boolean, null, undefined

console.log("$ Data types $")

{
    const name = "John";
    const age = 30;
    const rating = 4.5;
    const isCool = true;
    const x = null;
    const y = undefined;
    let z;

    console.log("type of name: " + typeof name);
    console.log("type of age: " + typeof age);
    console.log("type of rating: " + typeof rating);
    console.log("type of isCool: " + typeof isCool);
    console.log("type of x: " + typeof x);
    console.log("type of y: " + typeof y);
    console.log("type of z: " + typeof z);
}

//
// Concatenation
//

console.log("$ Concatenation $")

{
    const name = "John";
    const age = 30;
    
    // old
    console.log("My name is " + name + " and I am " + age);

    // new - Template String
    const hello = `My name is ${name} and I am ${age}`;
    console.log(hello);
}

//
// Strings
//

console.log("$ Strings $")

{
    const s = "Hello World";
    
    console.log(s.length);

    console.log(s.substring(0, 5).toUpperCase());

    console.log(s.split(""));

    const tags = "technology, computer, it, code";
    console.log(tags.split(", ")) ;
}

/*
multiline
comment
*/

// 
// Arrays
// 

console.log("$ Arrays $")

{
    const numbers = new Array(1,2,3,4,5,6,7);
    console.log(numbers);

    const fruits = ['apples', 'oranges', 'pears']; // it's const
    fruits[3] = 'grapes'; // good!
    // fruits = 'newstuff' <-- BAD! 

    fruits.push('mangos');
    fruits.unshift('strawberries');
    fruits.pop();

    console.log(Array.isArray('hello'));
    console.log(fruits.indexOf('oranges'));

    console.log(fruits);
}

//
// Object literals
//

console.log("$ Object literals $")

{
    const person = {
        firstName: 'John',
        lastName: 'Doe',
        age: 25,
        hobbies: ['music', 'movbies', 'sports'],
        address: {
            street: '50 main st',
            city: 'Boston',
            state: 'MA'
        }
    }

    console.log(person.hobbies[0])

    const { firstName, lastName, address: { city } } = person;
    console.log(city)
    person.email = 'john@gmail.com';
}

//
// Converting to JSON and Iterating
//

console.log("$ Converting to JSON and Iterating $")

{
    const todos = [
        {
            id: 1,
            text: 'take out trash',
            isCompleted: true
        },
        {
            id: 2,
            text: 'meeting with boss',
            isCompleted: true
        },
        {
            id: 3,
            text: 'dentist appt',
            isCompleted: false
        },
        {
            id: 4,
            text: 'buy home',
            isCompleted: true
        }
    ];

    const todoJSON = JSON.stringify(todos);
    console.log(todoJSON);

    
    // For loop
    console.log("For loop");

    for(let i = 0; i < 10; i++)
    {
        console.log(`For Loop Number: ${i}`);
    }

    // While loop
    console.log("While loop");

    let i = 0;
    while(i < 10)
    {
        console.log(`While Loop Number: ${i}`);
        i++;
    }

    // For-of loop
    console.log("For-each loop");

    for(let todo of todos)
    {
        console.log(todo.text);
    }

    // ForEach

    todos.forEach(function(todo) {
        console.log(todo.text)
    });

    // map
    const todoTextArray = todos.map(function(todo) {
        return todo.text;
    });
    console.log(todoTextArray);

    // filter
    const todoCompleted = todos.filter(function(todo) {
        return todo.isCompleted === true;
    });
    console.log(todoCompleted);

    // filter + map
    const todoCompletedText = todos.filter(function(todo) {
        return todo.isCompleted === true;
    }).map(function(todo){
        return todo.text;
    });
    console.log(todoCompletedText);
}

//
// Conditionals
//
console.log("$ Conditionals $")

{
    const x = 10;

    console.log("== for int 10 and int 10");
    if(x == 10) // '==' just checks just a value (without checking data type) 
    {
        console.log('x is 10');
    }
    else
    {
        console.log('x is NOT 10');
    }

    console.log("== for int 10 and string '10'");
    if(x == '10') // '==' just checks just a value (without checking data type) 
    {
        console.log('x is 10');
    }
    else
    {
        console.log('x is NOT 10');
    }

    console.log("== for int 10 and int 10");
    if(x === 10) // '===' just checks value and data type
    {
        console.log('x is 10');
    }
    else
    {
        console.log('x is NOT 10');
    }

    console.log("== for int 10 and string '10'");
    if(x === '10') // '===' just checks value and data type
    {
        console.log('x is 10');
    }
    else
    {
        console.log('x is NOT 10');
    }

    // short-hand if statement
    const color = x > 10 ? 'red' : 'blue';
    console.log(color);

    // switches

    switch(color){
        case 'red':
            console.log('color is red');
            break;
        case 'blue':
            console.log('color is blue');
            break;
        default:
            console.log('color is not red or blue');
            break;
    }
}

// 
// Functions
// 
console.log("$ Functions $")

{
    function addNums(num1 = 1, num2 = 1)
    {
        return num1 + num2;
    }
    console.log(addNums());
    console.log(addNums(5, 5));

    const addNumsVar = (num1 = 1, num2 = 1) => {
        return num1 + num2;
    }

    const addNumsVar2 = (num1 = 1, num2 = 1) => num1 + num2;

    console.log(addNums(10,10));

    const addNumsVar3 = num1 => num1 + 5;
    console.log(addNumsVar2(5));
}

// Object Oriented Programming
console.log("$ Object Oriented Programming $")

{
    // class in function
    {
        // Constructor function
        function Person(firstName, lastName, dob)
        {
            this.firstName = firstName;
            this.lastName = lastName;
            this.dob = new Date(dob);

            this.getFullName = function() {
                return `${this.firstName} ${this.lastName}`;
            }
        }

        // adding function to prototype 
        Person.prototype.getBirthYear = function() {
            return this.dob.getFullYear();
        }

        // Instatniate Object
        const person1 = new Person('John', 'Doe', '4-3-1980');
        const person2 = new Person('Mary', 'Smith', '3-6-1990');
        
        console.log(person1);
        
        console.log(person2.dob.getFullYear());
        console.log(person1.getBirthYear());

        console.log(person1.getFullName());
    }

    // real classes

    class Person {
        constructor(firstName, lastName, dob) {
            this.firstName = firstName;
            this.lastName = lastName;
            this.dob = new Date(dob);
        }

        getBirthYear() {
            return this.dob.getFullYear();
        }

        getFullName() {
            return `${this.firstName} ${this.lastName}`;
        }
    }

    const person1 = new Person('Martin Luther', 'King II', '1-1-2083');
    console.log(person1);
    console.log(person1.getBirthYear());
    console.log(person1.getFullName());
}