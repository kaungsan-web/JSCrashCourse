// const person = {
//     firstName: 'John',
//     lastName: 'Doe',
//     age: 30,
//     hobbies:['music','movies','sports'],
//     address: {
//         street: '50 main st',
//         city: 'Boston',
//         state: 'MA'
//     }
// }

// person.email='jhon@gmail.com';
// console.log(person);

// const todos=[
//     {
//         id:1,
//         text: 'Take out trash',
//         isCompleted: true
//     },
//     {
//         id:2,
//         text: 'Meeting with boss',
//         isCompleted: true
//     },
//     {
//         id: 3,
//         text: 'Dentist appt',
//         isCompleted: true
//     },
// ];

// const todoJSON = JSON.stringify(todos);
// console.log(todoJSON);

// For Loop
// for(let i=0; i<10; i++){
//     console.log(`For Loop Number: ${i}`);
// }
//While Loop
// let i=0;
// while(i<10){
//     console.log(`While Loop Number: ${i}`);
//     i++;
// }
// for(let todo of todos){
//     console.log(todo.id);
// }

// const x=4;
// if(x === 10){
//     console.log('x is 10');
// } else if(x>10){
//     console.log('x is greater than 10');
// } else{
//     console.log('x is less than 10');
// }

//Constructor Function
// function Person(firstName,lastName,dob){
//     this.firstName=firstName;
//     this.lastName=lastName;
//     this.dob=new Date(dob);
//     this.getBirthYear=function(){
//         return this.dob.getFullYear();
//     }
//     this.getFullName=function(){
//         return `${this.firstName} ${this.lastName}`;
//     }
// }

// Person.prototype.getBirthYear=function(){
//     return this.dob.getFullYear();
// }
// Person.prototype.getFullName=function(){
//     return`${this.firstName} ${this.lastName}`;
// }

//Class
// class Person{
//     constructor(firstName, lastName, dob){
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.dob = new Date(dob);
//     }
//     getBirthYear(){
//         return this.dob.getFullYear();
//     }
//     getFullName(){
//         return `${this.firstName} ${this.lastName}`;
//     }
// }

//Instantiate Object
// const person1=new Person('Jhon', 'Doe', '4-3-1212');
// const person2 = new Person('Jhon', 'Bin', '5-3-1212');
// console.log(person1.getBirthYear());
// console.log(person1.getFullName());
// console.log(person2.getFullName());
// console.log(person1);

//Single Element
// console.log(document.getElementById('my-form'));
// console.log(document.querySelector('h1'));

//Multiple Element
// console.log(document.querySelectorAll('.item'));
// console.log(getElementsByClassName('item'));
// console.log(document.getElementsByTagName('li'));
// const items = document.querySelectorAll('.item');
// items.forEach((item) => console.log(item));

//Manipulating the DOM
// const ul = document.querySelector('.items');
// ul.remove();
// ul.lastElementChild.remove();
// ul.firstElementChild.textContent = 'Hello';
// ul.children[1].innerText = 'Brad';
// ul.lastElementChild.innerHTML = '<h1>Hello</h1>';

//const btn = document.querySelector('.btn');
// btn.style.background = 'red';


// Events

// Mouse Event
// btn.addEventListener('click', e => {
//     e.preventDefault();
//     console.log(e.target.className);
//     document.getElementById('my-form').style.background = '#ccc';
//     document.querySelector('body').classList.add('bg-dark');
//     ul.lastElementChild.innerHTML = '<h1>Changed</h1>';
// });

// Keyboard Event
// const nameInput = document.querySelector('#name');
// nameInput.addEventListener('input', e => {
//     document.querySelector('.container').append(nameInput.value);
// });


// User Form Script

// Put DOM elements into variables
// const myForm = document.querySelector('#my-form');
// const nameInput = document.querySelector('#name');
// const emailInput = document.querySelector('#email');
// const msg = document.querySelector('.msg');
// const userList = document.querySelector('#users');

// Listen for form submit
// myForm.addEventListener('submit', onSubmit);

//function onSubmit(e) {
    //e.preventDefault();

    //if (nameInput.value === '' || emailInput.value === '') {
        // alert('Please enter all fields');
        //msg.classList.add('error');
        //msg.innerHTML = 'Please enter all fields';

        // Remove error after 3 seconds
        //setTimeout(() => msg.remove(), 3000);
    } else {
        // Create new list item with user
        //const li = document.createElement('li');

        // Add text node with input values
        //li.appendChild(document.createTextNode(`${nameInput.value}: ${emailInput.value}`));

        // Add HTML
        // li.innerHTML = `<strong>${nameInput.value}</strong>e: ${emailInput.value}`;

        // Append to ul
        //userList.appendChild(li);

        // Clear fields
        //nameInput.value = '';
        //emailInput.value = '';
    }
}