// alert('Happy Spring');
console.log('We are using external Java Script');
document.write('We are using external Java Script');

let day='Thursday';
console.log('Today is ' + day);
document.write('<br>' + 'Today is ' + ' ' + day);

document.getElementById('101').innerHTML="Have a lovely day!";

day = 'Friday';
document.write('<br>' + 'Tomorrow is ' + ' ' + day);

const age = 18; 
console.log('My age is ' + age);
document.write('<br>' + 'My age is' + ' ' + age);

let num1=5, num2=7;

let flag=true;

if (flag) {
    document.write('<br>' + 'Let\'s take a break')
}

if (age>= 18) {
    console.log('Nick is an adult');
    document.write('<br>' + 'Nick is an adult');
} else {
    console.log('Nick is a child');
    document.write('<br>' + 'Nick is a child');
}

let phrase1='Hello';
let phrase2='World!';

console.log(phrase1 + ' ' + phrase2);
document.write('<br>' + phrase1 + ' ' + phrase2);