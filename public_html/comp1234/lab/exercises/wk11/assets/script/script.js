//Task 2

alert('Everything is Awesome');

prompt('Enter Name: ');

confirm('Do you want to continue?');

let num1 = 7;
let num2 = 8;
let num3 = 9;
let firstName = 'Minh';
let lastName = 'Truong';
const age = 34;
let flag = true;

if (age<= 34) {
    console.log('My first name is ' + firstName);
    console.log('My last name is ' + lastName);
    console.log('My age is less then or equal to ' + age);
    document.write('My first name is ' + firstName);
    document.write('<br>' + 'My last name is ' + lastName);
    document.write('<br>' + 'My age is less then or equal to ' + age);

} else {
    console.log('My age is more than' + age);
    document.write('<br>' + 'My age is more than' + age);
}

if (flag) {
    document.getElementById('ID3').innerHTML="Introduction to Web Development";
}
