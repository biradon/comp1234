//Welcome Alert
alert('Welcome to my first JavaScript in COMP1234');

//Loop ask first name
do {
    var firstName = prompt('Please enter your first name:', 'Steve');
}
while (!isNaN(firstName) || firstName.length < 1);

//Loop ask last name
do {
    var lastName = prompt('Please enter your last name:', 'Jobs');
}
while (!isNaN(lastName) || lastName.length < 1);

//Ask program with default is Computer System Analyst
var program = prompt('Please enter your program name:', 'Computer Programming and Analysis')
if (program == '') {
    program = 'Computer System Analyst';
}


//Ask year with default is 1
do {
    var year = prompt('Please enter your year of study:', '1')
    if (year == '') {
        year = '1';
    }    
}
while (isNaN(year) || year < 1 || year > 3);

//Use id to fill by user input
document.getElementById('full_name').innerHTML ='Full name: ' + firstName + ' ' + lastName;
document.getElementById('program_of_study').innerHTML = 'Program name: ' +  program;
document.getElementById('year_of_study').innerHTML = 'Year of study: ' + year;

//Print to console
console.log("Full name: " + firstName + ' ' + lastName);
console.log("Program name: " +  program);
console.log("Year of study: " + year);






